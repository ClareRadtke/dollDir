const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    posts: [Post]
    photos: [Photo]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Post {
    _id: ID!
    mediaType: MediaType!
    author: User!
    title: String
    content: String
    contentType: ContentType!
    likesCount: Int
    commentsCount: Int
    likes: [Like]
    comments: [Comment]
  }

  type Photo {
    _id: ID!
    mediaType: MediaType!
    author: User!
    desc: String
    contentType: ContentType!
    likesCount: Int
    commentsCount: Int
    likes: [Like]
    comments: [Comment]
  }

  type Like {
    _id: ID!
    author: User!
  }

  type Comment {
    _id: ID!
    content: String
    author: User!
  }

  enum ContentType {
    BJD
    OOAK
    BOTH
  }

  enum MediaType {
    Photo
    Post
  }

  union Media = Post | Photo

  type Query {
    users: [User]
    user(userId: String!): User
    me: User
    posts: [Post]
    media(contentType: ContentType, mediaType: MediaType): [Media]
    photos: [Photo]
  }

  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
