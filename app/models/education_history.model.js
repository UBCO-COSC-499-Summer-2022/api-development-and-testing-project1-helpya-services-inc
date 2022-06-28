const sql = require("./db.js");
// constructor
const education_history = function (education_history) {

    this.businessID = education_history.businessID;
    this.education_level = education_history.education_level;
    this.highest_education_completed = education_history.highest_education_completed;
};
education_history.create = (neweducation_history, result) => {
  sql.query("INSERT INTO education_history SET ?", neweducation_history, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created education history: ", { id: res.insertId, ...neweducation_history });
    result(null, { id: res.insertId, ...neweducation_history });
  });
};
education_history.findById = (id, result) => {
  sql.query(`SELECT * FROM education_history WHERE businessID = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found education history: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found education_history with the id
    result({ kind: "not_found" }, null);
  });
};
education_history.getAll = (title, result) => {
  let query = "SELECT * FROM education_history";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("education history: ", res);
    result(null, res);
  });
};
/*
education_history.getAllPublished = (result) => {
  sql.query("SELECT * FROM education_history WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("education_history: ", res);
    result(null, res);
  });
};
*/
education_history.updateById = (id, education_history, result) => {
  sql.query(
    "UPDATE education_history SET education_level = ?, highest_education_completed = ? WHERE businessID = ?",
    [education_history.education_level, education_history.highest_education_completed, education_history.businessID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found education_history with the id
        result({ kind: "not found" }, null);
        return;
      }
      console.log("updated education history: ", { id: id, ...education_history });
      result(null, { id: id, ...education_history });
    }
  );
};

education_history.remove = (id, result) => {
  sql.query("DELETE FROM education_history WHERE businessID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found education history with the id
      result({ kind: "not found" }, null);
      return;
    }
    console.log("deleted education history with id: ", businessID); // not sure if this value is id or businessID
    result(null, res);
  });
};
education_history.removeAll = (result) => {
  sql.query("DELETE FROM education_history", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} education history`);
    result(null, res);
  });
};
module.exports = education_history;
