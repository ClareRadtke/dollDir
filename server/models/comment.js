const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: "required",
  },
  content: {
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
const Comment = mongoose.model("Comment", commentSchema);
module.exports.Comment = Comment;
