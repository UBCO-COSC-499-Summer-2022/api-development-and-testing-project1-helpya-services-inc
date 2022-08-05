const ad = require("../models/ad.model.js");
// Create and Save a new ad
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a business
  const AD = new ad({
    adID: req.query.adID,
    businessID: req.query.businessID,
    business_name: req.query.business_name,
    job_title: req.query.job_title,
    job_category: req.query.job_category,
    location: req.query.location,
    rate_per_hour: req.query.rate_per_hour,
  });

  // Save ad in the database
  ad.create(AD, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the ad.",
      });
    else res.send(data);
  });
};

// Retrieve all ad from the database (with condition).
exports.findAll = (req, res) => {
  ad.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving ad.",
      });
    else res.send(data);
  });
};
exports.findAllBusinessAds = (req, res) => {
  ad.getAllAds((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Error occured retrieving business's ads",
      });
    else res.send(data);
  });
};
// Find a single ad with a id
exports.findOne = (req, res) => {
  ad.findById(req.body.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found business ad with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving business ad with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a ad identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  ad.updateById(req.body.id, req.body, (err, data) => {
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
// Delete a ad with the specified id in the request
exports.delete = (req, res) => {
  ad.remove(req.body.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found business with ad id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete business with ad id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
// Delete all ad from the business.
exports.deleteAll = (req, res) => {
  ad.remove(req.body.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ad with businessID ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete ad with businessID " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
