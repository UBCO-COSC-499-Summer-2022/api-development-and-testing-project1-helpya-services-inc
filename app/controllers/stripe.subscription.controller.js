const sub = require("../models/stripe.subscription.model.js");

//Sign up customer for subscription
exports.signSub = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a stripe
  const Sub = new sub({
    customer: req.body.customer,
    price: req.body.price,
  });

  // Save stripe in the database
  stripe.signSub(Stripe, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the stripe.",
      });
    else res.send(data);
  });
}

//Apply coupon to subscription
exports.ApplyCoupon = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a stripe
  const Sub = new sub({
    customer: req.body.customer,
    price: req.body.price,
  });

  // Save stripe in the database
  stripe.ApplyCoupon(Stripe, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the stripe.",
      });
    else res.send(data);
  });
}

//Retrieve all subscriptions for customer
exports.getSubByCustomer = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a stripe
  const Sub = new sub({
    customer: req.body.customer,
    price: req.body.price,
  });

  // Save stripe in the database
  stripe.getSubByCustomer(Stripe, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the stripe.",
      });
    else res.send(data);
  });
} 

//unsubscribe customer from subscription
exports.deleteSub = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a stripe
  const Sub = new sub({
    customer: req.body.customer,
    price: req.body.price,
  });

  // Save stripe in the database
  stripe.deleteSub(Stripe, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the stripe.",
      });
    else res.send(data);
  });
}