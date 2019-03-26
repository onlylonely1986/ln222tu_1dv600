'use strict'

const readline = require('readline-sync')
const help = require('./help')
const quit = require('./quit')
const level = require('./level')
let stillInGame = true

function runMenu () {
  console.log(' ')
  console.log('Welcome to your favorite HANGMAN GAME!')
  console.log(' ')
  console.log('M   M  EEEEE  N    N  U    U\nMM MM  E      NN   N  U    U\nM M M  EEE    N  N N  U    U\nM   M  E      N   NN  UU  UU\nM   M  EEEEE  N    N    UUU\n')
  console.log('============================================================================')
  console.log(' ')
  console.log('  PLAY (P)      LEVEL (L)          HELP (H)       QUIT (Q)')
  console.log(' ')
  console.log('============================================================================')
  console.log(' ')
}

async function gameOn () {
  while (stillInGame) {
    runMenu()
    let input = readline.question('Do your choice: > ')

    switch (input.toUpperCase()) {
      case 'P': {
        console.clear()
        let words = ['elephant', 'computer', 'apple', 'lemon']
        // let testword = ['puppy']
        let Game = require('../src/Game')
        let game = new Game()
        game.start(words)
        break
      }
      case 'L': {
        await level.chooseLevel()
        break
      }
      case 'H': {
        help.helpMe()
        break
      }
      case 'Q': {
        console.log('Okey, you want to quit?')
        input = readline.question('Do your choice: > ')
        if (input.toUpperCase() === 'Q') {
          console.log(quit.sayGoodBye())
          stillInGame = false
          process.exit()
        }
        break
      }
      default: {
        console.log('Try again!')
        break
      }
    }
  }
}

module.exports = { gameOn }
