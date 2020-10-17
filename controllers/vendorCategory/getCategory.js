const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");

const VendorCategories = require("../../models/vendorCategory/postCategory");

module.exports.getCategory = async (req, res) => {
  const { vendor_id } = req.params;

  const haveCategory = await VendorCategories.findOne({
    vendorId: vendor_id,
  });

  if (!haveCategory) {
    return res.status(401).json({
      message: "access denied no category was found with the request",
      status: "error",
    });
  }

  return res.status(200).json({
    data: haveCategory,
    status: "success",
  });
};
