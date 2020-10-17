const {
  PostNotification,
} = require("../../controllers/Notification/postNotification");

const postNotificationRouter = require("express").Router();

postNotificationRouter.post("/notification", PostNotification);

module.exports = postNotificationRouter;
