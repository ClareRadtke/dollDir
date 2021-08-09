const { User, Post, Photo, Like, Comment, Media } = require("../models");
const mongoose = require("mongoose");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

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
    me(parent, args, context) {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Get all Posts
    posts() {
      return Post.find({ mediaType: "Post" });
    },

    // Get all Photos
    photos() {
      return Photo.find({ mediaType: "Photo" });
    },

    media(parent, { contentType, mediaType }) {
      const filter = {};

      if (contentType != null) filter.contentType = contentType;
      if (mediaType != null) filter.mediaType = mediaType;

      return Media.find(filter);
    },
  },

  Mutation: {
    async addUser(parent, { email, username, password }) {
      console.log(email, username);
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    async login(parent, { email, password }) {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect Password or Email!");
      }

      const correctPassword = await user.validPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect Password or Email!");
      }

      const token = signToken(user);
      return { token, user };
    },
    async addPost(parent, { title, content, contentType }, context) {
      console.log(context.user);
      const post = await Post.create({
        title,
        content,
        contentType,
        author: context.user._id,
      });
      return post;
    },
  },

  Media: {
    __resolveType(obj, context, info) {
      return obj.mediaType == "Photo" ? "Photo" : "Post";
    },
  },
  // Get all Posts and Photos by a User
  User: {
    posts(parent) {
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
