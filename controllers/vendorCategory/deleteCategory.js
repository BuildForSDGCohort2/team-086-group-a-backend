const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");
const VendorCategories = require("../../models/vendorCategory/postCategory");

module.exports = async (req, res) => {
  const { category_id } = req.params;

  const verifyVendor = await VendorCategories.find({
    vendorId: req.vendor._id,
  });

  if (!verifyVendor) {
    return res.status(401).json({
      message: "no match was found",
      status: "error",
    });
  }

  const findCategoryAndDelete = await VendorCategories.findByIdAndDelete(
    category_id,
    (error, removed) => {
      if (error) {
        return res.status(401).json({
          message: "no match found",
          status: "error",
        });
      } else if (removed === null) {
        return res.status(401).json({
          message: "no match was found",
          status: "error",
        });
      }

      return res.status(200).json({
        message: "successfully deleted your category",
        status: "success",
      });
    }
  );
};
