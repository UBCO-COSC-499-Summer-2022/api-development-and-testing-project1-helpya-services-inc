const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
// Create a connection to the database
const PORT = process.env.PORT || 3306;
const connection = mysql.createPool({
  connectionLimit: 100,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.port,
  debug: false,
});
// open the MySQL connection
connection.getConnection(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = connection;
