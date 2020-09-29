const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv").config();
const cors = require("cors");
const SignupUser = require("./routes/UserRegisteration/User");
const LoginUser = require("./routes/UserRegisteration/userLogin");
const auth = require("./controllers/UserRegistration/verifyToken");
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

app.get("/userslist", auth, (req, res) => {
  res.send({
    message: "hellow am verifid",
  });
});
mongoose
  .connect(MONGODB_URI, options)
  .then(() => console.log("conneted successfully"))
  .catch((err) => console.log("error occured : " + err));

//start the server
app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
