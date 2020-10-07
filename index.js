const express = require("express");
const mongoose = require("mongoose");

const postUsersRouter = require("./routes/UserRegisteration/User");
const loginUsersRouter = require("./routes/UserRegisteration/userLogin");
const postMenuRouter = require("./routes/vendorMenu/postMenu");
const Payments = require("./routes/vendorsRegistration/flutterPaymentScheme");
const getAllMenusRouter = require("./routes/vendorMenu/getAllMenus");
const getOneMenuRouter = require("./routes/vendorMenu/getOneMenu");
const updateMenuRouter = require("./routes/vendorMenu/updateMenu");

const { userVerifyToken } = require("./middlewares/userVerifyToken");
const cors = require("cors");
const deleteMenuRouter = require("./routes/vendorMenu/deleteMenu");
const vendorCategoryRouter = require("./routes/vendorCategory/PostCategory");
const vendorSignUpRouter = require("./routes/vendorsRegistration/vendorsSignup");
const getCategoryRouter = require("./routes/vendorCategory/getCategory");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const PORT = process.env.Port || 3000;
const MONGODB_URI = "mongodb://localhost:07017(express.server)";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/", postUsersRouter);
app.use("/api/v1/", loginUsersRouter);
app.use("/api/v1/", vendorSignUpRouter);
app.use("/api/v1/", Payments);
app.use("/api/v1/", postMenuRouter);
app.use("/api/v1/", getAllMenusRouter);
app.use("/api/v1/", getOneMenuRouter);
app.use("/api/v1/", updateMenuRouter);
app.use("/api/v1/", deleteMenuRouter);
app.use("/api/v1/", vendorCategoryRouter);
app.use("/api/v1/", getCategoryRouter);
app.get("/api/thinkspicefood/userslist", userVerifyToken, (req, res) => {
  res.send({
    message: "hello am verified",
  });
});

mongoose
  .connect(MONGODB_URI, options)
  .then(() => {
    console.warn("conneted successfully");
  })
  .catch((err) => {
    throw "error occured : " + err;
  });

//start the server
app.listen(PORT, () => {
  console.warn(`server ready on http://localhost:${PORT}`);
});
