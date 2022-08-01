exports.createSub = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a payment
  const Sub = new Sub({
    customer: req.query.customerID,
    price: req.query.price,
  });

  // Save payment in the database
  stripe.createSub(Sub, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the payment.",
      });
    else res.send(data);
  });
};
