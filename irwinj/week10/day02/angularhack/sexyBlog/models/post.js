var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  image: String,
  username: String
});

PostSchema.plugin(timestamps);

module.exports = mongoose.model('Post', PostSchema);
