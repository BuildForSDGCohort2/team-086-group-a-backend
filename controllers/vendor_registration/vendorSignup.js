const {
  vendorsValidator,
} = require("../../middlewares/request-validators/vendor_registration_validator");

const bcrypt = require("bcryptjs");
const {
  VendorsSchema,
} = require("../../models/vendor_registration/vendor_signup");

const vendorSignUp = async (req, res, next) => {
  //getting the vendor signup data
  const {
    number,
    businessType,
    subscriptionPlan,
    taxId,
    location,
    businessName,
    email,
    password,
  } = req.body;

  //checking for error
  const { error } = vendorsValidator.validate(req.body);

  if (error) {
    //send a message if error
    return res
      .status(400)
      .json({ message: error.details[0].message.split('"').join("") });
  }

  //check if email exist in the database
  const emailExist = await VendorsSchema.findOne({ email: email });

  if (emailExist) {
    return res.status(400).json({
      message: "user already exist",
    });
  }

  //generate salt
  const saltR = 10;
  bcrypt.genSalt(saltR, async (err, salt) => {
    if (err) {
      return res.status(500).json({
        message: "internal server error",
        status: "error",
      });
    }

    //hashing the password
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) {
        return res.status(401).json({
          message: "vendor validation failed",
          status: "error",
        });
      }

      const Vendor = new VendorsSchema({
        //creating an instance of vendor data
        businessName,
        businessType,
        subscriptionPlan,
        location,
        taxId,
        email,
        password: hash,
        number,
      });

      try {
        //saving the new member to mongodb
        await Vendor.save();
        res.status(201).json({
          massage: "vendor added successfully",
          vendorId: Vendor._id,
          status: "success",
        });

        // SendEmail.SendEmail(email, password, fullName);
      } catch (error) {
        return res.status(401).json({
          message: error.message,
          status: "error",
        });
      }
    });
  });
};

module.exports = vendorSignUp;
