const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: {
    type: String,
    required: "required",
  },
  title: {
    type: String,
    required: "required",
  },
  content: {
    type: String,
    required: "required",
  },
  contentType: {
    type: String,
    required: "selection of BJD, OOAK or Both is required",
  },
  likes: {
    type: number,
  },
  comments: {
    type: number,
  },
});

//export model
const Post = mongoose.model("Post", postSchema);
module.exports.Post = Post;
