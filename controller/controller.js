const { userData, postData } = require('../data/data.js')

const getUsers = () => {
  return userData
}

const getUserById = (id) => {
  return userData.find(u => u.id === id)
}

const addUser = (payload) => {
  const { id } = userData[userData.length - 1]
  const _id = parseInt(id) + 1
  userData.push({ id: `${_id}`, name: payload.name, role: payload.role })
  return userData
}

const getPostByUserId = (userId) => {
  const foundPosts = postData.filter(p => p.userId === userId)
  return foundPosts
}

const getPosts = () => postData

module.exports = {
  userController: { getUsers, getUserById, addUser},
  postController: { getPostByUserId, getPosts }
}