const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const db = require("../index");
const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const usersSeed = [
  {
    _id: ObjectId("610e222880b5b0848d0a511e"),
    username: "Kenzie",
    email: "ken@cat.com",
    password: "$2b$10$HfySa9GbfPmoKki9lWnS3uuB8gHQwETON9fL2bmCbLoSrTwH5nWja",
  },
  {
    _id: ObjectId("610e10ca314a40809eda5b2a"),
    username: "Oscar",
    email: "oc@cat.com",
    password: "$2b$10$RjAkeIxW9OwMlPqvCjtBIeC4g0Cq5ce/7KcnR5RsOCcpqs7rxdtsi",
  },
  {
    _id: ObjectId("610e10ca314a40809eda5b2b"),
    username: "Toml",
    email: "toml@cat.com",
    password: "$2b$10$ZEBig5NcIgvsi2VwQ3i6ROmrEc5R4mil4ZaAtMJP2nq2vYxajhuzu",
  },
  {
    _id: ObjectId("610e10ca314a40809eda5b2c"),
    username: "Cleo",
    email: "cleo@cat.com",
    password: "$2b$10$eU1Hn2nXT1eU/Cf89xTzp.MSrJLSx3B1Rw6QgAXYGACXUIRoRcDAS",
  },
];

const mediaSeed = [
  {
    _id: ObjectId("610e228e80bbe784d83318fa"),
    mediaType: "Photo",
    author: ObjectId("610e222880b5b0848d0a511e"),
    img: "http://placekitten.com/350/310",
    desc: "Desc about photo....",
    contentType: "BJD",
    likesCount: 0,
    commentsCount: 0,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318f4"),
    mediaType: "Post",
    author: ObjectId("610e10ca314a40809eda5b2b"),
    title: "Article 1",
    content:
      "Duis quis tellus varius elit porttitor vulputate nec non mi. Integer ut condimentum arcu. Suspendisse in purus ut sem finibus commodo ac id eros. Aenean finibus mauris in odio condimentum, et mattis tortor pretium. Cras eleifend auctor libero. Donec pellentesque quam et libero rhoncus, quis imperdiet velit hendrerit. Nulla ac elit sapien. Aenean et augue efficitur, commodo quam in, maximus risus.",
    contentType: "BJD",
    likesCount: 1,
    commentsCount: 1,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318f9"),
    mediaType: "Photo",
    author: ObjectId("610e10ca314a40809eda5b2a"),
    img: "http://placekitten.com/360/300",
    desc: "Desc about photo....",
    contentType: "BOTH",
    likesCount: 0,
    commentsCount: 0,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318f5"),
    mediaType: "Post",
    author: ObjectId("610e10ca314a40809eda5b2b"),
    title: "Article 2",
    content:
      "Duis quis tellus varius elit porttitor vulputate nec non mi. Integer ut condimentum arcu. Suspendisse in purus ut sem finibus commodo ac id eros. Aenean finibus mauris in odio condimentum, et mattis tortor pretium. Cras eleifend auctor libero. Donec pellentesque quam et libero rhoncus, quis imperdiet velit hendrerit. Nulla ac elit sapien. Aenean et augue efficitur, commodo quam in, maximus risus.",
    contentType: "OOAK",
    likesCount: 0,
    commentsCount: 1,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318fb"),
    mediaType: "Photo",
    author: ObjectId("610e222880b5b0848d0a511e"),
    img: "http://placekitten.com/390/320",
    desc: "Desc about photo....",
    contentType: "OOAK",
    likesCount: 1,
    commentsCount: 0,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318f6"),
    mediaType: "Post",
    author: ObjectId("610e222880b5b0848d0a511e"),
    title: "Furst Post",
    content:
      "Duis quis tellus varius elit porttitor vulputate nec non mi. Integer ut condimentum arcu. Suspendisse in purus ut sem finibus commodo ac id eros. Aenean finibus mauris in odio condimentum, et mattis tortor pretium. Cras eleifend auctor libero. Donec pellentesque quam et libero rhoncus, quis imperdiet velit hendrerit. Nulla ac elit sapien. Aenean et augue efficitur, commodo quam in, maximus risus.",
    contentType: "OOAK",
    likesCount: 1,
    commentsCount: 0,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318fc"),
    mediaType: "Photo",
    author: ObjectId("610e10ca314a40809eda5b2b"),
    img: "http://placekitten.com/400/380",
    desc: "Desc about photo....",
    contentType: "BJD",
    likesCount: 2,
    commentsCount: 0,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318f7"),
    mediaType: "Post",
    author: ObjectId("610e10ca314a40809eda5b2a"),
    title: "Post?",
    content:
      "Duis quis tellus varius elit porttitor vulputate nec non mi. Integer ut condimentum arcu. Suspendisse in purus ut sem finibus commodo ac id eros. Aenean finibus mauris in odio condimentum, et mattis tortor pretium. Cras eleifend auctor libero. Donec pellentesque quam et libero rhoncus, quis imperdiet velit hendrerit. Nulla ac elit sapien. Aenean et augue efficitur, commodo quam in, maximus risus.",
    contentType: "BOTH",
    likesCount: 0,
    commentsCount: 0,
  },
];

const commentsSeed = [
  {
    author: ObjectId("610e222880b5b0848d0a511e"),
    content: "Nice work, very inciteful!",
    post: ObjectId("610e228e80bbe784d83318f5"),
  },
  {
    author: ObjectId("610e10ca314a40809eda5b2a"),
    content: "Purrfect!",
    post: ObjectId("610e228e80bbe784d83318f4"),
  },
  {
    author: ObjectId("610e222880b5b0848d0a511e"),
    content: "WOW!",
    photo: ObjectId("610e228e80bbe784d83318f9"),
  },
  {
    author: ObjectId("610e10ca314a40809eda5b2a"),
    content: "Amazing!",
    photo: ObjectId("610e228e80bbe784d83318fc"),
  },
  {
    author: ObjectId("610e10ca314a40809eda5b2c"),
    content: "Amazing!",
    photo: ObjectId("610e228e80bbe784d83318fb"),
  },
];

const likesSeed = [
  {
    author: ObjectId("610e10ca314a40809eda5b2c"),
    post: ObjectId("610e228e80bbe784d83318f6"),
  },
  {
    author: ObjectId("610e10ca314a40809eda5b2a"),
    post: ObjectId("610e228e80bbe784d83318f4"),
  },
  {
    author: ObjectId("610e10ca314a40809eda5b2c"),
    photo: ObjectId("610e228e80bbe784d83318fb"),
  },
  {
    author: ObjectId("610e10ca314a40809eda5b2c"),
    photo: ObjectId("610e228e80bbe784d83318f9"),
  },
  {
    author: ObjectId("610e10ca314a40809eda5b2c"),
    photo: ObjectId("610e228e80bbe784d83318fa"),
  },
  {
    author: ObjectId("610e10ca314a40809eda5b2c"),
    photo: ObjectId("610e228e80bbe784d83318fc"),
  },
  {
    author: ObjectId("610e222880b5b0848d0a511e"),
    photo: ObjectId("610e228e80bbe784d83318fc"),
  },
];

async function runSeeds() {
  try {
    await Promise.all([
      db.User.deleteMany({}),
      db.Media.deleteMany({}),
      db.Like.deleteMany({}),
      db.Comment.deleteMany({}),
    ]);

    await Promise.all([
      db.User.collection.insertMany(usersSeed).then(printResult("user")),
      db.Media.collection.insertMany(mediaSeed).then(printResult("media")),
      db.Like.collection.insertMany(likesSeed).then(printResult("like")),
      db.Comment.collection
        .insertMany(commentsSeed)
        .then(printResult("comments")),
    ]);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

function printResult(name) {
  return (data) => console.log(data.result.n, name, " records inserted!");
}

runSeeds();
