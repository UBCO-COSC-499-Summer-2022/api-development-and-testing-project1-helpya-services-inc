//make stripe payment routes
module.exports = (app) => {
  const stripe_payment = require("../controllers/stripe.payment.controller.js");
  var router = require("express").Router();

  //make stripe payment
  router.post("/", stripe_payment.create);
  //list all payments
  router.get("/", stripe_payment.listAll);
  //get stripe payment by id
  router.get("/:id", stripe_payment.findById);
  //Update stripe payment with id
  router.put("/:id/:payment", stripe_payment.updateById);
  //Delete stripe payment id
  router.delete("/:id", stripe_payment.deleteById);

  app.use("/api/stripe_payment", router);
};