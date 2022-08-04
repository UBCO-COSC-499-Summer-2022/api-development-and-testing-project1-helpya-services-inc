const sql = require("./db.js");
// constructor
const recentSearches = function (recentSearches) {
  this.businessID = recentSearches.businessID;
  this.consumerID = recentSearches.consumerID;
};
recentSearches.create = (newrecentSearches, result) => {
  sql.query("INSERT INTO recentSearches SET ?", newrecentSearches, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created recentSearches: ", { id: res.insertId, ...newrecentSearches });
    result(null, { id: res.insertId, ...newrecentSearches });
  });
};
recentSearches.findById = (id, result) => {
  sql.query(`SELECT * FROM recentSearches WHERE consumerID = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found recentSearches: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found recentSearches with the id
    result({ kind: "not_found" }, null);
  });
};
recentSearches.getAll = (title, result) => {
  let query = "SELECT * FROM recentSearches";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("recentSearches: ", res);
    result(null, res);
  });
};
/*
recentSearches.getAllPublished = (result) => {
  sql.query("SELECT * FROM recentSearches WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("recentSearches: ", res);
    result(null, res);
  });
};
*/
recentSearches.updateById = (id, recentSearches, result) => {
  sql.query(
    "UPDATE recentSearches SET store_name = ?, store_profile = ? WHERE id = ?",
    [recentSearches.fname_of_recentSearches, recentSearches.lname_of_recentSearches, recentSearches.email, recentSearches.phone_number, recentSearches.location, recentSearches.recentSearches_profile, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found recentSearches with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated recentSearches: ", { id: id, ...recentSearches });
      result(null, { id: id, ...recentSearches });
    }
  );
};

recentSearches.remove = (id, result) => {
  sql.query("DELETE FROM recentSearches WHERE consumerID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found recentSearches with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted recentSearches with id: ", id);
    result(null, res);
  });
};
recentSearches.removeAll = (result) => {
  sql.query("DELETE FROM recentSearches", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} recentSearches`);
    result(null, res);
  });
};
module.exports = recentSearches;
