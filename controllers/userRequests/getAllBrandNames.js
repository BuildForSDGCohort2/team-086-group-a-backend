const VendorCategories = require("../../models/vendorCategory/postCategory");

module.exports.getAllCategory = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  // get all categories
  const allCategory = await VendorCategories.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);

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
