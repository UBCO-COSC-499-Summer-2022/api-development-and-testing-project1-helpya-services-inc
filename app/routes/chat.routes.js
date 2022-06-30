module.exports = (app) => {
    const chat = require("../controllers/chat.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", chat.create);
    // Retrieve all chat
    router.get("/", chat.findAll);
    // Retrieve all published chat
    //router.get("/published", chat.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", chat.findOne);
    // Update a Tutorial with id
    router.put("/:id", chat.update);
    // Delete a Tutorial with id
    router.delete("/:id", chat.delete);
    // Delete all chat
    router.delete("/", chat.deleteAll);
    app.use("/api/chat", router);
  };
  