function boggle(num){
var bboard = []
var alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

  for (var i = 0; i < num; i++){
    let papan = []
    bboard.push(papan)
    for(var j = 0; j < num; j++){
      let random = Math.floor(Math.random() * 26)
         papan.push(alphabets[random])
       }
  }
  return bboard
}
console.log(boggle(4));
