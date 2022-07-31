const mysql = require("mysql");
const dbConfig = require("../config/db.heroku.config.js");
// Create a connection to the database
const connection = mysql.createPool({
  connectionLimit: 100,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.port,
  debug: false,
});

con.connect(function (err) {
  if (err) throw err;
  con.query(
    "SELECT host,user,authentication_string FROM mysql.user",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
});
con.connect(function (err) {
  if (err) throw err;
  con.query("SHOW DATABASES", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});