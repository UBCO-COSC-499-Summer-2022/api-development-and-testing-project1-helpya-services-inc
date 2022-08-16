const job_type = require("../models/job_type.model.js");

// Create and Save a new job_type
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a job type
  const JobType = new job_type({
    businessID: req.query.businessID,
    job_title: req.query.job_title,
    job_category: req.query.job_category,
  });

  // Save job_type in the database
  job_type.create(JobType, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the job type.",
      });
    else res.status(200).send(data);
  });
};

// Retrieve all job type from the database (with condition).
exports.findAll = (req, res) => {
  job_type.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving job types.",
      });
    else res.status(200).send(data);
  });
};

// Find a single job type with a id
exports.findOne = (req, res) => {
  job_type.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found job type with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving job type with id " + req.params.id,
        });
      }
    } else res.status(200).send(data);
  });
};

// find all published job type
exports.findAllPublished = (req, res) => {};

// Update a job type identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  job_type.updateById(req.params.id, new job_type(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(404).send({
          message: `Not found job type with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating job type with id " + req.params.id,
        });
      }
    } else res.status(200).send(data);
  });
};

// Delete a job type with the specified id in the request
exports.delete = (req, res) => {
  job_type.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(404).send({
          message: `Not found job type with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete job type with id " + req.params.id,
        });
      }
    } else res.send({ message: `job type was deleted successfully!` });
  });
};

// Delete all job type from the database.
exports.deleteAll = (req, res) => {};
