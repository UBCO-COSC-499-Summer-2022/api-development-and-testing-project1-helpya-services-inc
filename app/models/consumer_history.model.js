const sql = require("./db.js");
// constructor
const consumer_history = function (consumer_history) {
    this.consumerID = consumer_history.consumerID;
    this.businessID = consumer_history.businessID;
    this.payment_method = consumer_history.payment_method;
    this.business_name = consumer_history.business_name;
    this.payment_logs = consumer_history.payment_logs;
};
consumer_history.create = (newconsumer_history, result) => {
  sql.query("INSERT INTO consumer_history SET ?", newconsumer_history, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created consumer history: ", { id: res.insertId, ...newconsumer_history });
    result(null, { id: res.insertId, ...newconsumer_history });
  });
};
consumer_history.findById = (id, result) => {
  sql.query(`SELECT * FROM consumer_history WHERE consumerID = ${id}`, (err, res) => {
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
    // not found consumer_history with the id
    result({ kind: "not_found" }, null);
  });
};
consumer_history.getAll = (title, result) => {
  let query = "SELECT * FROM consumer_history";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("consumer_history: ", res);
    result(null, res);
  });
};
/*
consumer_history.getAllPublished = (result) => {
  sql.query("SELECT * FROM consumer_history WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("consumer_history: ", res);
    result(null, res);
  });
};
*/
consumer_history.updateById = (id, consumer_history, result) => {
  sql.query(
    "UPDATE consumer_history SET payment_method = ?, payment_logs = ? WHERE id = ?",
    [consumer_history.fname_of_consumer_history, consumer_history.lname_of_consumer_history, consumer_history.email, consumer_history.phone_number, consumer_history.location, consumer_history.consumer_history_profile, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found consumer_history with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated consumer_history: ", { id: id, ...consumer_history });
      result(null, { id: id, ...consumer_history });
    }
  );
};

consumer_history.remove = (id, result) => {
  sql.query("DELETE FROM consumer_history WHERE consumerID = ?", id, (err, res) => {
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

consumer_history.removeAll = (result) => {
  sql.query("DELETE FROM consumer_history", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} consumer_history`);
    result(null, res);
  });
};
module.exports = consumer_history;
