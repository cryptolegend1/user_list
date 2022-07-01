var mongoose = require("mongoose");
var connection = require("../lib/database");

var userSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);
