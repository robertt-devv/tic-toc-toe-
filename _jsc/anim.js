class Ganim extends Gcore{

	borderDraw(objName) {
		let board = this._$(objName)
		
		for (let lp=0; lp<2; lp++) {
			board[lp+0].style = 'transition: 1.3s; height: 96%;'
			board[lp+2].style = 'transition: 1.8s; width: 96%;'
		}
	}
	
    pressedCell(objName,id) {
	    let cell = this._$(objName)[id];
		cell.style = 'animation: press 0.3s linear 1'
	}
	
	
    playSound = (objName) => this._$(objName)[0].play();
	
	vitory(objName,type) {
	    let board = this._$(objName);
		let anime = 'animation: blinker 1s linear infinite';
		
        if (type !== 'NaN') {
	        for (let lp=0; lp<board.length; lp++) { 
		        board[lp].style.color = '#cecece'
		    }
		   
		    board[Number(type.charAt(0))].style = anime;
		    board[Number(type.charAt(1))].style = anime;
		    board[Number(type.charAt(2))].style = anime;
	   }
	}
	
	clearBoard(objName) {
		let board = this._$(objName);
		
		board.forEach((a,b,c)=> { 
			c[b].innerText = '\n'; c[b].style = ''}
		);
	}
	
	
	/*
	sleep(ms) {
	    return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	async writeText(text,objName,speed) {
	    let obj = this._$(objName)[0];
	    obj.innerHTML = '';
	    
	    for (let lp=0; lp<text.length; lp++){
	       await this.sleep(speed)
	       obj.innerHTML += text.charAt(lp);
	    }
	}
	*/
}