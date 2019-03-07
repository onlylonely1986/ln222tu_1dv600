'use strict'

const readline = require('readline-sync')
const help = require('./help')
const quit = require('./quit')

function runMenu () {
  console.log('Welcome to your favorite HANGMAN GAME!')
  console.log(' ')
  console.log('MENU:')
  console.log('PLAY (P)               HELP (H)')
  console.log('NICK (N)               QUIT (Q)')
  console.log(' ')

  let input = readline.question('Do your choice: > ')

  if (input.toUpperCase() === 'P' || input.toUpperCase() === 'N' || input.toUpperCase() === 'H' || input.toUpperCase() === 'Q') {
    if (input.toUpperCase() === 'P') {
      console.clear()
      // let words = ['elephant', 'computer', 'apple', 'lemon']
      let testword = ['horse']
      let Game = require('../src/Game')
      let game1 = new Game()
      game1.start(testword)
    }
    if (input.toUpperCase() === 'N') {
      console.log('Ah, do you want to add a nickname? It is not possible at this moment ;)')
    }
    if (input.toUpperCase() === 'H') {
      console.log(help.helpMe())
    }
    if (input.toUpperCase() === 'Q') {
      console.log('Okey, you want`s to quit? Are your sure? Push Q again, other push B for back.')
      quit.sayGoodBye()
    }
  } else {
    console.log('Try again!')
  }
}

module.exports = { runMenu }
