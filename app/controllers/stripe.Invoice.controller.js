const invoice = require("../models/stripe.invoice.model.js");

//make stripe invoice controllers
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Invoice
  const invoice = new invoice({
    amount: req.body.amount,
    currency: req.body.currency,
    payment_method_types: req.body.payment_method_types,
    receipt_email: req.body.receipt_email,
    description: req.body.description,
    customer: req.body.customer,
  });

  // Save Invoice in the database
  invoice.create(invoice, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Invoice.",
      });
    else res.send(data);
  });
};

exports.listAll = (req, res) => {
  invoice.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving invoices.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  invoice.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Invoice with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Invoice with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.updateById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Update Invoice in the database
  invoice.updateById(req.params.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Invoice with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Invoice with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.deleteById = (req, res) => {
  invoice.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Invoice with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Invoice with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.findByCustomer = (req, res) => {
  invoice.findByCustomer(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Invoice with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Invoice with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
