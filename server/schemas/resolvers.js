const { User, Post, Photo, Like, Comment } = require("../models");

const resolvers = {
  Query: {
    // Get all Users
    users() {
      console.log("Getting users list");
      return User.find();
    },
    // Get one user
    user(parent, { userId }) {
      console.log("Getting user");
      return User.findOne({ _id: userId });
    },
    // Get all Posts
    posts() {
      return Post.find();
    },
    // Get all Photos
    photos() {
      return Photo.find();
    },
  },
  Get all Posts and Photos by a User
  User: {
    posts(parent) {
      return posts.filter((post) => post.author._id === parent._id);
    },
    photos(parent) {
      return photos.filter((photo) => photo.author._id === parent._id);
    },
  },
  // Get all Comments & Likes on a Post
  Post: {
    likes(parent) {
      return likes.filter((like) => like.post._id === parent._id);
    },
    comments(parent) {
      return comments.filter((comment) => comment.post._id === parent._id);
    },
  },
  // Get all Comments & Likes on a Post
  Photo: {
    likes(parent) {
      return likes.filter((like) => like.photo._id === parent._id);
    },
    comments(parent) {
      return comments.filter((comment) => comment.photo._id === parent._id);
    },
  },
  //Get all Photos and Posts by ContentType
  // ContentType: {
  //   posts(parent) {
  //     return posts.filter(
  //       (post) => post.contentType.selection === parent.selection
  //     );
  //   },
  //   photos(parent) {
  //     return photos.filter(
  //       (photo) => photo.contentType.selection === parent.selection
  //     );
  //   },
  // },
};

module.exports = resolvers;

//Get all Photos and Posts by ContentType

// Get all Photos by ContentType

// Get all Posts by ContentType
