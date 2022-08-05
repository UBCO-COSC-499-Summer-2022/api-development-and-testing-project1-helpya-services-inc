const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    adID:{
        type: INT,
        requrie: true
    },
    businessID:{
        type: INT,
        requrie: true
    },
    name_of_business: {
        type: String,
        requird: true
    },
    job_title: {
        type: String,
        required: true
    },
    job_category:{
        type: String,
        requrie: true
    },
    location:{
        type: String,
        requrie: true
    },
    rate_per_hour: {
        type: CHAR,
        required: true
    }
})
module.exports = mongoose.model('Post', postSchema)