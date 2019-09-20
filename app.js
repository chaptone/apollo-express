const bodyParser = require('body-parser')
const express = require('express')
const router = require('./server/router.js')

const verifyToken = (req) => {
  const auth = (req.headers && req.headers.authorization) || ''

  const email = Buffer.from(auth, 'base64').toString('ascii')

  if (email !== 'test@test.com') return false
  return true
}

const auth = (req, res, next) => {
  if (!verifyToken(req)) return res.status(401).send('Not authorized')
  return next()
}

const server = () => {
  const app = express()
  app.use(bodyParser.json())

  app.get('/', (req, res) => res.send('Hello World!'))
  app.use('/express', auth)
  app.use('/express', router)

  return app
}

module.exports = server