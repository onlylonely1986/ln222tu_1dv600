'use strict'

const readline = require('readline-sync')
let Game = require('../src/Game')
let game = new Game()
let easy = ['cat', 'dog', 'table', 'game', 'hat', 'bird', 'rabbit', 'girl', 'boy', 'sister']
let middle = ['umbrella', 'octopus', 'butterfly', 'chicken', 'crocodile', 'penguin', 'raspberry', 'watermelon']
let hard = ['fantastic', 'brilliant', 'dangerous', 'acknowledge', 'ambiguous', 'astounding']

function chooseLevel () {
  let input = readline.question(`What level do you want to play?\nChoose between easy(1), middle(2) or hard(3): `)

  switch (input.toUpperCase()) {
    case '1': {
      console.clear()
      game.start(easy)
      break
    }
    case '2': {
      console.clear()
      game.start(middle)
      break
    }
    case '3': {
      console.clear()
      game.start(hard)
      break
    }
    default: {
      console.log('Try again!')
      break
    }
  }
}

module.exports = { chooseLevel }
