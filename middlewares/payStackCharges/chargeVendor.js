const axios = require("axios");

module.exports.VerifyVendorCharge = async (req, res) => {
  const { reference } = req.params;

  const { PAY_STACK_TEST_KEY } = process.env;

  let output;
  await axios
    .get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        authorization: `Bearer ${PAY_STACK_TEST_KEY}`,
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
    })
    .then((success) => {
      //getting succuss data
      output = success;
    })
    .catch((error) => {
      //getting error data
      output = error;
    });

  // check for internet connectivity issues
  if (!output.response && output.status !== 200) {
    return res.status(400).json({
      message: "No internet Connection",
      status: "error",
    });
  }

  //confirm that there was no error in verification.
  if (output.response && !output.response.data.status) {
    return res.status(400).json({
      message: "Error verifying payment, 'unknown Transaction Reference Id",
      status: "error",
    });
  }

  //we return the output of the transaction
  return res.status(200).json({
    message: output.data.message,
    reference: output.data.data.reference,
    customerId: output.data.data.customer.id,
    status: "success",
  });
};
