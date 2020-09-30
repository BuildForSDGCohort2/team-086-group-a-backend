const vendorsSchema = require("../../model/vendor_registration/vendor_signup");

const vendorSignUp = (req, res) => {
  const { owner, email, password, price, desc } = req.body;

  const newVendor = new vendorsSchema({
    owner,
    email,
    password,
    price,
    desc,
  });

  console.log("newV", newVendor);
};

module.exports = vendorSignUp;
