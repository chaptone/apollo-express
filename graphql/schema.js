const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    users: [User],
    me: User,
    post: [Post]
  }
  type Mutation {
    "Name must be a string"
    addUser(name: String): [User]
  }
  type User {
    "Auto generate ID"
    id: String,
    "Name of user must be a string"
    name: String,
    role: String,
    posts: [Post],
  }
  type Post {
    id: String
    userId: String,
    detail: String,
  }
`

module.exports = typeDefs