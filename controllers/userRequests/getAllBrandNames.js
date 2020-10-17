const VendorCategories = require("../../models/vendorCategory/postCategory");

module.exports.getAllCategory = async (req, res) => {
  // get all categories
  const allCategory = await VendorCategories.find();

  //check for error
  if (!allCategory) {
    return res.status(400).json({
      message: "No category have been added",
      status: "error",
    });
  }

  //map out vendor brandname from from the category collection
  let brandName = allCategory.map((brandName) => brandName.brandName);

  //send the brandnames to the client
  return res.status(200).json({
    data: brandName,
    status: "success",
  });
};
