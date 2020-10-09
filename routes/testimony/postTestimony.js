const postTestimonyRouter = require("express").Router();
const { useVerifyToken } = require("../../middlewares/userVerifyToken");
const { postTestimony } = require("../../controllers/testimony/postTestimony");

postTestimonyRouter.post("/testimony", useVerifyToken, postTestimony);

module.exports = postTestimonyRouter;
