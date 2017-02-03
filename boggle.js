class BoggleBoard{
  // test
  constructor(){
    this.board=[];
    this.isi=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  }

  shake(size){
    // terima num
    // bikin board ukuran num x num
    // isi tiap kotak dengan huruf acak
    // kembalikan board
    for(var line=0;line<size;line++){
      var newLine = [];
      this.board.push(newLine);
      for(var content=0;content<size;content++){
        var isi = Math.floor(Math.random()*26);
          this.board[line].push(this.isi[isi]);
      }
    }
    return this.board
  }
}
var boggle = new BoggleBoard();
console.log(boggle.shake(4));
