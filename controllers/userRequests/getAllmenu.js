const SignupUser = require("../../models/UserRegistration/UserSignUp");
const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

module.exports.getAllMenuByUsers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  //getting all the menu
  const allMenu = await VendorMenuList.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
  //checking for error
  if (!allMenu) {
    return res.status(400).json({
      message: "sorry no menu yet",
      status: "error",
    });
  }

  //returningn the found data to the client
  return res.status(200).json({
    data: allMenu,
    status: "success",
  });
};
