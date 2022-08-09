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
    adID: req.body.adID,
    businessID: req.body.businessID,
    ad_title: req.body.ad_title,
    ad_body: req.body.ad_body,
    location: req.body.location,
    rate_per_hour: req.body.rate_per_hour,
  });

  // Save ad in the database
  ad.create(AD, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the ad.",
      });
    else res.status(200).send(data);
  });
};

// Retrieve all ad from the database (with condition).
exports.findAll = (req, res) => {
  ad.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving ad.",
      });
    else res.status(200).send(data);
  });
};
exports.findAllBusinessAds = (req, res) => {
  ad.getAllAds((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Error occured retrieving business's ads",
      });
    else res.status(200).send(data);
  });
};
// Find a single ad with a id
exports.findOne = (req, res) => {
  ad.findById(req.params.id, (err, data) => {
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
    } else res.status(200).send(data);
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
  ad.updateById(req.params.id, req.body, (err, data) => {
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
  });
};
// Delete a ad with the specified id in the request
exports.delete = (req, res) => {
  ad.remove(req.params.id, (err, data) => {
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
    } else res.status(200).send(data);
  });
};
// Delete all ad from the business.
exports.deleteAll = (req, res) => {
  ad.remove(req.params.id, (err, data) => {
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
    } else res.status(200).send(data);
  });
};
