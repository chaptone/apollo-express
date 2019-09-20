const express = require('express')
const { userController, postController } = require('../controller/controller.js')
const router = express.Router()

const { getUserById, getUsers, addUser } = userController
const { getPostByUserId } = postController

router.get('/users', (req, res) => {
  res.send(getUsers())
})

router.post('/user', (req, res) => {
  const { name, role } = req.body

  res.send(addUser({ name, role }))
})

router.get('/me', (req, res) => {
  const foundUser = getUserById('1')

  res.send(foundUser)
})

router.get('/posts', (req, res) => {
  const { id } = req.body

  const foundUser = getUserById(id)
  if (foundUser.role !== 'admin') {
    return res.status(401).send('Not authorized')
  }

  const foundPost = getPostByUserId(id)
  res.send(foundPost)
})

module.exports = router