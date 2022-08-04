const stringEncryption = require("../middleware/cryptos.js");
const business = require("../models/business.model.js");

// Create and Save a new business
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a business
  const Business = new business({
    businessID: req.body.businessID,
    business_name: req.body.business_name,
    owner_fname: req.body.owner_fname,
    owner_lname: req.body.owner_lname,
    business_profile: req.body.business_profile,
    email: req.body.email,
    phone_number: req.body.phone_number,
    rate_per_hour: req.body.rate_per_hour,
    location: req.body.location,
    keywords: req.body.keywords,
    education: req.body.education,
    pictures: req.body.pictures,
    description: req.body.description,
  });
  //localhost:8080/api/business?businessID=1150&business_name=baby sitting support&owner_fname=lance&owner_lname=armstrong&business_profile=insert link&email=blah@blah.com&phone_number=1112223333&rate_per_hour=200&location=moon&keywords=baby/not die&education=degree&pictures=insert link&description=sdsada&general_ID=50
  // Save business in the database
  business.create(Business, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the business.",
      });
    else res.status(200).send(data);
  });
};

// Retrieve all business from the database (with condition).
exports.findAll = (req, res) => {
  const business_name = req.query.business_name;
  business.getAll(business_name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving businesss.",
      });
    else res.status(200).send(data);
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
    } else res.status(200).send(data);
  });
};

// find all published business
exports.findAllPublished = (req, res) => {};

// Update a business identified by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // add select business
  business.findById(req.params.id, (err, data) => {
    if (err) throw new Error(err);
    if (data) {
      business.updateById(
        req.params.id,
        { ...data, ...req.body },
        (err, data) => {
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
          } else res.status(200).send(data);
        }
      );
    }
  });
};

// Delete a business with the specified id in the request
exports.delete = (req, res) => {
  business.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found business with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete business with id " + req.params.id,
        });
      }
    } else
      res.status(200).send({ message: `business was deleted successfully!` });
  });
};

// Delete all business from the database.
exports.deleteAll = (req, res) => {};
