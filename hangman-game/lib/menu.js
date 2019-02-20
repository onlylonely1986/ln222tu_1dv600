'use strict'

const readline = require('readline-sync')

function runMenu () {
  console.log('Welcome to your favorite HANGMAN GAME!')
  console.log(' ')
  console.log('MENU:')
  console.log('PLAY (P)               HELP (H)')
  console.log('NICK (N)               QUIT (Q)')
  console.log(' ')
}

// let input = readline.question('Do your choice: > ')

module.exports = { runMenu }
