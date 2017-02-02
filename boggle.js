class BoggleBoard {
  constructor() {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  shake(side){
    let boggleTabel = []
    for (let i = 0; i < side; i++) {
      let row = []
      for (let j = 0; j < side; j++) {
        row.push(this.randomChar())
      }
      boggleTabel.push(row)
    }
    return boggleTabel
  }
  randomChar(){
    return this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length))
  }
}

let boggle = new BoggleBoard()
console.log(boggle.shake(4));
