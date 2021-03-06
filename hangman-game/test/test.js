'use strict'
const mocha = require('mocha')
const assert = require('chai').assert
const help = require('../lib/help')
const quit = require('../lib/quit')

mocha.describe('Help', function () {
  mocha.it('Help should return a string', function () {
    assert.isString(help.helpMe(), 'string')
  })
  mocha.it('Help should return a message to guide the player', function () {
    assert.equal(help.helpMe(), 'Follow the instructions to play this game in terminal.\nYou are supposed to guess the word, letter by letter.\n            ')
  })
})

mocha.describe('Quit', function () {
  mocha.it('Quit should return a string', function () {
    assert.isString(quit.sayGoodBye(), 'string')
  })
  mocha.it('Quit should return a message with Bye', function () {
    assert.equal(quit.sayGoodBye(), 'Bye')
  })
})
