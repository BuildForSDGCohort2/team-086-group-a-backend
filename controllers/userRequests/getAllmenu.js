const SignupUser = require("../../models/UserRegistration/UserSignUp");
const VendorMenuList = require("../../models/vendorsMenu/VendorsMenu");

module.exports.getAllMenuByUsers = async (req, res) => {
  //getting all the menu
  const allMenu = await VendorMenuList.find();

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
