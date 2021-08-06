const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Query {
    users: [User]
    user(userId: ID!): User
  }
`;

module.exports = typeDefs;
// User Type content
// posts: [Post]
// photos: [Photo]
// likes: [Like]
// comments: [Comment]

// QUery Type content
// posts: [Post]
// photos: [Photo]

// type Post {
//   _id: ID!
//   author: User!
//   title: String!
//   content: String!
//   contentType: ContentType!
//   likes: [Like]
//   comments: [Comment]
// }

// type Photo {
//   _id: ID!
//   author: User!
//   desc: String
//   contentType: ContentType!
//   likes: [Like]
//   comments: [Comment]
// }

// type Like {
//   _id: ID!
//   author: User!
//   post: Post
//   photo: Photo
// }

// type Comment {
//   _id: ID!
//   author: User!
//   posts: Post
//   photos: Photo
// }
// #selection string options will be "bjd", "ooak" or "both"
// type ContentType {
//   selection: String!
//   posts: [Post]
//   photos: [Photo]
// }

// type Query {
//   users: [User]
//   user(userId: ID!): User
//   posts: [Post]
//   photos: [Photo]
// }
