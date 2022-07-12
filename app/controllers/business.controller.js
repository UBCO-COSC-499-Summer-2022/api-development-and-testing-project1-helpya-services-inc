const business = require("../models/business.model.js");
<<<<<<< HEAD
// Create and Save a new business
exports.create = (req, res) => {};
// Retrieve all business from the database (with condition).
exports.findAll = (req,res) => {
=======

// Create and Save a new business
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  // Create a business
  const Business = new business({
    businessID: req.query.businessID,
    business_name: req.query.business_name,
    owner_fname: req.query.owner_fname,
    owner_lname: req.query.owner_lname,
    business_profile: req.query.business_profile,
    email: req.query.email,
    phone_number: req.query.phone_number,
    rate_per_hour: req.query.rate_per_hour,
    location: req.query.location,
    keywords: req.query.keywords,
    education: req.query.education,
    pictures: req.query.pictures,
    description: req.query.description,
    general_ID: req.query.general_ID,
  });
//localhost:8080/api/business?businessID=1150&business_name=baby sitting support&owner_fname=lance&owner_lname=armstrong&business_profile=insert link&email=blah@blah.com&phone_number=1112223333&rate_per_hour=200&location=moon&keywords=baby/not die&education=degree&pictures=insert link&description=sdsada&general_ID=50
// Save business in the database
http: console.log(req.body);
  business.create(Business, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the business.",
      });
    else res.send(data);
  });
};

// Retrieve all business from the database (with condition).
exports.findAll = (req, res) => {
>>>>>>> cb1acd7dfbf9a98b3694d42ea09ec374954ba06a
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
<<<<<<< HEAD
=======

>>>>>>> cb1acd7dfbf9a98b3694d42ea09ec374954ba06a
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
<<<<<<< HEAD
          message: `Not found business with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete business with id " + req.params.id
        });
      }
    } else res.send({ message: `business was deleted successfully!` });
  });};
=======
          message: `Not found business with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete business with id " + req.params.id,
        });
      }
    } else res.send({ message: `business was deleted successfully!` });
  });
};
>>>>>>> cb1acd7dfbf9a98b3694d42ea09ec374954ba06a
// Delete all business from the database.
exports.deleteAll = (req, res) => {};
