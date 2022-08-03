//make stripe invoice routes
module.exports = (app) => {
  const stripe_invoice = require("../controllers/stripe.invoice.controller.js");
  var router = require("express").Router();

  //make stripe invoice
  router.post("/", stripe_invoice.create);
  //get stripe invoice by id
  router.get("/:id", stripe_invoice.get);
  //get stripe invoice by date
  router.get("/:invoice", stripe_invoice.getByDate);
  //Update stripe invoice with id
  router.put("/:id/:invoice", stripe_invoice.update);
  //Delete stripe invoice id
  router.delete("/:id", stripe_invoice.delete);

  app.use("/api/stripe_invoice", router);
};
