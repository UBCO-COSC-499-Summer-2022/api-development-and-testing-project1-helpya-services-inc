//make stripe payment routes
module.exports = (app) => {
  const stripe_payment = require("../controllers/stripe.payment.controller.js");
  var router = require("express").Router();

  //make stripe payment
  router.post("/", stripe_payment.create);
  //get stripe payment by id
  router.get("/:id", stripe_payment.get);
  //get stripe payment by date
  router.get("/:payment", stripe_payment.getByDate);
  //Update stripe payment with id
  router.put("/:id/:payment", stripe_payment.update);
  //Delete stripe payment id
  router.delete("/:id", stripe_payment.delete);

  app.use("/api/stripe_payment", router);
};