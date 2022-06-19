module.exports = (app) => {
  const business = require("../controllers/business.controller.js");
  var router = require("express").Router();
  // Create a new business
  router.post("/", business.create);
  // Retrieve all business
  router.get("/", business.findAll);
  // Retrieve all published business
  //router.get("/published", business.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", business.findOne);
  // Update a business with id
  router.put("/:id", business.update);
  // Delete a business with id
  router.delete("/:id", business.delete);
  // Delete all business
  router.delete("/", business.deleteAll);
  app.use("/api/business", router);
};
