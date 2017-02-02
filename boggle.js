class BoggleBoard {
  constructor () {
    this.board = []
  }

  shake(x) {
    for (let i=0; i<x; i++) {
      let newArr = []
      for (let j=0; j<x; j++) {
        newArr.push(String.fromCharCode(Math.floor(Math.random() * (90-65+1) + 65)))
        // String.fromCharCode(Math.floor(Math.random() * (90-65+1) + 65)) -> Rumus untuk merandom angka dari 65-90 kemudian merubahnya ke kode ASCII character
      }
      this.board.push(newArr)
    }

    return this.board
  }
}

var boggle = new BoggleBoard();

console.log(boggle.shake(4))
