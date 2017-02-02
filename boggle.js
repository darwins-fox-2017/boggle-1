class BoggleBoard{
  constructor(){
    this.board = []
  }

  boardPlay(size){
    for(let i = 0; i<size; i++){
      this.board.push([])
      for(let j = 0; j<size; j++){
        this.board[i].push(String.fromCharCode(Math.floor(Math.random()*(90-65+1)+65)))
      }
    }
  }

  shake(x){
    this.boardPlay(x)
    console.log(this.board)
  }
}

var boggle = new BoggleBoard()

boggle.shake(5)
