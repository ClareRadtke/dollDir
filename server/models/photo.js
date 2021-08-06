const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  author: {
    type: String,
    required: "required",
  },
  desc: {
    type: String,
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
const Photo = mongoose.model("Photo", photoSchema);
module.exports.Photo = Photo;
