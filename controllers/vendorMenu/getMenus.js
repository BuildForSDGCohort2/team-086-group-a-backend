const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

module.exports.getAllMenus = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  //get all menus of the specified vendor
  const GetMenuBysSpecifiedVendor = await VendorMenuList.find({
    vendorId: req.vendor._id,
  })
    .limit(limit * 1)
    .skip(page * limit);

  //send an error response
  if (!GetMenuBysSpecifiedVendor.length) {
    return res.status(400).json({
      message: "no record of the vendors menu was found",
      status: "error",
    });
  }
  //getting the total count of the vendor menu
  const collectionCount = await VendorMenuList.countDocuments({
    vendorId: req.vendor._id,
  })
    .limit(limit)
    .skip(page * limit);

  //getting page counts
  const pageCount = Math.ceil(collectionCount / limit);

  //send a success response
  return res.status(200).json({
    data: GetMenuBysSpecifiedVendor,
    count: collectionCount,
    page: pageCount,
    status: "success",
  });
};
