const SignupUser = require("../../models/UserRegistration/UserSignUp");
const VendorCategories = require("../../models/vendorCategory/postCategory");

module.exports.getAllCategoryForUser = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  // getting all the categories
  const allCategory = await VendorCategories.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);

  //check for error
  if (!allCategory) {
    return res.status(401).json({
      message: "No available category yet",
      status: "error",
    });
  }

  //send the found data to the client
  return res.status(200).json({
    data: allCategory,
    status: "success",
  });
};
