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
    subID: req.body.subID,
  });

  // Save stripe in the database
  sub.signSub(Sub, (err, data) => {
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
  sub.ApplyCoupon(Stripe, (err, data) => {
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
    price: req.body.subscription,
  });

  // Save stripe in the database
  sub.getSubByCustomer(Sub, (err, data) => {
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
  sub.deleteSub(Stripe, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the stripe.",
      });
    else res.send(data);
  });
}