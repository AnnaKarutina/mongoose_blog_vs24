const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    header: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    comments: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment' 
        }
    ],
    author: {
        required: true,
        type: mongoose.Schema.Types.ObjectId, ref: 'Author'
    }
})

const articleModel = mongoose.model('Article', articleSchema);

module.exports = articleModel;