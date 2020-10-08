const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

exports.deleteMenu = async (req, res) => {
  const { item_id } = req.params;
  const removedData = await VendorMenuList.findByIdAndRemove(
    item_id,
    (err, removed) => {
      if (err) {
        return res.status(400).json({
          message: err,
          status: "error",
        });
      } else if (removed === null) {
        return res.status(401).json({
          message: "no match was found",
          status: "error",
        });
      }
      return res.status(200).json({
        message: "menu deleted successfully",
        status: "success",
      });
    }
  );
};
