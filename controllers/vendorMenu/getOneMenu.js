const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

module.exports.getOneMenu = async (req, res) => {
  const { item_id, vendorId, busines_name } = req.params;

  //get menu of the specified item
  const GetOneMenusBySpecifiedVendor =
    item_id &&
    (await VendorMenuList.find({
      vendorId: vendorId,
      brandName: busines_name,
      _id: item_id,
    }));

  //send an error response
  if (!GetOneMenusBySpecifiedVendor.length) {
    return res.status(400).json({
      message: "sorry item does not exist",
      status: "error",
    });
  }

  //send a success response
  return res.status(201).json({
    message: GetOneMenusBySpecifiedVendor,
    status: "success",
  });
};
