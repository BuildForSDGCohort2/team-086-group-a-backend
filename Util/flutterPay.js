let axios = require("axios");
const FlutterChargeModal = require("../models/vendor_registration/flutterChargeSchema");
module.exports.Payment = (req, res) => {
  const {
    amount,
    bankAccount,
    accountNumber,
    number,
    fullName,
    txRef,
    email,
    bankName,
  } = req.body;

  let data = new FlutterChargeModal({
    amount,
    bankAccount,
    accountNumber,
    number,
    fullName,
    txRef,
    bankName,
    email,
  });

  // const validates = Encrypt(process.env.FWENCRYPTION_KEY, data);
  // res.status(200).json({
  //   client: validates,
  // });

  let config = {
    method: "post",
    url: "https://api.flutterwave.com/v3/charges?type=debit_ng_account",
    headers: {
      "": "",
      Authorization: `Bearer ${process.env.FW_SECRETE_KEY}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.status(201).json({
        data: JSON.stringify(response.data),
        message: "success",
      });
    })
    .catch(function (error) {
      res.json({ message: error, status: "error" });
    });
};

const Encrypt = (key, text) => {
  var forge = require("node-forge");
  var cipher = forge.cipher.createCipher(
    "3DES-ECB",
    forge.util.createBuffer(key)
  );
  cipher.start({ iv: "" });
  cipher.update(forge.util.createBuffer(text, "utf-8"));
  cipher.finish();
  var encrypted = cipher.output;
  return forge.util.encode64(encrypted.getBytes());
};

// {
//   "amount":"100",
// "accountbank":"044",
// "email":"princewillchime43@gmail.com",
// "fullName":"chime chibuike princewill",
// "accountnumber":"3072209388",
// "number": "08169543479",
// "currency":"NGN",
// "tx_ref":"123"
// }
