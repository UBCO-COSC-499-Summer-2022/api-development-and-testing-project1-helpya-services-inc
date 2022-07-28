module.exports = (app) => {
    const ad = require("../controllers/ad.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", ad.create);
    // Retrieve all ad
    router.get("/", ad.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", ad.findOne);
    // Update a Tutorial with id
    router.put("/:id", ad.update);
    // Delete a Tutorial with id
    router.delete("/:id", ad.delete);
    // Delete all ad
    router.delete("/", ad.deleteAll);
    
    app.use("/api/ad", router);
  };
  