const {
  notificationValidator,
} = require("../../middlewares/request-validators/NotificationValidators");
const Notifications = require("../../models/Notification/postNotification");
var cron = require("node-cron");
const { userNotification } = require("./userNotification");

module.exports.PostNotification = async (req, res) => {
  let wrapper = null;
  if (req.body.image) {
    //checking for image in the req body
    wrapper = req.body;
  } else {
    wrapper = req.body;
  }

  //get the data from the req body
  const { title, image, description } = wrapper;

  //check for validation error
  const { error } = notificationValidator.validate(wrapper);

  //return error an message to the client
  if (error) {
    return res.status(400).json({
      message: error.details[0].message.split('"').join(""),
      status: "error",
    });
  }

  // creating a new notification
  const addNotification = new Notifications({
    title,
    image,
    description,
  });

  // sending notifications to the all users
  userNotification(addNotification);

  try {
    //save data to the the database
    await addNotification.save();

    //send response to the client
    return res.status(200).json({
      data: addNotification,
      status: "success",
    });
  } catch (error) {
    //send error message to the client
    return res.status(401).json({
      message: "posting notification was not successfull",
      error: "error",
    });
  }
};
