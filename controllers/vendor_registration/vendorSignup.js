const vendorsSchema = require("../../models/vendor_registration/vendor_signup");
const {
  vendorsValidator,
} = require("../../middlewares/request-validators/vendor_registration_validator");

const bcrypt = require("bcryptjs");

const vendorSignUp = async (req, res, next) => {
  //getting the vendor signup data
  const {
    owner,
    number,
    businessType,
    location,
    businessName,
    email,
    password,
  } = req.body;

  //checking for error
  const { error } = await vendorsValidator.validate(req.body);

  if (error) {
    //send a message if error
    return res
      .status(400)
      .send({ message: error.details[0].message.split('"').join("") });
  }

  //check if email exist in the database
  const emailExist = await vendorsSchema.findOne({ email: email });

  if (emailExist) {
    return res.status(400).send({
      message: "email already exist",
    });
  }

  //generate salt
  const saltR = 10;
  bcrypt.genSalt(saltR, async (err, salt) => {
    if (err) {
      return res.status(500).send({
        message: "internal server error",
        status: "error",
      });
    }

    //hashing the password
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        return res.status(401).send({
          message: "user validation failed",
          status: "error",
        });
      }

      const vendor = new vendorsSchema({
        //creating an instance of User data
        owner,
        businessName,
        businessType,
        location,
        email,
        password: hash,
        number,
      });

      try {
        //saving the new member to mongodb
        await vendor.save();
        res.status(201).send({
          massage: "vendor added successfully",
          userId: vendor._id,
          status: "success",
        });
        console.log("object", vendor);
        // SendEmail.SendEmail(email, password, fullName);
      } catch (error) {
        return res.status(401).send({
          message: error.message,
          status: "error",
        });
      }
    });
  });
};

module.exports = vendorSignUp;
