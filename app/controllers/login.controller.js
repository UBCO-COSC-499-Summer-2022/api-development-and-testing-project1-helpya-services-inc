const { setToken, validationTokenAuth } = require("../middleware/auth.js");
const stringEncryption = require("../middleware/cryptos.js");
const login = require("../models/login.model.js");

const AccountType = Object.freeze({
  consumer: 'consumer'
})

const loginAccount = (type, params,res) => {
  if(!params.email){
    return res.status(400).send({
      message: 'email is required'
    })
  }
  if(!params.password){
    return res.status(400).send({
      message: 'password is required'
    })
  }
  login.findByUserName(type,params.email,(err, data)=>{
    if(data) {
      if(stringEncryption(params.password)===data.password){
        // success
        return res.status(200).send(setToken(type,data[`${type}ID`]));
      }else{
        // password error
        return res.status(400).send({
          message: "Password mistake"
        });
      }
    }
    // error
    res.status(400).send({
      message: "The account or password is incorrect"
    });
  })
}

exports.loginConsumerAccount = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  loginAccount(AccountType.consumer,req.body,res);
}

