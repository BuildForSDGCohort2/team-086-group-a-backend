const postTestimonyRouter = require("express").Router();
const { postTestimony } = require("../../controllers/testimony/postTestimony");
const { userVerifyToken } = require("../../middlewares/userVerifyToken");

postTestimonyRouter.post(
  "/testimony/:member_id",
  userVerifyToken,
  postTestimony
);

module.exports = postTestimonyRouter;
