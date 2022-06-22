const consumer_history = require("../models/consumer_history.model.js");
// Create and Save a new consumer history
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a consumer_history
  const ConsumerHistory = new consumer_history({
    consumerID: req.body.consumerID,
    consumer_historyID: req.body.consumer_historyID,
    payment_method: req.body.payment_method,
    consumer_history_name: req.body.consumer_history_name,
    payment_logs: req.body.payment_logs,
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
exports.findAll = (req, res) => {};
// Find a single consumer history with a id
exports.findOne = (req, res) => {};
// find all published consumer history
exports.findAllPublished = (req, res) => {};
// Update a consumer history identified by the id in the request
exports.update = (req, res) => {};
// Delete a consumer history with the specified id in the request
exports.delete = (req, res) => {};
// Delete all consumer history from the database.
exports.deleteAll = (req, res) => {};
