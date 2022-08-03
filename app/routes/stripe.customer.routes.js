//make stripe customer routes
module.exports = (app) => {
  const stripe_customer = require("../controllers/stripe.customer.controller.js");
  var router = require("express").Router();

  //make stripe customer
  router.post("/", stripe_customer.create);
  //get stripe customer by id
  router.get("/:id", stripe_customer.get);
  //get stripe customer by date
  router.get("/:customer", stripe_customer.getByDate);
  //Update stripe customer with id
  router.put("/:id/:customer", stripe_customer.update);
  //Delete stripe customer id
  router.delete("/:id", stripe_customer.delete);

  app.use("/api/stripe_customer", router);
};
