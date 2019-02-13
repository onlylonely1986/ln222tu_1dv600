const fnkModule = require('./lib/utils.js')
// fnkModule.sayHello()

const Game = require('./src/Game.js')
let game = new Game()

// game.sayHello()

const inquirer = require('inquirer')

let wordBank = ['elephant', 'computer', 'apple', 'lemon']
let underScores = []
let randWord = wordBank[Math.floor(Math.random() * wordBank.length)]

for (let i = 0; i < randWord.length; i++) {
  underScores.push('_ ')
}

console.log('Welcome to hangman game!')
console.log(' ')
console.log('Do you want to guess the word? Be aware that you might be hanged!')
console.log(' ')
var questions = [{
  type: 'input',
  name: 'letter',
  message: `The word has ${underScores} letters!`
}]

inquirer.prompt(questions).then(answers => {
  console.log(' ')
  console.log(`Your first guess is ${answers['letter']}`)
})
