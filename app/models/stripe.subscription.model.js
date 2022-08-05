const stripeAPI = require("stripe")(
  "sk_test_51LN9iJJ1ttqNM1k30e0LTKwvIU6ZPdeCyPewNhuYCpipuSGjvhyKwBJZDM4v24b1LANdAF17amgq6H9fJHIZIG8O00oR8i1Ari"
);
//Constructor
const sub = function (sub){
  this.id = sub.id;
  this.cancel_at_period_end = sub.cancel_at_period_end;
  this.currency = sub.currency;
  this.current_period_end = sub.current_period_end;
  this.current_period_start = sub.current_period_start;
  this.customer = sub.customer;
  this.default_payment_method = sub.default_payment_method;
  this.items = {
    object: sub.object,
    data: sub.data,
    has_more: sub.has_more,
    url: sub.url,
  }
  this.latest_invoice = sub.latest_invoice;
  this.pending_setup_intent = sub.pending_setup_intent;
  this.pending_update = sub.pending_update;
  this.status = sub.status; //allpossible values: trialing, active, past_due, unpaid, canceled, or unpaid (more information at https://stripe.com/docs/api/subscriptions/object#subscription_object-status)
} 

//signup customer for subscription
sub.signSub = async (newSub, result) => {
  try {
    const subscription = await stripeAPI.subscriptions.create({
      customer: newSub.customer,
      items: [{ price: newSub.subID }],
    });
    console.log(subscription);
    result(null, subscription);
  } catch(err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//signup customer for subscription
sub.applyCoupon = async (couponID, result) => {
  try {
    const subscription = await stripe.subscriptions.update(
      sub.subID,
      {coupon: couponID}
    );
    console.log(subscription);
    result(null, subscription);
  } catch(err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//get all customer subscriptions
sub.getSubByCustomer = async (newSub, result) => {
  try {
    const subscriptions = await stripeAPI.subscriptions.list({
      customer: newSub.customer,
    });
    console.log(subscriptions);
    result(null, subscriptions);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//unsubscribe customer from subscription
sub.deleteSub = async (newSub, result) => {
  try {
    const deleted = await stripe.subscriptions.del(
      newSub.subscription
    );
    console.log(deleted);
    result(null, deleted);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};


module.exports = sub;
