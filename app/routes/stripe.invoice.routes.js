//make stripe invoice routes
module.exports = (app) => {
  const stripe_invoice = require("../controllers/stripe.invoice.controller.js");
  var router = require("express").Router();

  //make stripe invoice
  router.post("/", stripe_invoice.create);
  //find all stripe invoices
  router.get("/", stripe_invoice.listAll);
  //get stripe invoice by id
  router.get("/:id", stripe_invoice.findById);
  //get stripe invoice by cusotmer id
  router.get("/customer/:id", stripe_invoice.findByCustomerId);
  //Update stripe invoice with id
  router.put("/:id", stripe_invoice.updateById);
  //Delete stripe invoice id
  router.delete("/:id", stripe_invoice.deleteById);

  app.use("/api/stripe/invoice", router);
};
