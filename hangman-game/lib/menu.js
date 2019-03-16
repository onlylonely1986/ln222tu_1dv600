'use strict'

const readline = require('readline-sync')
const help = require('./help')
const quit = require('./quit')
const newUser = require('./newUser')
let input

function runMenu (nickname) {
  console.log('Welcome to your favorite HANGMAN GAME!')
  console.log(' ')
  console.log('M   M  EEEEE  N    N  U    U\nMM MM  E      NN   N  U    U\nM M M  EEE    N  N N  U    U\nM   M  E      N   NN  UU  UU\nM   M  EEEEE  N    N    UUU\n')
  console.log('============================================================================')
  console.log(' ')
  console.log('PLAY (P)       LOGIN (L)        NEW USER (N)       HELP (H)         QUIT (Q)')
  console.log(' ')
  console.log('============================================================================')
  console.log(' ')
  if (nickname) {
    input = readline.question(`Welcome to do your choice ${nickname}`)
  } else {
    input = readline.question('Do your choice: > ')
  }

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
      newUser.newNick()
      // console.log('Ah, do you want to add a nickname? It is not possible at this moment ;)')
    }
    if (input.toUpperCase() === 'H') {
      console.log(help.helpMe())
    }
    if (input.toUpperCase() === 'Q') {
      console.log('Okey, you want`s to quit?')
      console.log(quit.sayGoodBye())
    }
  } else {
    console.log('Try again!')
  }
}

module.exports = { runMenu }
