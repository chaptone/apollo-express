const { userController, postController } = require('../controller/controller.js')
const { AuthenticationError } = require('apollo-server-express')

module.exports = {
  Query: {
    users: () => userController.getUsers(),
    me: (_, __, { user: { id } }) => userController.getUserById(id),
    post: (_, __, { user: { role } }) => {
      if (role !== 'admin') throw new AuthenticationError('Not authorized.')
      return postController.getPosts()
    },
  },
  Mutation: {
    addUser: (_, { name }) => addUser(name)
  },
  User: {
    posts: ({id}) => postController.getPostByUserId(id)
  }
}