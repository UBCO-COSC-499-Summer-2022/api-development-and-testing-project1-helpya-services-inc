const stripeAPI = require("stripe")(
  "sk_test_51LN9iJJ1ttqNM1k30e0LTKwvIU6ZPdeCyPewNhuYCpipuSGjvhyKwBJZDM4v24b1LANdAF17amgq6H9fJHIZIG8O00oR8i1Ari"
);

const coupon = function (coupon) {
  this.name = coupon.name;
  this.percentage_off = coupon.percentage_off;
  this.duration = coupon.duration; //Specifies how long the discount will be in effect if used on a subscription. Can be forever, once, or repeating. Defaults to once
  this.duration_in_months = coupon.duration_in_months;
};

//create coupon
coupon.create = async (newCoupon, result) => {
  try {
    const coupon = await stripeAPI.coupons.create({
      percent_off: newCoupon.percentage_off,
      duration: newCoupon.duration,
      duration_in_months: newCoupon.duration_in_months,
      max_redemptions: newCoupon.max_redemptions,
      redeem_by: newCoupon.redeem_by,
      amount_off: newCoupon.amount_off,
    });
    console.log(coupon);
    result(null, newCoupon);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//get coupon
coupon.get = async (newCoupon, result) => {
  try {
    const coupon = await stripeAPI.coupons.retrieve(newCoupon.id);
    console.log(coupon);
    result(null, newCoupon);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//delete coupon by id
coupon.delete = async (newCoupon, result) => {
  try {
    const coupon = await stripeAPI.coupons.del(newCoupon.id);
    console.log(coupon);
    result(null, newCoupon);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//update coupon
coupon.update = async (newCoupon, result) => {
    try {
        const coupon = await stripeAPI.coupons.update(newCoupon.id, {
            percent_off: newCoupon.percentage_off,
            duration: newCoupon.duration,
            duration_in_months: newCoupon.duration_in_months,
        });
        console.log(coupon);
        result(null, newCoupon);
    } catch (err) {
        console.log("error: ", err);
        result(err, null);
        return;
    }
};

//get coupon by start and/or end date
coupon.getByDate = async (newCoupon, result) => {
    try {
        const coupon = await stripeAPI.coupons.list({
            created: {
                gte: newCoupon.start,
                lte: newCoupon.end,
            },
        });
        console.log(coupon);
        result(null, newCoupon);
    } catch (err) {
        console.log("error: ", err);
        result(err, null);
        return;
    }
};


module.exports = coupon;