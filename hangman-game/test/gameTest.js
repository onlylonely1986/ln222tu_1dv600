'use strict'
const mocha = require('mocha')
const assert = require('chai').assert
const app = require('../app')
let Game = require('../src/Game')
let game = new Game()

mocha.describe('App', function () {
  mocha.it('app should return hello', function () {
    assert.equal(app(), 'hello')
  })
})

mocha.describe('game', function () {
  mocha.it('hejsan should return hejsan svejsan', function () {
    assert.equal(game.hejsan(), 'hejsan svejsan')
  })
  mocha.it('guess should return right letter on right place', function () {
    assert.equal(game.guess('h', ['horse']), '')
  })
})
