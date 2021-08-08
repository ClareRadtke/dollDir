const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: "required", unique: true, trim: true },
  email: {
    type: String,
    required: "required",
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: { type: String, required: true, minlength: 8 },
});
// hash the password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
// compare the password
userSchema.methods.validPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//export model
const User = mongoose.model("User", userSchema);
module.exports.User = User;
