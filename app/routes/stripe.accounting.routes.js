//make stripe bank account routes
module.exports = (app) => {
  const stripe_bank_account = require("../controllers/stripe.accounting.controller.js");
  var router = require("express").Router();

  //make stripe bank account
  router.post("/", stripe_bank_account.create);
  //list all bank_accounts
  router.get("/:customerID", stripe_bank_account.listAllByCustomer);
  //get stripe bank account by id
  router.get("/:customerID/:bankID", stripe_bank_account.findById);
  //Update stripe bank account with id
  router.put("/", stripe_bank_account.updateById);
  //Delete stripe bank account id
  router.delete("/", stripe_bank_account.deleteById);

  app.use("/api/stripe/bankaccount", router);
};