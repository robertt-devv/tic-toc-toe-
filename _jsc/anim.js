class Ganim extends Gcore{

	borderDraw(objName) {
		let board = this._$(objName)
		
		for (let lp=0; lp<2; lp++){
			board[lp].style  = 'transition: 1s; height: 96%;'
			board[lp+2].style = 'transition: .5s; width: 96%;'
		}
	}
	
	pressHome(objName) {
		let buttons = this._$(objName);
		
		for (let lp=0; lp<buttons.length; lp++){
			buttons[lp].addEventListener('click',()=>{ 
				buttons[lp].style = 'animation: press 0.2s linear 1; color:#000'
			})
		}
	}
	
	showContainer(objName,size){
	    let obj = this._$(objName)[0];
	    obj.style.left = size+'%';
	    obj.style.transition = 'linear 1s';
	}
	
	playSound(objName){
	    this._$(objName)[0].play();
	}
	
	vitory(objName,type){
	    let board = this._$(objName);
		let anime = 'color: #00f500; animation: blinker 1s linear infinite';
		
        if (type !== 'NaN') {
	        for (let lp=0; lp<board.length; lp++) { 
		        board[lp].style.color = 'rgba(255,0,0,0.3)'
		    }
		   
		    board[Number(type.charAt(0))].style = anime;
		    board[Number(type.charAt(1))].style = anime;
		    board[Number(type.charAt(2))].style = anime;
	   }
	}
	
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
	
}