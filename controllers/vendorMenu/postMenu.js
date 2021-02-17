const {
  vendorsMenuValidator,
} = require("../../middlewares/request-validators/vendorsMenuValidator");
const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");
const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

const { userNotification } = require("../Notification/userNotification");

require("dotenv").config();

module.exports.postMenus = async (req, res) => {
  const { name, type, desc, price, discount, readyMeal, offers } = req.body;

  const { brandName } = req.params;

  const { error } = vendorsMenuValidator.validate(req.body);
  if (error) {
    //send a message if error
    return res
      .status(400)
      .json({ message: error.details[0].message.split('"').join("") });
  }

  //checking if the person is a vendor
  const verifyVendorId = await VendorsSchema.findOne({
    _id: req.vendor._id,
  });

  //verifying the if
  if (!verifyVendorId) {
    return res.status(401).json({
      status: "error",
      message: "access denied",
    });
  }

  const isVerifiedBrandName = await VendorsSchema.findOne({
    businessName: brandName,
  });

  if (!isVerifiedBrandName) {
    return res.status(400).json({
      message: "sorry no match was found for brand name",
      status: "error",
    });
  }

  const NewMenu = new VendorMenuList({
    name,
    type,
    image: req.file.path,
    desc,
    price,
    vendorId: req.vendor._id,
    discount,
    readyMeal,
    offers,
    brandName: brandName,
  });

  if (NewMenu.readyMeal === true) {
    userNotification(NewMenu);
  } else if (NewMenu.offers === true) {
    userNotification(NewMenu);
  }

  try {
    await NewMenu.save();
    return res.status(201).json({
      message: "menu added successfully",
      status: "success",
    });
  } catch (error) {
    return res.status(401).json({
      message: `user is unathorized error`,
      status: "error",
    });
  }
};
