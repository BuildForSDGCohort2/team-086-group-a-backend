const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

module.exports.updateMenu = async (req, res) => {
  //getting the sent id
  const { item_id } = req.params;

  const UpdateItem = await VendorMenuList.findByIdAndUpdate(
    item_id,
    req.body,
    (err, updated) => {
      if (error) {
        return res.status(400).json({
          message: error,
          status: "error",
        });
      }
      return res.status(200).json({
        data: updated,
        status: "success",
      });
    }
  );
};
