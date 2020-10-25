const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

module.exports.getAllMenus = async (req, res) => {
  //get all menus of the specified vendor
  const GetMenuBysSpecifiedVendor = await VendorMenuList.find({
    vendorId: req.vendor._id,
  });

  //send an error response
  if (!GetMenuBysSpecifiedVendor.length) {
    return res.status(400).json({
      message: "no record of the vendors menu was found",
      status: "error",
    });
  }

  //send a success response
  return res.status(200).json({
    data: GetMenuBysSpecifiedVendor,
    status: "success",
  });
};
