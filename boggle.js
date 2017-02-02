"use strict"

class Boggle {
  constructor (width, height) {
    this.width  = width
    this.height = height
    this.data   = []
  }

  random() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
    //(max-min + 1)+min (huruf A=65; huruf Z=90)
  }

  shake() {
    for (let i = 0; i < this.width; i++) {
      this.data[i]= []
      for (let j = 0; j < this.height; j++) {
        this.data[i].push(this.random())
      }
    }
    return this.data
  }
}

let boggleBoard = new Boggle(7,7)
console.log(boggleBoard.shake());
