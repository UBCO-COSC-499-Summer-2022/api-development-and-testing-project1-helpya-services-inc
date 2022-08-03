const accounting = require("../models/stripe.accounting.model.js");

//make stripe accounting controller
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Accounting
  const accounting = new accounting({
    amount: req.body.amount,
    currency: req.body.currency,
    payment_method_types: req.body.payment_method_types,
    receipt_email: req.body.receipt_email,
    description: req.body.description,
    customer: req.body.customer,
  });

  // Save Accounting in the database
  accounting.create(accounting, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Accounting.",
      });
    else res.send(data);
  });
};

exports.listAll = (req, res) => {
  accounting.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving accountings.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  accounting.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Accounting with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Accounting with id " + req.params.id,
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

  accounting.updateById(
    req.params.id,
    new accounting(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Accounting with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Accounting with id " + req.params.id,
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteById = (req, res) => {
  accounting.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Accounting with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Accounting with id " + req.params.id,
        });
      }
    } else res.send({ message: `Accounting was deleted successfully!` });
  });
};

