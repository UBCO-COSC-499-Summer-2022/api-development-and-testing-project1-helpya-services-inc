const sql = require("./db.js");
// constructor
const accounting = function (accounting) {
  this.businessID = accounting.businessID;
  this.payment_history = accounting.payment_history;
  this.bank_information = accounting.bank_information;
  this.rate_per_hour = accounting.rate_per_hour;
};
accounting.create = (newaccounting, result) => {
  sql.query("INSERT INTO accounting SET ?", newaccounting, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, "success");
  });
};

accounting.createPayment_History = (paymentHistory, result) => {
  sql.query(
    "INSERT INTO accounting SET payment_history VALUES ?",
    paymentHistory,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...newaccounting });
    }
  );
};
accounting.findById = (id, result) => {
  sql.query(`SELECT * FROM accounting WHERE businessID = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found accounting: ", res);
      result(null, res);
      return;
    }
    // not found accounting with the id
    result({ kind: "not_found" }, null);
  });
};
accounting.getAll = (result) => {
  let query = "SELECT * FROM accounting";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};
/*
accounting.getAllPublished = (result) => {
  sql.query("SELECT * FROM accounting WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("accounting: ", res);
    result(null, res);
  });
};
*/
accounting.updateById = (id, accounting, result) => {
  sql.query(
    "UPDATE accounting SET bank_information = ?, rate_per_hour = ? WHERE businessID = ?",
    [accounting.bank_information, accounting.rate_per_hour, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found accounting with the id
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, "success");
    }
  );
};

accounting.remove = (id, result) => {
  sql.query("DELETE FROM accounting WHERE businessID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found accounting with the id
      result({ kind: "not_found" }, null);
      return;
    }
    result(null, "success");
  });
};
accounting.removeAll = (result) => {
  sql.query("DELETE FROM accounting", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};
module.exports = accounting;
