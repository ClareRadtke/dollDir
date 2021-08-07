const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  content: {
    type: String,
    required: "required",
  },
  post: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  photo: [
    {
      type: Schema.Types.ObjectId,
      ref: "Photo",
    },
  ],
});

//export model
const Comment = mongoose.model("Comment", commentSchema);
module.exports.Comment = Comment;
