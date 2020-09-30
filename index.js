const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://localhost:07017(express.server)";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(MONGODB_URI, options)
  .then(() => {
    console.warn("connected successfully");
  })
  .catch((err) => {
    throw `error occurred in ${error}`;
  });

app.listen(PORT, () =>
  console.warn(`server ready on http://localhost:${PORT}`)
);
