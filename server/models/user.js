const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: "required" },
  email: { type: String, required: "required" },
});

//export model
const User = mongoose.model("User", userSchema);
module.exports.User = User;
