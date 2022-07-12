const chat = require("../models/chat.model.js");
<<<<<<< HEAD
// Create and Save a new chat
exports.create = (req, res) => {};
// Retrieve all chat from the database (with condition).
exports.findAll = (req, res) => {};
// Find a single chat with a id
exports.findOne = (req, res) => {};
// find all published chat
exports.findAllPublished = (req, res) => {};
// Update a chat identified by the id in the request
exports.update = (req, res) => {};
// Delete a chat with the specified id in the request
exports.delete = (req, res) => {};
=======

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
    chatID: req.body.chatID,
    fname_of_owner: req.body.fname_of_owner,
    lname_of_owner: req.body.lname_of_owner,
    consumer_email: req.body.consumer_email,
    consumer_profile: req.body.consumer_profile,
    name_of_chat: req.body.name_of_chat,
    chat_email: req.body.chat_email,
    consumer_profile: req.body.chat_profile,
  });

  // Save chat in the database
  chat.create(Chat, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the chat.",
      });
    else res.send(data);
  });
};

// Retrieve all chat from the database (with condition).
exports.findAll = (req, res) => {
  chat.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving chats.",
      });
    else res.send(data);
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
    } else res.send(data);
  });
};

// find all published chat
exports.findAllPublished = (req, res) => {};

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

>>>>>>> cb1acd7dfbf9a98b3694d42ea09ec374954ba06a
// Delete all chat from the database.
exports.deleteAll = (req, res) => {};
