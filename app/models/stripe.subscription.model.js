const stripeAPI = require("stripe")(
  "sk_test_51LN9iJJ1ttqNM1k30e0LTKwvIU6ZPdeCyPewNhuYCpipuSGjvhyKwBJZDM4v24b1LANdAF17amgq6H9fJHIZIG8O00oR8i1Ari"
);
//Constructor
const sub = function (sub){
  this.customer = sub.customer;
  this.subID = sub.subID;
  this.couponID = sub.couponID;
} 

//signup customer for subscription
sub.signSub = async (newSub, result) => {
  try {
    const subscription = await stripeAPI.subscriptions.create({
      customer: newSub.customer,
      items: [{ price: newSub.subID }],
    });
    console.log(subscription);
    result(null, newSub);
  } catch(err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//signup customer for subscription
sub.applyCoupon = async (newSub, result) => {
  try {
    const subscription = await stripe.subscriptions.update(
      sub.subID,
      {coupon: newSub.couponID}
    );
    console.log(subscription);
    result(null, newSub);
  } catch(err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//get all customer subscriptions
sub.getSubByCustomer = async (newSub, result) => {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: newSub.customer,
    });
    console.log(subscriptions);
    result(null, newSub);
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
    result(null, newSub);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};


module.exports = sub;
