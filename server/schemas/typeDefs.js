const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    posts: [Post]
    photos: [Photo]
  }

  type Post {
    _id: ID!
    author: User!
    title: String!
    content: String!
    contentType: ContentType!
    likes: [Like]
    comments: [Comment]
  }

  type Photo {
    _id: ID!
    author: User!
    desc: String
    contentType: ContentType!
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

  type Query {
    users: [User]
    user(userId: String!): User
    posts: [Post]
    postsByContentType(contentType: ContentType): [Post]
    photos: [Photo]
  }
`;

module.exports = typeDefs;
