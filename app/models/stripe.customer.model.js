const stripe = require("stripe")(
  "sk_test_51LN9iJJ1ttqNM1k30e0LTKwvIU6ZPdeCyPewNhuYCpipuSGjvhyKwBJZDM4v24b1LANdAF17amgq6H9fJHIZIG8O00oR8i1Ari"
);
// constructor
const stripe_customer = function (stripe_customer) {
  this.email = stripe_customer.email;
  this.phone_number = stripe_customer.phone_number;
  this.adress = stripe_customer.address;
  this.description = stripe_customer.description;
  this.name = stripe_customer.name;
};

stripe_customer.create = async (newstripe_customer, result) => {
  try {
    const customer = await stripe.customers.create({
      email: newstripe_customer.email,
      phone: newstripe_customer.phone_number,
      address: newstripe_customer.address,
      description: newstripe_customer.description,
      name: newstripe_customer.name,
    });
    console.log(customer);
    result(null, customer);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//list all stripe customers
stripe_customer.listAll = async (result) => {
    try {
        const customers = await stripe.customers.list();
        console.log(customers);
        result(null, customers);
    } catch (err) {
        console.log("error: ", err);
        result(err, null);
        return;
    }
};

stripe_customer.findById = async (id, result) => {
  try {
    const customer = await stripe.customers.retrieve(id);
    console.log(customer);
    result(null, customer);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

stripe_customer.updateById = async (id, stripe_customer, result) => {
  try {
    const customer = await stripe.customers.update(id, {
      email: stripe_customer.email,
      phone: stripe_customer.phone_number,
      address: stripe_customer.address,
      description: stripe_customer.description,
      name: stripe_customer.name,
    });
    console.log(customer);
    result(null, customer);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//delete a stripe customer
stripe_customer.remove = async (id, result) => {
    try {
        const customer = await stripe.customers.del(id);
        console.log(customer);
        result(null, customer);
    } catch (err) {
        console.log("error: ", err);
        result(err, null);
        return;
    }
};

module.exports = stripe_customer;
