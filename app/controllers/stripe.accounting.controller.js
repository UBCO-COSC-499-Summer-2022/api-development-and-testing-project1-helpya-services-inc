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
  const Accounting = new accounting({
    customerID: req.body.customerID,
    account_holder_name: req.body.account_holder_name,
    account_holder_type: req.body.account_holder_type,
    country: req.body.country,
    currency: req.body.currency,
    routing_number: req.body.routing_number,
    account_number: req.body.account_number,
  });

  // Save Accounting in the database
  accounting.create(Accounting, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Accounting.",
      });
    else res.send(data);
  });
};

exports.listAllByCustomer = (req, res) => {
  accounting.listAllByCustomer(req.params.customerID, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving accountings.",
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  accounting.findById(req.params.customerID,req.params.bankID, (err, data) => {
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
    req.body.customerID,
    req.body.bankID,
    req.body.updateObject,
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
  accounting.remove(req.body.customerID, req.body.bankID, (err, data) => {
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
