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
app.use(postUsersRouter);
app.use(loginUsersRouter);
app.use(Payments);
app.use(postMenuRouter);
app.use(getAllMenusRouter);
app.use(getOneMenuRouter);
app.use(updateMenuRouter);
app.use(deleteMenuRouter);
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
