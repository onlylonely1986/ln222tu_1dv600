'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Create a schema
const userSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minLength: 3
  }
}, { timestamps: true })

// validate username is the correct length
userSchema.path('username').validate((username) => {
  return username.length >= 3
}, 'The username must be of minimun length 3 characters.')

// validate password when making account
userSchema.path('password').validate((password) => {
  return password.length >= 3
}, 'The password must be of minimun length 3 characters.')

// hashing password when making account
userSchema.pre('save', async function (next) {
  let user = this
  if (user.isModified('password') || user.isNew) {
    let hashPwd = await bcrypt.hash(user.password, 12)
    user.password = hashPwd
  }
  next()
})

// compare passwords when login
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

// Create a model using the schema.
const User = mongoose.model('User', userSchema)

// Exports
module.exports = User
