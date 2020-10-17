const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");
const { userNotification } = require("../Notification/userNotification");
const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");

module.exports.updateMenu = async (req, res) => {
  //getting the sent id
  const { item_id, vendorId } = req.params;

  //checking for a menu with the id and the item id
  const menuByVendor = await VendorMenuList.find({
    vendorId: vendorId,
    _id: item_id,
  });

  if (!menuByVendor) {
    return res.status(403).json({
      message: "access denied, you are not a vendor",
      status: "error",
    });
  }

  await VendorMenuList.findByIdAndUpdate(item_id, req.body, (err, updated) => {
    if (err) {
      return res.status(400).json({
        message: err,
        status: "error",
      });
    }

    return res.status(200).json({
      data: updated,
      status: "success",
    });
  });
  const checkForReadyMeal = await VendorMenuList.find({ readMeal: true });
  const checkForOffers = await VendorMenuList.find({ offers: true });

  userNotification(checkForReadyMeal);
  userNotification(checkForOffers);
};
