class BoggleBoard {
  constructor() {
    this.board = [];
    this.huruf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  shake(panjang, lebar=panjang) {
    for (var i = 0; i < panjang; i++) {
      let arr = []
      this.board.push(arr)

      for (var j = 0; j < lebar; j++) {
        let randomHuruf = this.huruf[Math.floor(Math.random() * this.huruf.length)]
        this.board[i].push(randomHuruf)
      }
    }
    return this.board
  }
}

var board = new BoggleBoard()
console.log(board.shake(4))
