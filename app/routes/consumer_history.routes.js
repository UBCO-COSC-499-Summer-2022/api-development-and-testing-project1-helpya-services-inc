module.exports = (app) => {
    const consumer_history = require("../controllers/consumer_history.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", consumer_history.create);
    // Retrieve all consumer_history
    router.get("/", consumer_history.findAll);
    // Retrieve all published consumer_history
    //router.get("/published", consumer_history.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", consumer_history.findOne);
    // Update a Tutorial with id
    router.put("/:id", consumer_history.update);
    // Delete a Tutorial with id
    router.delete("/:id", consumer_history.delete);
    // Delete all consumer_history
    router.delete("/", consumer_history.deleteAll);
    app.use("/api/consumer_history", router);
  };
  