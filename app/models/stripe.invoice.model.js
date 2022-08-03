const stripe = require("stripe")(
  "sk_test_51LN9iJJ1ttqNM1k30e0LTKwvIU6ZPdeCyPewNhuYCpipuSGjvhyKwBJZDM4v24b1LANdAF17amgq6H9fJHIZIG8O00oR8i1Ari"
);

//CRUD for stripe invoice
// constructor
const stripe_invoice = function (stripe_invoice) {
  this.customer = stripe_invoice.customer;
  this.invoiceID = stripe_invoice.invoiceID;
  this.amount = stripe_invoice.amount;
  this.description = stripe_invoice.description;
  this.currency = stripe_invoice.currency;
  this.payment_intent = stripe_invoice.payment_intent;
  this.status = stripe_invoice.status;
};

//create invoice
stripe_invoice.create = async (newstripe_invoice, result) => {
  try {
    const invoice = await stripe.invoices.create({
      customer: newstripe_invoice.customer,
      amount: newstripe_invoice.amount,
      description: newstripe_invoice.description,
      currency: newstripe_invoice.currency,
      payment_intent: newstripe_invoice.payment_intent,
      status: newstripe_invoice.status,
    });
    console.log(invoice);
    result(null, invoice);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//list all invoices
stripe_invoice.listAll = async (result) => {
  try {
    const invoices = await stripe.invoices.list();
    console.log(invoices);
    result(null, invoices);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//find invoice by id
stripe_invoice.findById = async (id, result) => {
  try {
    const invoice = await stripe.invoices.retrieve(id);
    console.log(invoice);
    result(null, invoice);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//update invoice by id
stripe_invoice.updateById = async (id, stripe_invoice, result) => {
  try {
    const invoice = await stripe.invoices.update(id, {
      customer: stripe_invoice.customer,
      amount: stripe_invoice.amount,
      description: stripe_invoice.description,
      currency: stripe_invoice.currency,
      payment_intent: stripe_invoice.payment_intent,
      status: stripe_invoice.status,
    });
    console.log(invoice);
    result(null, invoice);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//delete invoice by id
stripe_invoice.remove = async (id, result) => {
  try {
    const invoice = await stripe.invoices.del(id);
    console.log(invoice);
    result(null, invoice);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

module.exports = stripe_invoice;
