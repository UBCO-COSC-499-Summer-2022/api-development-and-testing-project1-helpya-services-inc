const payment = require("../models/payment.model.js");
// Create and Save a new payment
exports.create = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a payment
  const Payment = new payment({
    transactionID: req.query.transactionID,
    consumerID: req.query.consumerID,
    businessID: req.query.businessID,
    payment_logs: req.query.payment_logs,
    payment_method: req.query.payment_method
  });

  // Save payment in the database
  payment.create(Payment, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the payment.",
      });
    else res.send(data);
  });
};
// Retrieve all payment from the database (with condition).
exports.findAll = (req, res) => {
    payment.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving payment.",
          });
        else res.send(data);
      });
};
// Find a single payment with a id
exports.findOne = (req, res) => {
    payment.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found payment with id ${req.params.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Error retrieving payment with id " + req.params.id,
            });
          }
        } else res.send(data);
      });
};
// find all published payment
exports.findAllPublished = (req, res) => {};
// Update a payment identified by the id in the request
exports.update = (req, res) => {
      // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  payment.updateById(req.params.id, new payment(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found payment with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating payment with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
// Delete a payment with the specified id in the request
exports.delete = (req, res) => {
    payment.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found payment with id ${req.params.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Could not delete payment with id " + req.params.id,
            });
          }
        } else res.send({ message: `payment was deleted successfully!` });
      });
};
// Delete all payment from the database.
exports.deleteAll = (req, res) => {};
