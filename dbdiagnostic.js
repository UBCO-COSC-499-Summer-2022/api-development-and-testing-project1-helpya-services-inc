const mysql = require("mysql");
//const dbConfig = require("../config/db.heroku.config.js");
// Create a connection to the database
const con = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "database",
  port: 3306,
  debug: true,
});

con.getConnection(function (err) {
  if (err) throw err;
  con.query(
    "SELECT host,user,authentication_string FROM mysql.user",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
});
con.getConnection(function (err) {
  if (err) throw err;
  con.query("SHOW DATABASES", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});