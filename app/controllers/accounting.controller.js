const accounting = require("../models/accounting.model.js");
// Create and Save a new accounting
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a business
  const Accounting = new accounting({
    businessID: req.body.businessID,
    payment_history: req.body.payment_history,
    bank_information: req.body.bank_information,
    rate_per_hour: req.body.rate_per_hour
  });

  // Save business in the database
  accounting.create(Accounting, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the business.",
      });
    else res.send(data);
  });
};

exports.createPaymentHistory = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Save payment history in the database
  accounting.createPaymentHistory(req.params.payment_history, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating paymenthistory.",
      });
    else res.send(data);
  });
};
// Retrieve all accounting from the database (with condition).
exports.findAll = (req, res) => {
  accounting.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving businesss.",
      });
    else res.send(data);
  });
};
// Find a single accounting with a id
exports.findOne = (req, res) => {
  accounting.findById(req.body.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found business with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving business with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a accounting identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  accounting.updateById(req.body.id, req.body, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found business with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating business with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
// Delete a accounting with the specified id in the request
exports.delete = (req, res) => {
  accounting.remove(req.body.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found business with ad id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete business with ad id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
