const VendorCategories = require("../../models/vendorCategory/postCategory");

module.exports.getOneCategoryForUser = async (req, res) => {
  //get brand name from params
  const { brandName } = req.params;

  //check for category of the brand name
  const findBrandNameCategory = await VendorCategories.findOne({
    brandName: brandName,
  });

  //check for error
  if (!findBrandNameCategory) {
    return res.status(400).json({
      message: "No match was found",
      status: "error",
    });
  }

  //   send data to the client
  return res.status(200).json({
    data: findBrandNameCategory,
    status: "success",
  });
};
