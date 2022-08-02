const mysql2 = require("mysql2");
//const dbConfig = require("../config/db.heroku.config.js");
// Create a connection to the database
const con = mysql2.createPool({
  connectionLimit: 100,
  host: "database",
  user: "root",
  password: "",
  database: "heroku_7d45a1c09c1d741",
  port: 3306,
  debug: false,
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
