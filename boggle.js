"use strict"

class BoogleBoard {
  constructor() {
    this.Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  shake(val){
    let board = []
    for (let i = 0; i < val; i++) {
      board.push([])
      for(let j = 0; j < val; j++){
        board[i].push(this.Alphabet.charAt(Math.floor(Math.random() * this.Alphabet.length)))
      }
    }
    return board
  }
}

var resultBoogle = new BoogleBoard()

console.log(resultBoogle.shake(4));
