module.exports = (app) => {
    const education_history = require("../controllers/education_history.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", education_history.create);
    // Retrieve all education history
    router.get("/", education_history.findAll);
    // Retrieve all published education history
    //router.get("/published", education history.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", education_history.findOne);
    // Update a Tutorial with id
   // router.put("/:id", education history.update);
    // Delete a Tutorial with id
    router.delete("/:id", education_history.delete);
    // Delete all education history
    router.delete("/", education_history.deleteAll);
    app.use("/api/education_history", router);
  };
  