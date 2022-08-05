const mysql = require("mysql");

const postSchema = new mysql.Schema({
    name_of_business: {
        type: String,
        requird: true
    },
    ad_title: {
        type: String,
        required: true
    },
    ad_price: {
        type: String,
        required: true
    },
})
module.exports = mysql.model('Post', postSchema)
