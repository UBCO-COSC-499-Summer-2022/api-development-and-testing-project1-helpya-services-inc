const coupon = require("../models/stripe.coupon.model.js");

// Create and Save a new Coupon
exports.create = (req, res) => {
  // Validate request
  if (!req.query) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.query.name);
  // make a Coupon
  const Coupon = new coupon({
    name: req.query.name,
    percentage_off: req.query.percentage_off,
    duration: req.query.duration,
    duration_in_months: req.query.duration_in_months,
    max_redemptions: req.query.max_redemptions,
    redeem_by: req.query.redeem_by,
    amount_off: req.query.amount_off,
  });

  // make coupon via stripe sevice
  coupon.create(Coupon, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Coupon.",
      });
    else res.send(data);
  });
};

// get coupon by id
exports.get = (req, res) => {
    coupon.get(req.params.id, (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Coupon with id ${req.params.id}.`,
            });
        } else {
            res.status(500).send({
            message: "Error retrieving Coupon with id " + req.params.id,
            });
        }
        } else res.send(data);
    });
};

// delete coupon by id
exports.delete = (req, res) => {
    coupon.delete(req.params.id, (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Coupon with id ${req.params.id}.`,
            });
        } else {
            res.status(500).send({
            message: "Could not delete Coupon with id " + req.params.id,
            });
        }
        } else res.send({ message: `Coupon was deleted successfully!` });
    });
};

// update coupon by id
exports.update = (req, res) => {
    // Validate Request
    if (!req.query) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    coupon.update(req.params.id, new coupon(req.query), (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Coupon with id ${req.params.id}.`,
            });
        } else {
            res.status(500).send({
            message: "Error updating Coupon with id " + req.params.id,
            });
        }
        } else res.send(data);
    });
};

//get coupon by date
exports.getByDate = (req, res) => {
    coupon.getByDate(req.params.start_date, req.params.end_date, (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Coupon with date ${req.params.start_date} and ${req.params.end_date}.`,
            });
        } else {
            res.status(500).send({
            message: "Error retrieving Coupon with date " + req.params.start_date + " and " + req.params.end_date,
            });
        }
        } else res.send(data);
    });
};

