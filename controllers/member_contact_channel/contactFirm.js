const {
  memberReportValidator,
} = require("../../middlewares/request-validators/memberReportsValidation");
const SignupUser = require("../../models/UserRegistration/UserSignUp");
const MembersRoports = require("../../models/member_contact_channel/contactFirm");

module.exports.contactFirm = async (req, res) => {
  const { text, memberId } = req.body;

  const { error } = memberReportValidator.validate(req.body);

  if (error) {
    return res.status(401).json({
      message: error.details[0].message.split('"').join(""),
      status: "error",
    });
  }

  if (memberId) {
    const verifyMember = await SignupUser.findById({
      _id: memberId,
    });

    if (!verifyMember) {
      return res.status(401).json({
        message:
          "access denied, please kindly check if your id is added correctly",
        status: "error",
      });
    }

    const newReportFromMember = new MembersRoports({
      text: text,
      memberId: memberId,
    });
    try {
      await newReportFromMember.save();
      return res.status(200).json({
        message: "your information has been sent successfully",
        status: "success",
      });
    } catch (error) {
      return res.status(401).json({
        message: error,
        status: "error",
      });
    }
  } else {
    let newReportFromNonMembers = new MembersRoports({
      text: text,
      memberId: "",
    });
    try {
      await newReportFromNonMembers.save();
      return res.status(200).json({
        message: "your information has been sent successfully",
        status: "success",
      });
    } catch (error) {
      return res.status(401).json({
        message: error,
        status: "error",
      });
    }
  }
};
