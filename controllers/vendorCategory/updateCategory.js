const VendorCategories = require("../../models/vendorCategory/postCategory");

module.exports.putCategory = async (req, res) => {
  const { id } = req.params;

  //checking for category that holds the vendor id and business name in it object
  const checkVendorId = await VendorCategories.find({
    vendorId: req.vendor._id,
  });

  //checking for errors
  if (!checkVendorId) {
    return res.status(401).json({
      message: "sorry no category matches your request",
      status: "error",
    });
  }

  //updating the category
  const findCategoryByID = await VendorCategories.findByIdAndUpdate(
    id,
    req.body,
    (error, updated) => {
      if (error) {
        return res.status(401).json({
          message: "sorry no category was found",
          status: "error",
        });
      } else {
        return res.status(200).json({
          message: "category have been successfully updated",
          status: "error",
        });
      }
    }
  );
};
