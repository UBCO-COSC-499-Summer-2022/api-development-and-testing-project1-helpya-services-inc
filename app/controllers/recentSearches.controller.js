const recentSearches = require("../models/recentSearches.model.js");
// Create and Save a new recent search
exports.create = (req, res) => {
      // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a recent search
  const RecentSearches = new recentSearches({
    consumerID: req.query.consumerID,
    businessID: req.query.businessID,
    store_name: req.query.store_name,
    store_profile: req.query.store_profile,
  });

  // Save recent searches in the database
  recentSearches.create(RecentSearches, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the recent searches.",
      });
    else res.send(data);
  });
};
// Retrieve all recent search from the database (with condition).
exports.findAll = (req, res) => {
    recentSearches.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message: err.message || "Some error occurred while retrieving recent searches.",
          });
        else res.send(data);
      });
};
// Find a single recent search with a id
exports.findOne = (req, res) => {
    recentSearches.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found recent searches with id ${req.params.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Error retrieving recent searches with id " + req.params.id,
            });
          }
        } else res.send(data);
      });
};
// find all published recent search
exports.findAllPublished = (req, res) => {};
// Update a recent search identified by the id in the request
exports.update = (req, res) => {
      // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  recentSearches.updateById(req.params.id, new recentSearches(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found recent searches with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating recent searches with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
// Delete a recent search with the specified id in the request
exports.delete = (req, res) => {
    recentSearches.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found recent searches with id ${req.params.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Could not delete recent searches with id " + req.params.id,
            });
          }
        } else res.send({ message: `recent searches was deleted successfully!` });
      });
};
// Delete all recent search from the database.
exports.deleteAll = (req, res) => {};
