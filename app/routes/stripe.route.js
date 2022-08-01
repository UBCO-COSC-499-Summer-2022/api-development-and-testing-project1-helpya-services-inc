module.exports = (app) => {
    const stipe = require("../controllers/stripe.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.createSub("/", stipe.createSub);
}