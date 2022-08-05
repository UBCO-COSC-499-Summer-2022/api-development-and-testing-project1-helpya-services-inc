const sql = require("./db.js");

const dropTable = (result) => {
  // truncate
  sql.query("select CONCAT('DELETE FROM ',table_schema,'.',TABLE_NAME, ';') from INFORMATION_SCHEMA.TABLES where  table_schema ='helpyadb'",(err,sqlRes)=>{
    for (const key in sqlRes) {
      const truncateSQL = sqlRes[key]["CONCAT('DELETE FROM ',table_schema,'.',TABLE_NAME, ';')"];
      sql.query(truncateSQL,(errs,res)=>{
        if(errs) {
          result(errs,false)
          return;
        }
      })
    }
    result(null,true) 
  })
}

module.exports = dropTable