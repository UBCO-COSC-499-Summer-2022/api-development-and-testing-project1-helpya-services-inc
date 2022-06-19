module.exports = (app) => {
    const recentSearches = require("../controllers/recentSearches.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", recentSearches.create);
    // Retrieve all recentSearches
    router.get("/", recentSearches.findAll);
    // Retrieve all published recentSearches
   // router.get("/published", recentSearches.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", recentSearches.findOne);
    // Update a Tutorial with id
    router.put("/:id", recentSearches.update);
    // Delete a Tutorial with id
    router.delete("/:id", recentSearches.delete);
    // Delete all recentSearches
    router.delete("/", recentSearches.deleteAll);
    app.use("/api/recentSearches", router);
  };
  