module.exports = (app) => {
  const consumer = require("../controllers/consumer.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/", consumer.create);
  // Retrieve all consumer
  router.get("/", consumer.findAll);
  // Retrieve all published consumer
  //router.get("/published", consumer.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", consumer.findOne);
  // Update a Tutorial with id
  router.put("/:id", consumer.update);
  // Delete a Tutorial with id
  router.delete("/:id", consumer.delete);
  // Delete all consumer
  router.delete("/", consumer.deleteAll);
  app.use("/api/consumer", router);
};
