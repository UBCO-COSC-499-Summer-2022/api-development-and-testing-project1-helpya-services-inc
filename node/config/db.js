const mysql = reqiure('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "database"
})
module.exports = db;