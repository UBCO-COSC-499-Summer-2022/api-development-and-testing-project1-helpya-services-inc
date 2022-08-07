module.exports = (app) => {
  const coupon = require("../controllers/stripe.coupon.controller.js");
  var router = require("express").Router();

  // make coupon
  router.post("/", coupon.create);
  // get coupon by id
  router.post("/:id", coupon.get);
  // get coupon by date
  router.get("/:customer", coupon.getByDate);
  // Update coupon with id
  router.put("/:id", coupon.update);
  // Delete coupon id
  router.delete("/:id", coupon.delete);

  app.use("/api/stripe/coupon", router);
};
