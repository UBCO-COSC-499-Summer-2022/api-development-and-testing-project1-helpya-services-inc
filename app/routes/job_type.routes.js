module.exports = (app) => {
    const job_type = require("../controllers/job_type.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", job_type.create);
    // Retrieve all job type
    router.get("/", job_type.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", job_type.findOne);
    // Update a Tutorial with id
   // router.put("/:id", job type.update);
    // Delete a Tutorial with id
    router.delete("/:id", job_type.delete);
    // Delete all job type
    router.delete("/", job_type.deleteAll);
    app.use("/api/job_type", router);
  };
  