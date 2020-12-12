const mongoose = require('mongoose');

const LogRowSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  },
  photoname: {
    type: String,
    required: true
  }
},{
  collection:'LogRow'
});

module.exports = LogRow = mongoose.model('logrow', LogRowSchema);