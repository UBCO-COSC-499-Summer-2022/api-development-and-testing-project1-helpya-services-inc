const sql = require("./db.js");
// constructor
const credit_card_info = function (credit_card_info) {

    this.consumerID = credit_card_info.consumerID;
    this.name_on_card = credit_card_info.name_on_card;
    this.credit_card_number = credit_card_info.credit_card_number;
    this.exp_date = credit_card_info.exp_date;
    this.csc_num = credit_card_info.csc_num;
};
credit_card_info.create = (newcredit_card_info, result) => {
  sql.query("INSERT INTO credit_card_info SET ?", newcredit_card_info, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created consumer history: ", { id: res.insertId, ...newcredit_card_info });
    result(null, { id: res.insertId, ...newcredit_card_info });
  });
};
credit_card_info.findById = (id, result) => {
  sql.query(`SELECT * FROM credit_card_info WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found consumer history: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found credit_card_info with the id
    result({ kind: "not_found" }, null);
  });
};
credit_card_info.getAll = (title, result) => {
  let query = "SELECT * FROM credit_card_info";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("credit_card_info: ", res);
    result(null, res);
  });
};
/*
credit_card_info.getAllPublished = (result) => {
  sql.query("SELECT * FROM credit_card_info WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("credit_card_info: ", res);
    result(null, res);
  });
};
*/
credit_card_info.updateById = (id, credit_card_info, result) => {
  sql.query(
    "UPDATE credit_card_info SET name_on_card = ?, credit_card_number = ?, exp_date = ?, csc_num = ? WHERE id = ?",
    [credit_card_info.fname_of_credit_card_info, credit_card_info.lname_of_credit_card_info, credit_card_info.email, credit_card_info.phone_number, credit_card_info.location, credit_card_info.credit_card_info_profile, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found credit_card_info with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated credit_card_info: ", { id: id, ...credit_card_info });
      result(null, { id: id, ...credit_card_info });
    }
  );
};

credit_card_info.remove = (id, result) => {
  sql.query("DELETE FROM credit_card_info WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found consumer history with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted consumer history with id: ", id);
    result(null, res);
  });
};
credit_card_info.removeAll = (result) => {
  sql.query("DELETE FROM credit_card_info", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} credit_card_info`);
    result(null, res);
  });
};
module.exports = credit_card_info;
