const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    header: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    }
})

const articleModel = mongoose.model('Article', articleSchema);

module.exports = articleModel;