const {
  categoryValidation,
} = require("../../middlewares/request-validators/VendorCategoryValidator");
const VendorCategories = require("../../models/vendorCategory/postCategory");
const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");

module.exports.PostCategories = async (req, res, next) => {
  const { category } = req.body;
  const { brandName } = req.params;

  //checking for error
  const { error } = categoryValidation.validate(req.body);

  if (error) {
    //send a message if error
    return res
      .status(400)
      .json({ message: error.details[0].message.split('"').join("") });
  }

  //checking form brand name
  const verifyBusinessName = await VendorsSchema.findOne({
    businessName: brandName,
  });

  //sending an error message if the brand name does not exist
  if (!verifyBusinessName) {
    return res.status(400).json({
      message: "brandName does not match the existing business name",
      error: "error",
    });
  }

  //verifying if the vendor has already added a category
  const vendorHasSetCategory = await VendorCategories.findOne({
    vendorId: req.vendor._id,
  });

  //sending a message to the vendor if the vendor id exist in the category list
  if (vendorHasSetCategory) {
    return res.status(401).json({
      message:
        "sorry you have already added a category, you can only update it if you wish",
      status: "error",
    });
  }

  //create new categories
  const NewCategories = new VendorCategories({
    category,
    brandName,
    vendorId: req.vendor._id,
  });

  try {
    NewCategories.save();
    return res.status(201).json({
      message: "category added successfully",
      status: "success",
    });
  } catch (error) {
    res.status(401).json({
      message: `user is unathorized`,
      status: "error",
    });
  }
};
