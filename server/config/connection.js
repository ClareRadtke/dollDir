const mongoose = require("mongoose");
const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB || "mongodb://localhost/dollDirectory", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose.connection;
