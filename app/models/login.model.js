const sql = require("./db.js");
// constructor
const login = function(login){}

login.findByUserName = (type,email,result)=>{
  sql.query(`SELECT * FROM ${type} WHERE email='${email}'`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res[0]);
      return;
    }
    // not found education_history with the id
    result({ kind: "not_found" }, null);
  });
}

module.exports = login;