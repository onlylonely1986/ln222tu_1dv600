'use strict'
const readline = require('readline')
const menu = require('../lib/menu')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class Game {
  constructor () {
    this.underScores = []
    this.played = []
    this.lives = 6
    this.lifeLost = false
    this.found = 0
    this.message = ''
    this.repeat = Boolean
  }

  start (words) {
    let randWord = words[Math.floor(Math.random() * words.length)]

    for (let i = 0; i < randWord.length; i++) {
      this.underScores.push('_ ')
    }

    console.log('Guess a letter: \n' + this.underScores.join(' ') + '  lives: ' + this.lives + '.')
    rl.question(' ', (letter) => {
      console.log(`You picked: ${letter}`)
      this.guess(letter, randWord)
    })
  }

  // GUESS
  guess (letter, randWord) {
  // If the letter is repeated tell the user about it and do nothing: you can only lose a life on a letter once
    let capitalLetter = letter.toUpperCase()
    // this.played.push(capitalLetter)
    if (this.played.includes(capitalLetter)) {
      this.repeat = true
      console.log('You have already tried this letter, try another...')
    } else {
      this.repeat = false
    }

    this.played.push(capitalLetter)
    // FIRST LOOP: Assigns values if any match
    for (let i = 0; i < randWord.length; i++) {
      if (capitalLetter === randWord[i].toUpperCase() && this.repeat === false) {
        this.underScores[i] = capitalLetter
      }
    //   if (capitalLetter !== randWord[i].toUpperCase()) {
    //     console.log('finns inte med')
    //     this.lives--
    //   }
    }
    console.log('    ')
    console.log('Guess a letter: \n' + this.underScores.join(' ') + '  lives: ' + this.lives + '.')
    console.log(this.played)
    rl.question(' ', (letter) => {
      console.log(`You picked: ${letter}`)
      this.guess(letter, randWord)
    })
    // SECOND LOOP: returns a value based on if value exists or not...has a break to stop loop from returning last value by default
    for (let i = 0; i < randWord.length; i++) {
      if (capitalLetter === randWord[i].toUpperCase()) {
        this.found = 1
        break
      } else {
        this.found = 2
      }
    }

    // CHECK FOR WIN OR LOSE
    if (this.underScores.join('').toString().toLowerCase() === randWord) {
      rl.close()
      this.win()
    }

    if (this.lives === 0) {
      this.lose()
    }
  }
  // reset all inputs if gameover method calls
  gameOver () {
    rl.close()
    this.underScores = []
    this.played = []
    this.lives = 6
    this.lifeLost = false
    this.found = 0
    this.message = ''
    menu.runMenu()
  }

  // WIN FUNCTION
  win () {
    console.log(' ')
    console.log('YOU WON, GOOD JOB!')
    console.log(' ')
    this.gameOver()
  }

  // // LOSE FUNCTION
  lose () {
    console.log('Sorry your out of lives! Type npm start to go to main menu!')
    this.gameOver()
  }

  hejsan () {
    return 'hejsan svejsan'
  }
}

module.exports = Game
