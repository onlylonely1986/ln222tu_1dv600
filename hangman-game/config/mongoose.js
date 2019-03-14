'use strict'

const mongoose = require('mongoose')
require('dotenv').config()
const CONNECTION_STRING = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_SECRET}@cluster0-shard-00-00-nbcw2.mongodb.net:27017,cluster0-shard-00-01-nbcw2.mongodb.net:27017,cluster0-shard-00-02-nbcw2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`

// connection to database
module.exports.connect = async () => {
  // Bind connection to events (to get notifications)
  mongoose.connection.on('connected', () => console.log('Mongoose connection is open.'))
  mongoose.connection.on('error', err => console.error(`Mongoose connection error has occurred: ${err}`))
  mongoose.connection.on('disconnected', () => console.log('Mongoose connection is disconnected.'))

  // if the Node process ends, close the Mongoose connection.
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose connection is disconnected due to application termination.')
      process.exit(0)
    })
  })

  // Connect to the server.
  return mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true })
}
