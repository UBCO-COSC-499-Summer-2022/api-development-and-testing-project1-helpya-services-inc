const credit_card_info = require("../models/credit_card_info.model.js");
<<<<<<< HEAD
// Create and Save a new credit card information
exports.create = (req, res) => {};
// Retrieve all credit card information from the database (with condition).
exports.findAll = (req, res) => {};
// Find a single credit card information with a id
exports.findOne = (req, res) => {};
// find all published credit card information
exports.findAllPublished = (req, res) => {};
// Update a credit card information identified by the id in the request
exports.update = (req, res) => {};
// Delete a credit card information with the specified id in the request
exports.delete = (req, res) => {};
=======

// Create and Save a new credit card information
exports.create = (req, res) => {
      // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a credit card information
  const CreditCardInfo = new credit_card_info({
    consumerID: req.query.consumerID,
    name_on_card: req.query.name_on_card,
    credit_card_number: req.query.credit_card_number,
    exp_date: req.query.exp_date,
    csc_num: req.query.csc_num,
  });

  // Save credit card information in the database
  credit_card_info.create(CreditCardInfo, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the credit card information.",
      });
    else res.send(data);
  });
};
// Retrieve all credit card information from the database (with condition).
exports.findAll = (req, res) => {
    credit_card_info.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving credit card information.",
          });
        else res.send(data);
      });
};
// Find a single credit card information with a id
exports.findOne = (req, res) => {
    credit_card_info.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found credit card information with id ${req.params.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Error retrieving credit card information with id " + req.params.id,
            });
          }
        } else res.send(data);
      });
};
// find all published credit card information
exports.findAllPublished = (req, res) => {};
// Update a credit card information identified by the id in the request
exports.update = (req, res) => {
      // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  credit_card_info.updateById(req.params.id, new credit_card_info(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found credit card information with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating credit card information with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
// Delete a credit card information with the specified id in the request
exports.delete = (req, res) => {
    credit_card_info.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found credit card information with id ${req.params.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Could not delete credit card information with id " + req.params.id,
            });
          }
        } else res.send({ message: `credit card information was deleted successfully!` });
      });
};
>>>>>>> cb1acd7dfbf9a98b3694d42ea09ec374954ba06a
// Delete all credit card information from the database.
exports.deleteAll = (req, res) => {};
