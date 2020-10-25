const reportChannelRouter = require("express").Router();
const {
  contactFirm,
} = require("../../controllers/member_contact_channel/contactFirm");

reportChannelRouter.post("/report", contactFirm);

module.exports = reportChannelRouter;
