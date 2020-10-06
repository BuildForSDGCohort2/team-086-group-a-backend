const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

module.exports.getAllMenus = async (req, res) => {
  //destructure the vendor id params
  const { vendorId, busines_name } = req.params;

  //get all menus of the specified vendor
  const GetMenusSpecifiedVendor = await VendorMenuList.find({
    vendorId: vendorId,
    brandName: busines_name,
  });

  if (!GetMenusSpecifiedVendor.length) {
    return res.status(400).json({
      message: "no record of the vendors menu was found",
      status: "error",
    });
  }
  return res.status(201).json({
    message: GetMenusSpecifiedVendor,
    status: "success",
  });
};
