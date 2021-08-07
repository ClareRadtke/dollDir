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
  },
  {
    _id: ObjectId("610e10ca314a40809eda5b2a"),
    username: "Oscar",
    email: "oc@cat.com",
  },
  {
    _id: ObjectId("610e10ca314a40809eda5b2b"),
    username: "Toml",
    email: "toml@cat.com",
  },
  {
    _id: ObjectId("610e10ca314a40809eda5b2c"),
    username: "Cleo",
    email: "cleo@cat.com",
  },
];

const postsSeed = [
  {
    _id: ObjectId("610e228e80bbe784d83318f4"),
    author: ObjectId("610e10ca314a40809eda5b2b"),
    title: "Article 1",
    content:
      "Duis quis tellus varius elit porttitor vulputate nec non mi. Integer ut condimentum arcu. Suspendisse in purus ut sem finibus commodo ac id eros. Aenean finibus mauris in odio condimentum, et mattis tortor pretium. Cras eleifend auctor libero. Donec pellentesque quam et libero rhoncus, quis imperdiet velit hendrerit. Nulla ac elit sapien. Aenean et augue efficitur, commodo quam in, maximus risus.",
    contentType: "BJD",
    likes: 1,
    comments: 1,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318f5"),
    author: ObjectId("610e10ca314a40809eda5b2b"),
    title: "Article 2",
    content:
      "Duis quis tellus varius elit porttitor vulputate nec non mi. Integer ut condimentum arcu. Suspendisse in purus ut sem finibus commodo ac id eros. Aenean finibus mauris in odio condimentum, et mattis tortor pretium. Cras eleifend auctor libero. Donec pellentesque quam et libero rhoncus, quis imperdiet velit hendrerit. Nulla ac elit sapien. Aenean et augue efficitur, commodo quam in, maximus risus.",
    contentType: "OOAK",
    likes: 0,
    comments: 1,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318f6"),
    author: ObjectId("610e222880b5b0848d0a511e"),
    title: "Furst Post",
    content:
      "Duis quis tellus varius elit porttitor vulputate nec non mi. Integer ut condimentum arcu. Suspendisse in purus ut sem finibus commodo ac id eros. Aenean finibus mauris in odio condimentum, et mattis tortor pretium. Cras eleifend auctor libero. Donec pellentesque quam et libero rhoncus, quis imperdiet velit hendrerit. Nulla ac elit sapien. Aenean et augue efficitur, commodo quam in, maximus risus.",
    contentType: "OOAK",
    likes: 1,
    comments: 0,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318f7"),
    author: ObjectId("610e10ca314a40809eda5b2a"),
    title: "Post?",
    content:
      "Duis quis tellus varius elit porttitor vulputate nec non mi. Integer ut condimentum arcu. Suspendisse in purus ut sem finibus commodo ac id eros. Aenean finibus mauris in odio condimentum, et mattis tortor pretium. Cras eleifend auctor libero. Donec pellentesque quam et libero rhoncus, quis imperdiet velit hendrerit. Nulla ac elit sapien. Aenean et augue efficitur, commodo quam in, maximus risus.",
    contentType: "BOTH",
    likes: 0,
    comments: 0,
  },
];

const photosSeed = [
  {
    _id: ObjectId("610e228e80bbe784d83318f9"),
    author: ObjectId("610e10ca314a40809eda5b2a"),
    desc: "Desc about photo....",
    contentType: "BOTH",
    likes: 0,
    comments: 0,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318fa"),
    author: ObjectId("610e222880b5b0848d0a511e"),
    desc: "Desc about photo....",
    contentType: "BJD",
    likes: 0,
    comments: 0,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318fb"),
    author: ObjectId("610e222880b5b0848d0a511e"),
    desc: "Desc about photo....",
    contentType: "OOAK",
    likes: 1,
    comments: 0,
  },
  {
    _id: ObjectId("610e228e80bbe784d83318fc"),
    author: ObjectId("610e10ca314a40809eda5b2b"),
    desc: "Desc about photo....",
    contentType: "BJD",
    likes: 2,
    comments: 0,
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
      db.Post.deleteMany({}),
      db.Photo.deleteMany({}),
      db.Like.deleteMany({}),
      db.Comment.deleteMany({}),
    ]);

    await Promise.all([
      db.User.collection.insertMany(usersSeed).then(printResult("user")),
      db.Post.collection.insertMany(postsSeed).then(printResult("post")),
      db.Photo.collection.insertMany(photosSeed).then(printResult("photo")),
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
