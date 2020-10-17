const SignupUser = require("../../models/UserRegistration/UserSignUp");

module.exports.getLoggedinUserObject = async (req, res) => {
  //get user id
  const { userId } = req.params;

  //check if user exist
  const findLoggedInUser = await SignupUser.findById({ _id: userId });

  //check for error
  if (!findLoggedInUser) {
    return res.status(400).json({
      message: "don't try what you are about to do",
      error: "error",
    });
  }

  //return data to the client
  return res.status(200).json({
    data: findLoggedInUser,
    status: "success",
  });
};
