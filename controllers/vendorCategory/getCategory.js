const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");

const VendorCategories = require("../../models/vendorCategory/postCategory");

module.exports.getCategory = async (req, res) => {
  const { business_name, vendor_id } = req.params;

  const hasRegisteredAsAVendor = await VendorsSchema.find({
    vendorId: vendor_id,
    businessName: business_name,
  });

  if (!hasRegisteredAsAVendor) {
    return res.status(401).json({
      message: "access denied, you are not yet a vendor",
      status: "error",
    });
  }

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
