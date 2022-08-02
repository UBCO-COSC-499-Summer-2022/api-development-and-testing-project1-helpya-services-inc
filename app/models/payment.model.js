const sql = require("./db.js");
// constructor
const payment = function (payment) {
    this.transactionID = payment.transactionID;
    this.consumerID = payment.consumerID;
    this.businessID = payment.businessID;
    this.payment_logs = payment.payment_logs;
    this.payment_method = payment.payment_method;
};
payment.create = (newpayment, result) => {
  sql.query("INSERT INTO payment SET ?", newpayment, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created payment: ", { id: res.insertId, ...newpayment });
    result(null, { id: res.insertId, ...newpayment });
  });
};
payment.findById = (id, result) => {
  sql.query(`SELECT * FROM payment WHERE paymentID = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found payment: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found payment with the id
    result({ kind: "not_found" }, null);
  });
};
payment.getAll = (title, result) => {
  let query = "SELECT * FROM payment";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("payment: ", res);
    result(null, res);
  });
};
/*
payment.getAllPublished = (result) => {
  sql.query("SELECT * FROM payment WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("payment: ", res);
    result(null, res);
  });
};
*/
payment.updateById = (id, payment, result) => {
  sql.query(
    "UPDATE payment SET payment_logs = ?, payment_method = ? WHERE id = ?",
    [payment.fname_of_payment, payment.lname_of_payment, payment.email, payment.phone_number, payment.location, payment.payment_profile, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found payment with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated payment: ", { id: id, ...payment });
      result(null, { id: id, ...payment });
    }
  );
};

payment.remove = (id, result) => {
  sql.query("DELETE FROM payment WHERE paymentID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found payment with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted payment with id: ", id);
    result(null, res);
  });
};
payment.removeAll = (result) => {
  sql.query("DELETE FROM payment", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} payment`);
    result(null, res);
  });
};
module.exports = payment;
