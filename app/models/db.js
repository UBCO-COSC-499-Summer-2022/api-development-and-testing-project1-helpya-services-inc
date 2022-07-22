const mysql = require("mysql");
const app = express();
const dbConfig = require("../config/db.config.js");
// Create a connection to the database
app.set("port", process.env.PORT || 3306);
const connection = mysql.createPool({
  connectionLimit: 100,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.port,
  debug: false,
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
// open the MySQL connection
connection.getConnection(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = connection;
