const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(MONGODB_URI, Options)
  .then(console.log("connected succesfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`server ready on ${PORT}`);
});
