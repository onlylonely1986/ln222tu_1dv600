'use strict'
const menu = require('./menu')
const readline = require('readline-sync')
const User = require('../models/userModel')
const mongoose = require('../config/mongoose')

// connect to the database
mongoose.connect().catch(e => {
  console.log(e)
  process.exit(1)
})

async function newNick () {
  let inputUser = readline.question(`Choose your username:`)
  let inputPassword = readline.question(`Choose your password: `, { hideEchoBack: true })
  try {
    const user = new User({
      username: inputUser,
      password: inputPassword
    })
    await user.save()
    console.log('Creating account ... ')
    console.log('Your account was created successfully!')
    menu.runMenu(inputUser)
  } catch (e) {
    console.log('To bad, an error occured :(')
    console.log(e)
  }
}

function savedNicks (nickname) {
  // arrNames.push(nickname)
  // return arrNames
}

module.exports = { newNick, savedNicks }
