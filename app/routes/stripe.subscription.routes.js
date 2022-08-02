module.exports = (app) => {
  const sub = require("../controllers/stripe.subscription.controller.js");
  var router = require("express").Router();
  // sign up customer for subscription
  router.post("/:sub", subscription.signSub);
  // Apply coupon to subscription
  router.post("/:sub", subscription.ApplyCoupon);
  // Retrieve all subscriptions for customer
  router.get("/:customer", subscription.getSubByCustomer);
  // Update a Tutorial with id
  router.put("/:id", subscription.update);
  // Delete a Tutorial with id
  router.delete("/:subID", subscription.deleteSub);

  app.use("/api/subscription", router);
};
