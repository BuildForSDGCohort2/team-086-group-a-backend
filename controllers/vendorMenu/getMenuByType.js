const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");
const { json } = require("body-parser");

module.exports.GetMenuByType = async (req, res, next) => {
  //destructuring type from the request params
  const { name } = req.params;

  //getting the page and limit of the document from the req.query
  const { page = 1, limit = 10 } = req.query;

  //checking for the menus that match the search params
  const findMenuType = await VendorMenuList.find({ name: name })
    .limit(limit * 1)
    .skip((page - 1) * limit);

  //checking for error
  if (!findMenuType) {
    return res.status(400).json({
      message: "no match was found",
      status: "error",
    });
  }

  //getting the total count of the vendor menu
  const collectionCount = await VendorMenuList.find({
    name: name,
  }).countDocuments();

  const pageCount = Math.ceil(collectionCount / limit);

  //sending success response to the clientS
  return res.status(200).json({
    data: findMenuType,
    count: collectionCount,
    page: pageCount,
    status: "success",
  });
};
