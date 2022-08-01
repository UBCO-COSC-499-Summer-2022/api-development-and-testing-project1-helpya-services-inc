const stripe= require("stripe");

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");


stripe.createSub = (newSub, result) => {
  try{
    const subscription = await stripe.subscriptions.create({
    customer: newSub.customer,
    items: [
        {price: newSub.price},
    ],
    });
    console.log(subscription);
    result(null, newSub);
  }catch{
    console.log("error: ", err);
    result(err, null);
    return;
  }
};
