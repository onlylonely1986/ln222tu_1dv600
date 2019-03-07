'use strict'

const readline = require('readline-sync')
const help = require('./help')
const quit = require('./quit')
const nick = require('./nick')
let input

function runMenu (nickname) {
  console.log('Welcome to your favorite HANGMAN GAME!')
  console.log(' ')
  console.log('MENU:')
  console.log('PLAY (P)               HELP (H)')
  console.log('NICK (N)               QUIT (Q)')
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
      nick.newNick()
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
