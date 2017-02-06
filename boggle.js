class BoggleBoard {
    constructor() {
       this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    shake () {
        let board = []
        for (let i=0;i<4;i++) {
            board[i] = [] 
            for (let j=0;j<4;j++) {
                board[i][j] = this.letters.charAt(Math.floor(Math.random()*(28-1)))
            }
        } 
        return board
    }
}

let boggleBoard = new BoggleBoard()
console.log(boggleBoard.shake());