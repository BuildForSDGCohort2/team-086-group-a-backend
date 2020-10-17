const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

module.exports.getOneMenuForUser = async (req, res) => {
  //get brand name from params
  const { brandName } = req.params;

  //check if menu of the brand name exists
  const findBrandMenu = await VendorMenuList.find({ brandName: brandName });

  //checking for error
  if (!findBrandMenu) {
    return res.statusa(400).json({
      message: "No match was found",
      status: "error",
    });
  }

  //send the found menu to the client
  return res.status(200).json({
    data: findBrandMenu,
    status: "success",
  });
};
