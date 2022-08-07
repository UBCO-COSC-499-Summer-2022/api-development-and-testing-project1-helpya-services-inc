//make stripe payment_menthod model
const stripeAPI = require("stripe")(
  "sk_test_51LN9iJJ1ttqNM1k30e0LTKwvIU6ZPdeCyPewNhuYCpipuSGjvhyKwBJZDM4v24b1LANdAF17amgq6H9fJHIZIG8O00oR8i1Ari"
);
//Constructor
const payment_method = function (payment_method) {
  this.id = payment_method.id;
  this.billing_details = {
    address: payment_method.address,
    email: payment_method.email,
    name: payment_method.name,
    phone: payment_method.phone,
  };
  this.customer = payment_method.customer;
  this.type = payment_method.type; //go to link for type values https://stripe.com/docs/api/payment_methods/object#payment_method_object-type
};
//create payment_method
payment_method.create = async (newpayment_method, result) => {
  try {
    const payment_method = await stripeAPI.paymentMethods.create({
      id: newpayment_method.id,
      billing_details: {
        address: newpayment_method.address,
        email: newpayment_method.email,
        name: newpayment_method.name,
        phone: newpayment_method.phone,
      },
      customer: newpayment_method.customer,
      type: newpayment_method.type,
    });
    console.log(payment_method);
    result(null, payment_method);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//list all payment_methods
payment_method.listAll = async (result) => {
  try {
    const payment_methods = await stripeAPI.paymentMethods.list();
    console.log(payment_methods);
    result(null, payment_methods);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//find payment_method by id
payment_method.findById = async (id, result) => {
  try {
    const payment_method = await stripeAPI.paymentMethods.retrieve(id);
    console.log(payment_method);
    result(null, payment_method);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//update payment_method by id
payment_method.updateById = async (id, payment_method, result) => {
  try {
    const payment_method = await stripeAPI.paymentMethods.update(id, {
      id: newpayment_method.id,
      billing_details: {
        address: newpayment_method.address,
        email: newpayment_method.email,
        name: newpayment_method.name,
        phone: newpayment_method.phone,
      },
      customer: newpayment_method.customer,
      type: newpayment_method.type,
    });
    console.log(payment_method);
    result(null, payment_method);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//delete payment_method by id
payment_method.remove = async (id, result) => {
  try {
    const payment_method = await stripeAPI.paymentMethods.del(id);
    console.log(payment_method);
    result(null, payment_method);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

module.exports = payment_method;
