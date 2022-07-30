const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name_of_business: {
        type: String,
        requird: true
    },
    ad_title: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Post', postSchema)