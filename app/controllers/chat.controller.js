const chat = require("../models/chat.model.js");

// Create and Save a new chat
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a chat
  const Chat = new chat({
    chatID: req.body.chatID,
    consumerID: req.body.consumerID,
    businessID: req.body.businessID,
    time_stamp: req.body.time_stamp,
    chat_message: req.body.chat_message,
  });

  // Save chat in the database
  chat.create(Chat, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the chat.",
      });
    else res.status(200).send(data);
  });
};

// Retrieve all chat from the database (with condition).
exports.findAll = (req, res) => {
  chat.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving chats.",
      });
    else res.status(200).send(data);
  });
};

// Find a single chat with a id
exports.findOne = (req, res) => {
  chat.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found chat with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving chat with id " + req.params.id,
        });
      }
    } else res.status(200).send(data);
  });
};

// find all published chat
exports.findAllPublished = (req, res) => {};
/*
// Update a chat identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  chat.updateById(req.params.id, new chat(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found chat with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating chat with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
*/
// Delete a chat with the specified id in the request
exports.delete = (req, res) => {
  chat.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found chat with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete chat with id " + req.params.id,
        });
      }
    } else res.send({ message: `chat was deleted successfully!` });
  });
};

// Delete all chat from the database.
exports.deleteAll = (req, res) => {};
