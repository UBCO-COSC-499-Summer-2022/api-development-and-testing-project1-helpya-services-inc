const consumer = require("../models/consumer.model.js");
// Create and Save a new consumer
<<<<<<< HEAD
exports.create = (req, res) => {};
// Retrieve all consumer from the database (with condition).
exports.findAll = (req, res) => {};
// Find a single consumer with a id
exports.findOne = (req, res) => {};
// find all published consumer
exports.findAllPublished = (req, res) => {};
// Update a consumer identified by the id in the request
exports.update = (req, res) => {};
// Delete a consumer with the specified id in the request
exports.delete = (req, res) => {};
=======
exports.create = (req, res) => {
    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a Consumer
  const Consumer = new consumer({
    consumerID: req.query.consumerID,
    fname_of_consumer: req.query.fname_of_consumer,
    lname_of_consumer: req.query.lname_of_consumer,
    email: req.query.email,
    phone_number: req.query.phone_number,
    location: req.query.location,
    consumer_profile: req.query.consumer_profile,
    generalID: req.query.generalID,
  });

  // Save consumer in the database
  consumer.create(Consumer, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the consumer.",
      });
    else res.send(data);
  });
};
// Retrieve all consumer from the database (with condition).
exports.findAll = (req, res) => {
    consumer.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving consumer.",
          });
        else res.send(data);
      });
};
// Find a single consumer with a id
exports.findOne = (req, res) => {
    consumer.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found consumer with id ${req.params.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Error retrieving consumer with id " + req.params.id,
            });
          }
        } else res.send(data);
      });
};
// find all published consumer
exports.findAllPublished = (req, res) => {};
// Update a consumer identified by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
      }
      console.log(req.body);
      consumer.updateById(req.params.id, new consumer(req.body), (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found consumer with id ${req.params.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Error updating consumer with id " + req.params.id,
            });
          }
        } else res.send(data);
      });
};
// Delete a consumer with the specified id in the request
exports.delete = (req, res) => {
    consumer.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found consumer with id ${req.params.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Could not delete consumer with id " + req.params.id,
            });
          }
        } else res.send({ message: `consumer was deleted successfully!` });
      });
};
>>>>>>> cb1acd7dfbf9a98b3694d42ea09ec374954ba06a
// Delete all consumer from the database.
exports.deleteAll = (req, res) => {};
