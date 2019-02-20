'use strict'

const readline = require('readline-sync')
const menu = require('./lib/menu')
const help = require('./lib/help')
const quit = require('./lib/quit')

menu.runMenu()
let input = readline.question('Do your choice: > ')

if (input === 'P') {
  console.clear()
  let Game = require('./src/Game')
  let game1 = new Game()
  game1.start()
  // menu.runMenu()
}
if (input === 'N') {
  console.log('do you want to add a nickname')
  menu.runMenu()
}
if (input === 'H') {
  console.log(help.helpMe())
  menu.runMenu()
}
if (input === 'Q') {
  console.log('Okey, you want`s to quit? Are your sure? Push Q again, other push B for back.')
  quit.sayGoodBye()
}
