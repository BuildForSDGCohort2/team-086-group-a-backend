let axios = require("axios");

module.exports.Payment = (req, res) => {
  const {
    amount,
    accountBank,
    accountNumber,
    phoneNumber,
    fullName,
    txRef,
    email,
  } = req.body;
  let data = JSON.stringify({
    amount,
    accountBank,
    accountNumber,
    phoneNumber,
    fullName,
    txRef,
    email,
  });

  res.json({
    message: data,
  });

  //   let config = {
  //     method: "post",
  //     url: "https://api.flutterwave.com/v3/charges?type=debit_ng_account",
  //     headers: {
  //       "": "",
  //       Authorization: "Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X",
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
};
