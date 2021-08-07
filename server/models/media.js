const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new mongoose.Schema(
  {},
  { discriminatorKey: "mediaType", collection: "media" }
);

//export model
const Media = mongoose.model("Media", mediaSchema, "media");
module.exports.Media = Media;
