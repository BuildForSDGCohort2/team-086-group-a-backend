const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const postUsersRouter = require("./routes/UserRegisteration/User");
const loginUsersRouter = require("./routes/UserRegisteration/userLogin");
const postMenuRouter = require("./routes/vendorMenu/postMenu");
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
const postTestimonyRouter = require("./routes/testimony/postTestimony");
const reportChannelRouter = require("./routes/contact_channel/ReportChannel");
const verifyPaymentRouter = require("./routes/vendorsRegistration/paystackVerification");
const getAllBrandNamesRouter = require("./routes/userRequests/getAllBrandNames");
const postNotificationRouter = require("./routes/notification/postNotification");
const loggedInUserRouter = require("./routes/userRequests/getLoggedinUser");
const getAllMenuForUserRouter = require("./routes/userRequests/getAllMenus");
const getAllCategoryForUserRouter = require("./routes/userRequests/getAllCategory");
const getOneCategoryForUserRouter = require("./routes/userRequests/getoneCategory");
const getOneMenuForUserRouter = require("./routes/userRequests/getOneMenu");
const getMenuByTypeRouter = require("./routes/vendorMenu/getMenuByType");

require("dotenv").config();

//setting the mongoose options
const options = {
  useNewUrlParser: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
  useUnifiedTopology: true,
};

//setting the port to use
const PORT = process.env.PORT || 4000;

//getting the mongodb uri from the env file
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

app.use(
  cors({
    origin: [
      `${process.env.FRONT_URL}`,
      "http://192.168.43.203:3000",
      // "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/", postUsersRouter);
app.use("/api/v1/", loginUsersRouter);
app.use("/api/v1/", vendorSignUpRouter);
app.use("/api/v1/", vendorSignInRouter);
app.use("/api/v1/", verifyPaymentRouter);
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
app.use("/api/v1/", reportChannelRouter);
app.use("/api/v1/", getAllBrandNamesRouter);
app.use("/api/v1/", postNotificationRouter);
app.use("/api/v1/", loggedInUserRouter);
app.use("/api/v1/", getAllMenuForUserRouter);
app.use("/api/v1/", getAllCategoryForUserRouter);
app.use("/api/v1/", getOneCategoryForUserRouter);
app.use("/api/v1/", getOneMenuForUserRouter);
app.use("/api/v1/", getMenuByTypeRouter);

//connecting to the database
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
  console.log(`server ready on ${PORT}`);
});
