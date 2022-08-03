//make stripe bank account routes
module.exports = (app) => {
  const stripe_bank_account = require("../controllers/stripe.bank.account.controller.js");
  var router = require("express").Router();

  //make stripe bank account
  router.post("/", stripe_bank_account.create);
  //get stripe bank account by id
  router.get("/:id", stripe_bank_account.get);
  //get stripe bank account by date
  router.get("/:bank_account", stripe_bank_account.getByDate);
  //Update stripe bank account with id
  router.put("/:id/:bank_account", stripe_bank_account.update);
  //Delete stripe bank account id
  router.delete("/:id", stripe_bank_account.delete);

  app.use("/api/stripe_bank_account", router);
};