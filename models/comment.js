const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
  date: {
      required: true,
      type: Date
  },
  content: {
      required: true,
      type: String
  }
})

const commentModel = mongoose.model('Comment', commentSchema);

module.exports = commentModel;