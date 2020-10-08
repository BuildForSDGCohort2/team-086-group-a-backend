const {
  categoryValidation,
} = require("../../middlewares/request-validators/VendorCategoryValidator");
const VendorCategories = require("../../models/vendorCategory/postCategory");
const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");

module.exports.PostCategories = async (req, res) => {
  const { category, brandName } = req.body;
  const { vendor_id } = req.params;

  //checking for error
  const { error } = categoryValidation.validate(req.body);

  if (error) {
    //send a message if error
    return res
      .status(400)
      .json({ message: error.details[0].message.split('"').join("") });
  }

  //verifying if the client is a vendor
  const verifyCriteria = await VendorsSchema.findOne({
    _id: vendor_id,
  });

  //sending an error response
  if (!verifyCriteria) {
    return res.status(400).json({
      status: "error",
      message: "access denied",
    });
  }

  //verifying if the vendor has already added a category
  const vendorHasSetCategory = await VendorCategories.findOne({
    vendorId: vendor_id,
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
    vendorId: vendor_id,
  });

  try {
    NewCategories.save();
    return res.status(201).json({
      message: "menu added successfully",
      data: NewCategories,
      status: "success",
    });
  } catch (error) {
    res.status(401).json({
      message: `user is unathorized`,
      status: "error",
    });
  }
};
