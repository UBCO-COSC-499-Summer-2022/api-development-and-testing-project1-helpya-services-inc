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
    console.log("created accounting: ", { id: res.insertId, ...newaccounting });
    result(null, { id: res.insertId, ...newaccounting });
  });
};
accounting.findById = (id, result) => {
  sql.query(`SELECT * FROM accounting WHERE businessID = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found accounting: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found accounting with the id
    result({ kind: "not_found" }, null);
  });
};
accounting.getAll = (title, result) => {
  let query = "SELECT * FROM accounting";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("accounting: ", res);
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
    "UPDATE accounting SET bank_information = ?, rate_per_hour = ? WHERE id = ?",
    [accounting.fname_of_accounting, accounting.lname_of_accounting, accounting.email, accounting.phone_number, accounting.location, accounting.accounting_profile, id],
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
      console.log("updated accounting: ", { id: id, ...accounting });
      result(null, { id: id, ...accounting });
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
    console.log("deleted accounting with id: ", id);
    result(null, res);
  });
};
accounting.removeAll = (result) => {
  sql.query("DELETE FROM accounting", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} accounting`);
    result(null, res);
  });
};
module.exports = accounting;
