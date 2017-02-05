class BoogleBoard {
  constructor () {
    this.arr = []
  }

  board(input) {
    for (var i = 0; i < input; i++ ) {
      this.arr.push([])
      for (var j = 0; j < input; j++) {
        // rumus generate angka dari min sampai max
        // Math.floor(Math.random() * (max - min + 1)) + min;
        // ASCI A - Z = 65 - 90
        var angka = Math.floor(Math.random() * ( 90 - 65 + 1 ) ) + 65;
        var abjad = String.fromCharCode( angka )
        this.arr[i].push( abjad );
      }
    }
    console.log( this.arr );
  }
}

var kotak = new BoogleBoard();
kotak.board(6)
