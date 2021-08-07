const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new mongoose.Schema({
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
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
const Like = mongoose.model("Like", likeSchema);
module.exports.Like = Like;
