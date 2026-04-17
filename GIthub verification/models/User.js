// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  skills: [String],
  githubUser: String,
  githubVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", userSchema);