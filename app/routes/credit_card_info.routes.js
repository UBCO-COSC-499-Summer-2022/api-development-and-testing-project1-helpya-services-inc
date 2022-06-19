module.exports = (app) => {
    const credit_card_info = require("../controllers/credit_card_info.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", credit_card_info.create);
    // Retrieve all credit_card_info
    router.get("/", credit_card_info.findAll);
    // Retrieve all published credit_card_info
    //router.get("/published", credit_card_info.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", credit_card_info.findOne);
    // Update a Tutorial with id
    router.put("/:id", credit_card_info.update);
    // Delete a Tutorial with id
    router.delete("/:id", credit_card_info.delete);
    // Delete all credit_card_info
    router.delete("/", credit_card_info.deleteAll);
    app.use("/api/credit_card_info", router);
  };
  