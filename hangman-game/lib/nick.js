'use strict'
const readline = require('readline-sync')
// const menu = require('./menu')

let arrNames = []

function newNick () {
  let input = readline.question('What is your nickname ? > ')
  console.log(`Your name is now saved during your playing time: ${input}`)
  // menu.runMenu(input)
  savedNicks(input)
  return input
}

function savedNicks (nickname) {
  arrNames.push(nickname)
  return arrNames
}

module.exports = { newNick, savedNicks }
