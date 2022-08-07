//make stripe customer controller
const customer = require("../models/stripe.customer.model.js");

//make stripe customer
exports.create = (req, res) => {
  // Validate request
  if (!req.query) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a Customer
  const Customer = new customer({
    name: req.query.name,
    email: req.query.email,
    phone: req.query.phone,
    address: req.query.address,
    city: req.query.city,
    state: req.query.state,
    zip: req.query.zip,
    country: req.query.country,
  });

  // Save Customer in the database
  customer.create(Customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.status(200).send(data);
  });
};

exports.listAll = (req, res) => {
  customer.listAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.status(200).send(data);
  });
};

exports.findById = (req, res) => {
  customer.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.id,
        });
      }
    } else res.status(200).send(data);
  });
};

exports.updateById = (req, res) => {
  
  // Validate Request
  if (!req.query) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  customer.updateById(req.params.id, new customer(req.query), (err, data) => {
   
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Customer with id " + req.params.id,
        });
      }
    } else res.status(200).send(data);
  });
};

exports.deleteById = (req, res) => {
  customer.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.id,
        });
      }
    } else res.status(200).send({ message: `Customer was deleted successfully!` });
  });
};
