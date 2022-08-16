const education_history = require("../models/education_history.model.js");

// Create and Save a new education_history
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a education_history
  const EducationHistory = new education_history({
    businessID: req.body.businessID,
    education_level: req.body.education_level,
    highest_education_completed: req.body.highest_education_completed,
  });

  // Save education history in the database
  education_history.create(EducationHistory, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the education history.",
      });
    else res.status(200).send(data);
  });
};

// Retrieve all education history from the database (with condition).
exports.findAll = (req, res) => {
  education_history.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving education historys.",
      });
    else res.status(200).send(data);
  });
};

// Find a single education history with a id
exports.findOne = (req, res) => {
  education_history.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found education history with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving education history with id " + req.params.id,
        });
      }
    } else res.status(200).send(data);
  });
};

// find all published education_history
exports.findAllPublished = (req, res) => {};

// Update a education_history identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  education_history.updateById(
    req.params.id,
    new education_history(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found education history with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating education_history with id " + req.params.id,
          });
        }
      } else res.status(200).send(data);
    }
  );
};

// Delete a education_history with the specified id in the request
exports.delete = (req, res) => {
  education_history.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found education history with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Could not delete education history with id " + req.params.id,
        });
      }
    } else res.send({ message: `education history was deleted successfully!` });
  });
};

// Delete all education_history from the database.
exports.deleteAll = (req, res) => {};
