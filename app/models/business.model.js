const sql = require("./db.js");
// constructor
const business = function (business) {
  this.fname_of_business = business.fname_of_business;
  this.description = business.description;
  this.published = business.published;
};
business.create = (newbusiness, result) => {
  sql.query("INSERT INTO business SET ?", newbusiness, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created business: ", { id: res.insertId, ...newbusiness });
    result(null, { id: res.insertId, ...newbusiness });
  });
};
business.findById = (id, result) => {
  sql.query(`SELECT * FROM business WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found business: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found business with the id
    result({ kind: "not_found" }, null);
  });
};
business.getAll = (title, result) => {
  let query = "SELECT * FROM business";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("business: ", res);
    result(null, res);
  });
};
business.getAllPublished = (result) => {
  sql.query("SELECT * FROM business WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("business: ", res);
    result(null, res);
  });
};
business.updateById = (id, business, result) => {
  sql.query(
    "UPDATE business SET title = ?, description = ?, published = ? WHERE id = ?",
    [business.title, business.description, business.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found business with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated business: ", { id: id, ...business });
      result(null, { id: id, ...business });
    }
  );
};
business.remove = (id, result) => {
  sql.query("DELETE FROM business WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found business with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted business with id: ", id);
    result(null, res);
  });
};
business.removeAll = (result) => {
  sql.query("DELETE FROM business", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} business`);
    result(null, res);
  });
};
module.exports = business;
