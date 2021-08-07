const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new mongoose.Schema({
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  desc: {
    type: String,
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
const Photo = mongoose.model("Photo", photoSchema);
module.exports.Photo = Photo;
