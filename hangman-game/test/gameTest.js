'use strict'
const assert = require('chai').assert
const app = require('../app')
let Game = require('../src/Game')
let game = new Game()

describe('App', function () {
  it('app should return hello', function () {
    assert.equal(app(), 'hello')
  })
})

describe('game', function () {
  it('hejsan should return hejsan svejsan', function () {
    assert.equal(game.hejsan(), 'hejsan svejsan')
  })
  it('guess should return right letter on right place', function () {
    assert.equal(game.guess('h', ['horse']), '')
  })
})
