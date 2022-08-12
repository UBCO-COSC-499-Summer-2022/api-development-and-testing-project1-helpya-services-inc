const mysql = require("mysql2");
const dbConfig = require("../config/db.general.config.js");
// Create a connection to the database

const connection = mysql.createPool({
  connectionLimit: 100,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.DB_PORT,
  debug: false,
});
// open the MySQL connection
connection.getConnection(function (err) {
  if (err) throw err;
  console.log("Connected!");
  console.log(dbConfig.HOST);
  console.log(dbConfig.USER);
  console.log(dbConfig.PASSWORD);
  console.log(dbConfig.DB);
  console.log(dbConfig.port);
});
module.exports = connection;
