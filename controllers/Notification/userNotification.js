const SignupUser = require("../../models/UserRegistration/UserSignUp");

module.exports.userNotification = async (updates) => {
  // updating the user notification array with the notifications
  const newUpdate = await SignupUser.updateMany(
    { notification: Array },

    // pushing the notification to the nodification array
    { $push: { notification: updates } }
  );
};
