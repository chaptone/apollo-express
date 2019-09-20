const bodyParser = require('body-parser')
const express = require('express')
const router = require('./server/router.js')

const { ApolloServer, AuthenticationError } = require('apollo-server-express')
const { userController } = require('./controller/controller.js')
const resolvers = require('./graphql/resolver.js')
const typeDefs = require('./graphql/schema.js')


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

const context = ({ req }) => {
  if (!verifyToken(req)) throw new AuthenticationError('Not authorized.')

  const user = userController.getUserById('1')
  return { user }
}

const server = () => {
  const app = express()
  app.use(bodyParser.json())

  app.get('/', (req, res) => res.send('Hello World!'))
  app.use('/express', auth)
  app.use('/express', router)

  const server = new ApolloServer({ typeDefs, resolvers, context })
  server.applyMiddleware({ app })

  return app
}

module.exports = server