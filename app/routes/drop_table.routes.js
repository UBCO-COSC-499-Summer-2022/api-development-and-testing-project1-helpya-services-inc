module.exports = (app) => {
  const dropTable = require("../controllers/drop_table.controller.js");
  var router = require("express").Router();
  router.get("/", dropTable.drop);

  app.use("/api/drop", router);
};
