class BoggleBoard {
	constructor() {
		this.numeric = [];
		this.word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	shake(value) {

		for(let i=0; i < value; i++) {
		 	this.numeric[i] = []
			for(let j=0; j< value; j++) {
		    	this.numeric[i][j] = this.word.charAt(Math.floor(Math.random() * this.word.length));
		  	}
		}
		return this.numeric;

	}

}
let newBoggle = new BoggleBoard();
console.log(newBoggle.shake(5));
