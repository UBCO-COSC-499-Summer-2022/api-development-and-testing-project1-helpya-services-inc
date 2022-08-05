const dropTable = require("../models/drop_table.model")

exports.drop = (req, res) => {
  dropTable((err,result)=>{
    res.send(result)
  })
}