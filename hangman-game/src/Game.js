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
    this.word = undefined
    this.message = ''
    this.repeat = Boolean
  }

  start (words) {
    this.word = words[Math.floor(Math.random() * words.length)]
    for (let i = 0; i < this.word.length; i++) {
      this.underScores.push('_ ')
    }
    this.printOut()
  }

  printOut () {
    console.log('    ')
    console.log('Guess a letter: \n' + this.underScores.join(' ') + '  lives: ' + this.lives + '.')
    rl.question(' ', (letter) => {
      console.log(`You picked: ${letter}`)
      this.processLetter(letter, this.word)
    })
  }

  // GUESS
  processLetter (letter, word) {
    let secretWord = word.toUpperCase()
    // If the letter is repeated tell the user about it and do nothing: you can only lose a life on a letter once
    let capitalLetter = letter.toUpperCase()

    if (this.played.includes(capitalLetter)) {
      this.repeat = true
      console.log('You have already tried this letter, try another...')
    } else {
      this.repeat = false
      this.played.push(capitalLetter)
    }

    if (secretWord.includes(capitalLetter) && this.repeat === false) {
      let i = secretWord.indexOf(capitalLetter)
      this.underScores[i] = capitalLetter
    } else {
      this.lives--
    }

    this.printOut()
    console.log(this.played)

    // CHECK FOR WIN OR LOSE
    if (this.underScores.join('').toString().toLowerCase() === word) {
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

  // LOSE FUNCTION
  lose () {
    console.log('Sorry your out of lives! Type npm start to go to main menu!')
    this.gameOver()
  }

  hejsan () {
    return 'hejsan svejsan'
  }
}

module.exports = Game
