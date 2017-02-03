class BoggleBoard{
  constructor(){
    this.board;
    let alfabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.alfabet=alfabet.split('');
  }
  shake(dimensi){
    this.board=[];
    for (let line = 0; line < dimensi; line++) {
      let lineValue=[];
      for (var collum = 0; collum < dimensi; collum++) {
        lineValue.push(this.randomAlfabet ())
      }
      this.board.push(lineValue);
    }
  }
  randomAlfabet (){
    let indexAlfabet=Math.floor(Math.random()*(this.alfabet.length-1))
    return this.alfabet[indexAlfabet];
    return indexAlfabet
  }
}

var bogle=new BoggleBoard();
bogle.shake(5);
console.log(bogle.board);
