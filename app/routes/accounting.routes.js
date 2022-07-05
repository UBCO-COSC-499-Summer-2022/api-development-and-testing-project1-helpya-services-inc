module.exports = (app) => {
    const accounting = require("../controllers/accounting.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", accounting.create);
    // Retrieve all accounting
    router.get("/", accounting.findAll);
    // Retrieve all published accounting
    //router.get("/published", accounting.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", accounting.findOne);
    // Update a Tutorial with id
    router.put("/:id", accounting.update);+
    // Delete a Tutorial with id
    router.delete("/:id", accounting.delete);
    // Delete all accounting
    router.delete("/", accounting.deleteAll);
    app.use("/api/accounting", router);
  };
  