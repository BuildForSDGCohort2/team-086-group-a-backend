const express = require("express");
const mongoose = require("mongoose");

const postUsersRouter = require("./routes/UserRegisteration/User");
const loginUsersRouter = require("./routes/UserRegisteration/userLogin");
const postMenuRouter = require("./routes/vendorMenu/postMenu");
const Payments = require("./routes/vendorsRegistration/flutterPaymentScheme");
const getAllMenusRouter = require("./routes/vendorMenu/getAllMenus");
const getOneMenuRouter = require("./routes/vendorMenu/getOneMenu");
const updateMenuRouter = require("./routes/vendorMenu/updateMenu");
const deleteMenuRouter = require("./routes/vendorMenu/deleteMenu");
const vendorCategoryRouter = require("./routes/vendorCategory/PostCategory");
const vendorSignUpRouter = require("./routes/vendorsRegistration/vendorsSignup");
const getCategoryRouter = require("./routes/vendorCategory/getCategory");
const updateCategoryRouter = require("./routes/vendorCategory/updateCategory");
const deleteCategoryRouter = require("./routes/vendorCategory/deleteCategory");
const vendorSignInRouter = require("./routes/vendorsRegistration/vendorSignin");
const cors = require("cors");
const postTestimonyRouter = require("./routes/testimony/postTestimony");
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/", postUsersRouter);
app.use("/api/v1/", loginUsersRouter);
app.use("/api/v1/", vendorSignUpRouter);
app.use("/api/v1/", vendorSignInRouter);
app.use("/api/v1/", Payments);
app.use("/api/v1/", postMenuRouter);
app.use("/api/v1/", getAllMenusRouter);
app.use("/api/v1/", getOneMenuRouter);
app.use("/api/v1/", updateMenuRouter);
app.use("/api/v1/", deleteMenuRouter);
app.use("/api/v1/", vendorCategoryRouter);
app.use("/api/v1/", getCategoryRouter);
app.use("/api/v1/", updateCategoryRouter);
app.use("/api/v1/", deleteCategoryRouter);
app.use("/api/v1/", postTestimonyRouter);

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
  console.warn(`server ready on ${PORT}`);
});
