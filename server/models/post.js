const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Media } = require("./media");

const postSchema = new mongoose.Schema({
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
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
    type: Number,
  },
  comments: {
    type: Number,
  },
});

//export model
const Post = Media.discriminator("Post", postSchema);
// const Post = mongoose.model("Post", postSchema, "media");
module.exports.Post = Post;
