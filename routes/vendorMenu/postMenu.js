const postMenuRouter = require("express").Router();
const multer = require("multer");
const URL = require("url");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { postMenus } = require("../../controllers/vendorMenu/postMenu");

const { CLOUDINARY_ENV_URL } = process.env;

const cloudinary_url = URL.parse(`${process.env.CLOUDINARY_URL}`);

cloudinary.config({
  cloud_name: cloudinary_url.host,
  api_key: cloudinary_url.auth.split(":")[0],
  api_secret: cloudinary_url.auth.split(":")[1],
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "thinkspicefood_menu_image",
    format: async (req, file) => "png",
    public_id: (req, file) => file.filename,
  },
});

const parser = multer({ storage: storage });

postMenuRouter.post("/dashboard/vendor/menu", parser.single("file"), postMenus);

module.exports = postMenuRouter;
