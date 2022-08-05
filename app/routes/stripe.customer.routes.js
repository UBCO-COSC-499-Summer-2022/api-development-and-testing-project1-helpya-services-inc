module.exports = (app) => {
  const stripe_customer = require("../controllers/stripe.customer.controller.js");
  var router = require("express").Router();
  //make stripe customer
  router.post("/", stripe_customer.create);
  //get all customers
  router.get("/", stripe_customer.listAll);
  //get stripe customer by id
  router.get("/:id", stripe_customer.findById);
  //Update stripe customer with id
  router.put("/:id", stripe_customer.updateById);
  //Delete stripe customer id
  router.delete("/:id", stripe_customer.deleteById);

  app.use("/api/stripe/customer", router);
};
