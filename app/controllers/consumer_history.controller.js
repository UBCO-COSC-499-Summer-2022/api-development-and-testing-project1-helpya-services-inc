const consumer_history = require("../models/consumer_history.model.js");
// Create and Save a new consumer history
<<<<<<< HEAD
exports.create = (req, res) => {};
// Retrieve all consumer history from the database (with condition).
exports.findAll = (req, res) => {};
// Find a single consumer history with a id
exports.findOne = (req, res) => {};
// find all published consumer history
exports.findAllPublished = (req, res) => {};
// Update a consumer history identified by the id in the request
exports.update = (req, res) => {};
// Delete a consumer history with the specified id in the request
exports.delete = (req, res) => {};
=======
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a consumer_history
  const ConsumerHistory = new consumer_history({
    consumerID: req.query.consumerID,
    payment_method: req.query.payment_method,
    consumer_history_name: req.query.consumer_history_name,
    payment_logs: req.query.payment_logs,
  });

  // Save consumer_history in the database
  consumer_history.create(ConsumerHistory, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the consumer_history.",
      });
    else res.send(data);
  });
};

// Retrieve all consumer history from the database (with condition).
exports.findAll = (req, res) => {
  consumer_history.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving consumer history.",
      });
    else res.send(data);
  });
};
// Find a single consumer history with a id
exports.findOne = (req, res) => {
  consumer_history.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found consumer history with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving consumer history with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
// find all published consumer history
exports.findAllPublished = (req, res) => {};
// Update a consumer history identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }
    console.log(req.body);
    consumer_history.updateById(req.params.id, new consumer_history(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found consumer history with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating consumer history with id " + req.params.id,
          });
        }
      } else res.send(data);
    });
};
// Delete a consumer history with the specified id in the request
exports.delete = (req, res) => {
  consumer_history.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found consumer history with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete consumer history with id " + req.params.id,
        });
      }
    } else res.send({ message: `consumer history was deleted successfully!` });
  });
};
>>>>>>> cb1acd7dfbf9a98b3694d42ea09ec374954ba06a
// Delete all consumer history from the database.
exports.deleteAll = (req, res) => {};
