'use strict'
const readline = require('readline-sync')

class Game {
  constructor () {
    this.underScores = []
    this.played = []
    this.secretWord = undefined
    this.secretWordArr = []
    this.lives = 6
    this.lifeLost = false
    this.word = undefined
    this.message = ''
    this.repeat = false
    this.inGame = true
  }

  start (words) {
    this.inGame = true
    this.createNewWord(words)
    this.printOut()
  }

  createNewWord (words) {
    this.word = words[Math.floor(Math.random() * words.length)]
    for (let i = 0; i < this.word.length; i++) {
      this.underScores.push('_ ')
      this.secretWordArr.push(this.word[i].toUpperCase())
    }
    return this.underScores
  }

  printOut () {
    if (!this.inGame) {
      return
    }
    console.log('\nGuess a letter: \n' + this.underScores.join(' ') + '  lives: ' + this.lives + '.')
    let input = readline.question(' ')
    console.log(`You picked: ${input}`)
    this.processLetter(input, this.word)
  }

  // GUESS
  processLetter (letter, word) {
    this.secretWord = word.toUpperCase()
    let capitalLetter = letter.toUpperCase()

    // If the letter is repeated tell the user about it and do nothing: you can only lose a life on a letter once
    if (this.played.includes(capitalLetter)) {
      this.repeat = true
      console.log('You have already tried this letter, try another...')
    } else {
      this.repeat = false
      this.played.push(capitalLetter)
      console.log(this.played)

      if (this.secretWord.includes(capitalLetter) && this.repeat === false) {
        this.secretWordArr.forEach((element, index) => {
          if (capitalLetter === element) {
            this.underScores[index] = capitalLetter
          }
        })
      } else {
        this.lives--
      }
    }

    // CHECK FOR WIN OR LOSE
    if (this.underScores.join('').toString().toLowerCase() === word) {
      this.win()
    }
    if (this.lives === 0) {
      this.lose()
    }
    this.printOut()
  }

  // reset all inputs if gameover method calls
  gameOver () {
    this.inGame = false
    this.underScores = []
    this.played = []
    this.secretWord = undefined
    this.lives = 6
    this.lifeLost = false
    this.message = ''
  }

  // WIN FUNCTION
  win () {
    console.log('\nYOU WON, GOOD JOB!\n\n')
    this.gameOver()
  }

  // LOSE FUNCTION
  lose () {
    console.log('\nSorry you are out of lives!\nGAME OVER\n\n\n')
    this.gameOver()
  }
}

module.exports = Game
