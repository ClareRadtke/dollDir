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
    // Get all Posts by ContentType
    postsByContentType(parent, { contentType }) {
      console.log("Getting posts by content type");
      return Post.find({ contentType: contentType });
    },

    // Get all Photos
    photos() {
      return Photo.find();
    },
  },
  // Get all Posts and Photos by a User
  User: {
    posts(parent) {
      console.log("User", parent);
      return Post.find({ author: parent._id });
    },
    photos(parent) {
      return Photo.find({ author: parent._id });
    },
  },
  // Get all Comments, Likes & the author on a Post
  Post: {
    author(parent) {
      return User.findOne({ _id: parent.author });
    },
    likes(parent) {
      console.log("Post", parent);
      return Like.find({ post: parent._id });
    },
    comments(parent) {
      return Comment.find({ post: parent._id });
    },
  },
  // Get all  Comments, Likes & the author on a Post
  Photo: {
    author(parent) {
      return User.findOne({ _id: parent.author });
    },
    likes(parent) {
      console.log("Photo", parent);
      return Like.find({ photo: parent._id });
    },
    comments(parent) {
      return Comment.find({ photo: parent._id });
    },
  },
  // Get Author,
  Like: {
    author(parent) {
      return User.findOne({ _id: parent.author });
    },
  },
  Comment: {
    author(parent) {
      return User.findOne({ _id: parent.author });
    },
  },
};

module.exports = resolvers;

//Get all Photos and Posts by ContentType

// Get all Photos by ContentType
