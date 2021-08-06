const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  author: {
    type: String,
    required: "required",
  },
  post: {
    type: String,
  },
  photo: {
    type: String,
  },
});

//export model
const Like = mongoose.model("Like", likeSchema);
module.exports.Like = Like;
