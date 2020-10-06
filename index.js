const express = require("express");
const mongoose = require("mongoose");
const SignupUser = require("./routes/UserRegisteration/User");
const LoginUser = require("./routes/UserRegisteration/userLogin");
const vendorSignup = require("./routes/vendorsRegistration/vendorsSignup");
const vendorsignin = require("./routes/vendorsRegistration/vendorSignin");
const Payments = require("./routes/vendorsRegistration/flutterPaymentScheme");
const VendorsPostMenu = require("./routes/vendorMenu/postMenu");
const { userVerifyToken } = require("./middlewares/userVerifyToken");
const cors = require("cors");
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
app.use("/api/thinkspicefood", SignupUser);
app.use("/api/thinkspicefood", LoginUser);
app.use("/api/thinkspicefood", vendorSignup);
app.use("/api/thinkspicefood", vendorsignin);
app.use("/api/thinkspicefood", Payments);
app.use("/api/thinkspicefood", VendorsPostMenu);
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
