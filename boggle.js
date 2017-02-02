function shake(num){
  let arr = []
  let boogleArr = []

  for(var a = "A".charCodeAt(0), end="Z".charCodeAt(0); a <= end; a++){
	arr.push(String.fromCharCode(a));
		}
for(var i = arr.length -1; i>0; i--){
	var j= Math.floor(Math.random()*(i+1));
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

for(var i=0, j=num*4; i < j; i+=4){
boogleArr.push(arr.slice(i, i+4))
	}
	return boogleArr;
}
console.log(shake(4));
