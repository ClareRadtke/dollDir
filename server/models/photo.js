const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Media } = require("./media");

const photoSchema = new mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  img: {
    type: String,
    match: [
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      "Must be a valid URL",
    ],
  },
  desc: {
    type: String,
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
const Photo = Media.discriminator("Photo", photoSchema);
// const Photo = mongoose.model("Photo", photoSchema, "media");
module.exports.Photo = Photo;
