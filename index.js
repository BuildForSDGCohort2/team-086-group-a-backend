const express = require("express");
const { rootRouter } = require("./routes/root-route");
const UserSignup = require("./routes/User");
require("dotenv").config();

const server = express();
const { urlencoded, json } = express;
server.use([urlencoded({ extended: true }), json()]);

const apiVersion = "v1.0.0";

server.use(`/api/${apiVersion}`, [rootRouter]);
server.use(UserSignup);
server.use(cors());
const normalizePort = () => {
  const port = parseInt(process.env.PORT, 10);
  if (process.env.PORT && Number.isNaN(port)) {
    return process.env.PORT;
  }
  if (port >= 0) {
    return port;
  }
  return 3000;
};

const port = normalizePort();
const hostname = process.env.HOSTNAME || "localhost";

const dev = { team_086_group_a: "buildforsdg project" };

server.listen(port, () =>
  console.log(
    `dev ${dev.team_086_group_a} server ${apiVersion} listening on ${hostname}:${port}`
  )
);
