'use strict'

class Game {
  constructor () {
    this.quiz = {}
    this.dashes = []
    this.played = []
    this.lives = 3
    this.lifeLost = false
    this.found = 0
    this.message = ''
    this.cat = {
      puzzle: ['C', 'A', 'T'],
      category: 'Animals',
      player: new Array(3),
      lives: this.lives
    }
    this.hyena = {
      puzzle: ['H', 'Y', 'E', 'N', 'A'],
      category: 'Animals',
      player: new Array(5),
      lives: this.lives
    }
    this.puzzles = [this.cat, this.hyena]
    this.repeat = Boolean
  }

  help () {
    console.log(`Type start() to start a new game\nType guess('your guessed letter goes here') to make a guess\nTo check how many lives you have type lives\nYou start with ${this.lives} lives`)
  }

  obj () {
  }

  start () {
    this.lives = 3
    this.quiz = {}
    this.quiz = this.puzzles[Math.floor(Math.random() * this.puzzles.length)]

    this.dashes = (function (quiz) {
      let guess = []
      for (let i = 0; i < quiz.puzzle.length; i++) {
        if (quiz.puzzle[i] === '') {
          guess.push(' ')
        } else {
          guess.push('_')
        }
      }
      return guess
    })(this.quiz)
    console.log('Guess a letter: \n' + this.dashes.join(' ') + '  lives: ' + this.lives + '.')
  }

  // GUESS
  guess (letter) {
  // If the letter is repeated tell the user about it and do nothing: you can only lose a life on a letter once
    let capitalLetter = letter.toUpperCase()
    if (this.played.includes(capitalLetter)) {
      this.repeat = true
    } else {
      this.repeat = false
    }

    this.played.push(letter.toUpperCase())
    // FIRST LOOP: Assigns values if any match
    for (let i = 0; i < this.quiz.puzzle.length; i++) {
      if (letter.toUpperCase() === this.quiz.puzzle[i] && this.repeat === false) {
        this.dashes[i] = letter.toUpperCase()
      } else {
      // second loop will handle as this loop gives last value by deafult
      }
    }

    // SECOND LOOP: returns a value based on if value exists or not...has a break to stop loop from returning last value by default
    for (let i = 0; i < this.quiz.puzzle.length; i++) {
      if (letter.toUpperCase() === this.quiz.puzzle[i]) {
        this.found = 1
        break
      } else {
        this.found = 2
      }
    }

    // Use returned value to display message to the user accordingly YEAH!
    if (this.found === 1 && this.repeat === false) {
      this.message = 'Yes there are ' + this.played[this.played.length - 1] + 's in the solution: \n' + this.dashes.join(' ') + '\nlives: ' + this.lives + '.'
      console.log(this.message)
      this.message = ''
    } else if (this.found === 2 && this.repeat === false) {
      this.lifeLost = true
      if (this.lifeLost) {
        this.lives--
      }
      this.lifeLost = false
      this.message = 'No there are no ' + this.played[this.played.length - 1] + 's in the solution: \n' + this.dashes.join(' ') + '\nlives: ' + this.lives + '.'
      console.log(this.message)
      this.message = ''
    } else if (this.repeat === true) {
      this.message = 'You already played this letter! Here is what you have: \n' + this.dashes.join(' ') + '\nlives: ' + this.lives + '.'
      console.log(this.message)
      this.message = ''
    }

    // STORING THE PLAYERS PROGRESS IN THE OBJECT ITSELF FOR FUTURE USE
    this.quiz.player = this.dashes.slice(0)

    // ALWAYS END FUNCTION WITH A CHECK FOR WIN OR LOSE
    if (this.dashes.toString() === this.quiz.puzzle.toString()) {
      this.win()
    }

    if (this.lives === 0) {
      this.lose()
    }
  }
  gameOver () {
    this.quiz = {}
    this.dashes = []
    this.played = []
    this.lives = 3
    this.lifeLost = false
    this.found = 0
    this.message = ''
  }
  // RESET EVERYTHING if the player wins or loses

  // WIN FUNCTION
  win () {
    console.log('WINNER WINNER CHICKEN DINNER')
    this.gameOver()
  }

  // LOSE FUNCTION
  lose () {
    console.log('Sorry your out of lives! Type npm start to go to main menu!')
    this.gameOver()
  }
}

module.exports = Game
