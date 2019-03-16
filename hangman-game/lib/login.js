'use strict'
// let menu = require('./menu')
const readline = require('readline-sync')
const User = require('../models/userModel')
const mongoose = require('../config/mongoose')

// connect to the database
mongoose.connect().catch(e => {
  console.log(e)
  process.exit(1)
})

function loginUser () {

}
module.exports = { loginUser }
