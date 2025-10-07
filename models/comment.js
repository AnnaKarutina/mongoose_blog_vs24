const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
  date: {
    required: true,
    type: Date
  },
  content: {
    required: true,
    type: String
  },    
  article: {
    required: true,
    type: mongoose.Schema.Types.ObjectId, ref: 'Article'
}
})

const commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel;