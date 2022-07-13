module.exports = (app) => {
    const login = require("../controllers/login.controller.js");
    var router = require("express").Router();
    router.post("/consumer", login.loginConsumerAccount);
    router.post("/business", login.loginBusinessAccount);
    app.use("/api/login", router);
  };
  