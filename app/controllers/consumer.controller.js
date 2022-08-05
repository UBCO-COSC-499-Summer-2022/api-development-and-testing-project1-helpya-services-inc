const stringEncryption = require("../middleware/cryptos.js");
const consumer = require("../models/consumer.model.js");
// Create and Save a new consumer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a Consumer
  const Consumer = new consumer({
    consumerID: req.body.consumerID,
    fname_of_consumer: req.body.fname_of_consumer,
    lname_of_consumer: req.body.lname_of_consumer,
    email: req.body.email,
    phone_number: req.body.phone_number,
    location: req.body.location,
    consumer_profile: req.body.consumer_profile,
    password: stringEncryption(req.body.password),
    role: req.body.role,
    active_account: req.body.active_account,
    strip_customer_id: req.body.strip_customer_id
  });

  // Save consumer in the database
  consumer.create(Consumer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the consumer.",
      });
    else res.status(200).send(data);
  });
};
// Retrieve all consumer from the database (with condition).
exports.findAll = (req, res) => {
  consumer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving consumer.",
      });
    else res.status(200).send(data);
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
    } else res.status(200).send(data);
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
  // add select consumer
  consumer.findById(req.params.id, (err, data) => {
    if (err) throw new Error(err);
    if (data) {
      consumer.updateById(
        req.params.id,
        { ...data, ...req.body },
        (err, data) => {
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
          } else res.status(200).send(data);
        }
      );
    }
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
    } else
      res.status(200).send({ message: `consumer was deleted successfully!` });
  });
};
// Delete all consumer from the database.
exports.deleteAll = (req, res) => {};
