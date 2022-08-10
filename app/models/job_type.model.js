const sql = require("./db.js");
// constructor
const job_type = function (job_type) {

    this.businessID = job_type.businessID;
    this.job_title = job_type.job_title;
    this.job_category = job_type.job_category;
    
};
job_type.create = (newjob_type, result) => {
  sql.query("INSERT INTO job_type SET ?", newjob_type, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created job type: ", { id: res.insertId, ...newjob_type });
    result(null, { id: res.insertId, ...newjob_type });
  });
};
job_type.findById = (id, result) => {
  sql.query(`SELECT * FROM job_type WHERE businessID = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found job type: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found job type with the id
    result({ kind: "not found" }, null);
  });
};
job_type.getAll = (title, result) => {
  let query = "SELECT * FROM job_type";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("job type: ", res);
    result(null, res);
  });
};
job_type.updateById = (id, job_type, result) => {
  sql.query(
    "UPDATE job_type SET job_title = ?, job_category = ? WHERE businessID = ?",
    [job_type.job_title, job_type.job_category, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found job type with the id
        result({ kind: "not found" }, null);
        return;
      }
      console.log("updated job type: ", { id: id, ...job_type });
      result(null, { id: id, ...job_type });
    }
  );
};

job_type.remove = (id, result) => {
  sql.query("DELETE FROM job_type WHERE businessID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found job type with the id
      result({ kind: "not found" }, null);
      return;
    }
    console.log("deleted job type with id: ", businessID); // not sure if this value is id or businessID
    result(null, res);
  });
};
job_type.removeAll = (result) => {
  sql.query("DELETE FROM job_type", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} job type`);
    result(null, res);
  });
};
module.exports = job_type;
