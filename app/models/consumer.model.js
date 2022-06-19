const sql = require("./db.js");
// constructor
const consumer = function (consumer) {
  this.consumerID = consumer.consumerID;
  this.fname_of_consumer = consumer.fname_of_consumer;
  this.lname_of_consumer = consumer.lname_of_consumer;
  this.email = consumer.email;
  this.phone_number = consumer.phone_number;
  this.location = consumer.location;
  this.consumer_profile = consumer.consumer_profile;
  this.generalID = consumer.generalID;
};
consumer.create = (newconsumer, result) => {
  sql.query("INSERT INTO consumer SET ?", newconsumer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created consumer: ", { id: res.insertId, ...newconsumer });
    result(null, { id: res.insertId, ...newconsumer });
  });
};
consumer.findById = (id, result) => {
  sql.query(`SELECT * FROM consumer WHERE consumerID = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found consumer: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found consumer with the id
    result({ kind: "not_found" }, null);
  });
};
consumer.getAll = (title, result) => {
  let query = "SELECT * FROM consumer";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("consumer: ", res);
    result(null, res);
  });
};
/*
consumer.getAllPublished = (result) => {
  sql.query("SELECT * FROM consumer WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("consumer: ", res);
    result(null, res);
  });
};
*/
consumer.updateById = (id, consumer, result) => {
  sql.query(
    "UPDATE consumer SET fname_of_consumer = ?, lname_of_consumer = ?, email = ?, phone_number = ?, location = ?, consumer_profile = ? WHERE id = ?",
    [consumer.fname_of_consumer, consumer.lname_of_consumer, consumer.email, consumer.phone_number, consumer.location, consumer.consumer_profile, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found consumer with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated consumer: ", { id: id, ...consumer });
      result(null, { id: id, ...consumer });
    }
  );
};
consumer.remove = (id, result) => {
  sql.query("DELETE FROM consumer WHERE consumerID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found consumer with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted consumer with id: ", id);
    result(null, res);
  });
};
consumer.removeAll = (result) => {
  sql.query("DELETE FROM consumer", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} consumer`);
    result(null, res);
  });
};
module.exports = consumer;
