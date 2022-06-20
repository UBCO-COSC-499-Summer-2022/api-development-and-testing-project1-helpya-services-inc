const business = require("../models/business.model.js");
// Create and Save a new business
exports.create = (req, res) => {};
// Retrieve all business from the database (with condition).
exports.findAll = (req,res) => {
  const business_name = req.query.business_name;
  business.getAll(business_name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving businesss.",
      });
    else res.send(data);
  });
};
// Find a single business with a id
exports.findOne = (req, res) => {
  business.findById(req.params.id, (err, data) => {
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
// find all published business
exports.findAllPublished = (req, res) => {};
// Update a business identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  business.updateById(req.params.id, new business(req.body), (err, data) => {
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
// Delete a business with the specified id in the request
exports.delete = (req, res) => {
  business.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found business with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete business with id " + req.params.id
        });
      }
    } else res.send({ message: `business was deleted successfully!` });
  });};
// Delete all business from the database.
exports.deleteAll = (req, res) => {};
