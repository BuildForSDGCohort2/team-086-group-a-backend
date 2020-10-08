const {
  vendorsMenuValidator,
} = require("../../middlewares/request-validators/vendorsMenuValidator");
const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");
const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

module.exports.postMenus = async (req, res) => {
  const { name, type, desc, price, discount, readyMeal, offers } = req.body;

  const { vendor_id, business_name } = req.params;

  const { error } = vendorsMenuValidator.validate(req.body);
  if (error) {
    //send a message if error
    return res
      .status(400)
      .json({ message: error.details[0].message.split('"').join("") });
  }

  //checking if the person is a vendor
  const verifyVendorId = await VendorsSchema.find({
    _id: vendor_id,
    brandName: business_name,
  });

  //verifying the if
  if (!verifyVendorId) {
    return res.status(400).json({
      status: "error",
      message: "access denied",
    });
  }

  const NewMenu = new VendorMenuList({
    name,
    type,
    image: req.file.path,
    desc,
    price,
    vendorId: vendor_id,
    discount,
    readyMeal,
    offers,
    brandName: business_name,
  });

  try {
    NewMenu.save();
    return res.status(201).json({
      message: "menu added successfully",
      status: "success",
    });
  } catch (error) {
    res.status(401).json({
      message: `user is unathorized error`,
      status: "error",
    });
  }
};
