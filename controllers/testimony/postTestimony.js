const {
  testimonyValidator,
} = require("../../middlewares/request-validators/testimonyValidator");
const SignupUser = require("../../models/UserRegistration/UserSignUp");
const Testemony = require("../../models/testimonials/testimonial");
module.exports.postTestimony = async (req, res) => {
  const { text, name, job, image } = req.body;
  //setting params
  const { member_id } = req.params;

  //check for validation failure
  const { error } = testimonyValidator.validate(req.body);

  //check for error
  if (error) {
    //send a message if error
    return res
      .status(400)
      .json({ message: error.details[0].message.split('"').join("") });
  }

  //check if user exist
  const isAmember = await SignupUser.findById({
    _id: member_id,
  });

  if (!isAmember) {
    return res.status(403).json({
      message: "access denied, you are yet to signup with us",
      status: "error",
    });
  }

  const newTestimony = new Testemony({
    text,
    image,
    job,
    name,
    memberId: member_id,
  });

  try {
    await newTestimony.save();
    return res.status(200).json({
      message: "thank you for your response",
      status: "success",
    });
  } catch (error) {
    return res.status(401).json({
      message: `your testimony was not successful, ${error}`,
      status: "error",
    });
  }
};
