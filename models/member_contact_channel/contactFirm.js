const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const membersReports = new Schema(
  {
    text: { type: String, required: true },
    memberId: { type: String },
  },
  { timestamps: true }
);

const MembersRoports = mongoose.model("members_report", membersReports);

module.exports = MembersRoports;
