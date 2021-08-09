const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Media } = require("./media");

// TODO: needs a date key with creation date
const postSchema = new mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
  likesCount: {
    type: Number,
    default: 0,
  },
  commentsCount: {
    type: Number,
    default: 0,
  },
});

//export model
const Post = Media.discriminator("Post", postSchema);
// const Post = mongoose.model("Post", postSchema, "media");
module.exports.Post = Post;
