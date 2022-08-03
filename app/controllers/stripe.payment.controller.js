const payment = require("../models/stripe.payment.model.js");

// make stripe payment controller
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Payment
  const payment = new payment({
    amount: req.body.amount,
    currency: req.body.currency,
    payment_method_types: req.body.payment_method_types,
    receipt_email: req.body.receipt_email,
    description: req.body.description,
    customer: req.body.customer,
  });

  // Save Payment in the database
  payment.create(payment, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Payment.",
      });
    else res.send(data);
  });
};

exports.listAll = (req, res) => {
  payment.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving payments.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  payment.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Payment with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Payment with id " + req.params.id,
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

  payment.updateById(
    req.params.id,
    new payment(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Payment with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Payment with id " + req.params.id,
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteById = (req, res) => {
  payment.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Payment with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Payment with id " + req.params.id,
        });
      }
    } else res.send({ message: `Payment was deleted successfully!` });
  });
};
