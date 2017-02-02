class BoogleBoard {
  constructor(num) {
    this.num = num
    this.arr = []
  }
  randomZ(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  shake() {
    for(let i=0; i<this.num; i++) {
      this.arr[i] = []
      for(let j=0; j<this.num; j++)
      this.arr[i][j] = String.fromCharCode(65 + this.randomZ(0, 25))
    }
  }
  printArr() {
    return this.arr
  }
}

let Bogel = new BoogleBoard(4)
Bogel.shake();
console.log(Bogel.printArr())
