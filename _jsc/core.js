class Gcore {
    game_boardA = new Array(9).fill(0)

    constructor() {
        this.last_player = '1'; // 1:X,  2:O
        this.user_symbol = 'X'
        this.game_boardA = new Array(9).fill(0)
    }

    _$(objName) {
        return document.querySelectorAll(objName)
    }

    arrayGroup(src, groups) {
        let array = new Array()
        let _src = src.slice();
        let pairs = src.length / groups

        while (pairs > 0) {
            array.push(_src.splice(0, groups).join(''));
            pairs--;
        }
        return array
    }

    cleanBoard(objName) {
        let obj = this._$(objName);

        obj.forEach((va, id, ve) => {
            ve[id].innerText = '\n';
            this.game_boardA[id] = 0;
        });
        return 0;
    }


    markHome(homeId, player, position) {
        let _player = (player == 'X') ? 1 : 2;
        let nameObj = this._$(homeId)[position];

        if (this.game_boardA[position] == 0) {
            this.game_boardA[position] = _player;
            nameObj.innerText = (_player == 1) ? 'X' : 'O';
            return 0;
        }

        return 1;
    }
    
    _search(symbol,length){
    	let pBoard  = this.game_boardA;
    	let counter = 0;
    	let nIndice = 0;
    	const victS = ['012', '345', '678', '036',
    	               '147', '258', '048', '246']
    	               
    	for (let x=0; x<8; x++){
    	for (let y=0; y<3; y++)
    	{
    		nIndice = Number(victS[x][y]);
    		counter += ( pBoard[nIndice] == symbol ) ? 1 : 0;
    		if ( counter == 3 ) return victS[x];
    		
        } counter = 0; }
        
    	return 'NaN';
    }

    fakeIACode() {
        let aux = ['012','345','678','048',
                   '036','147','258','246']
                   
        let count_a = 0; // Play X
        let count_b = 0; // Play O
        let jokerId = -1;
        
        for (let x=0; x<8; x++){
        	for (let y=0; y<3; y++){
        		if( this.game_boardA[Number(aux[x][y])] === 1 ){count_a++;}
        		if( this.game_boardA[Number(aux[x][y])] === 2 ){count_b++;}
            }
            
            if (count_a === 0 && count_b == 1 ){jokerId = x; break; }
            count_a = 0; count_b = 0;
        }
        
        if (jokerId > -1 ) {
        	let n_ind = aux[jokerId];
            if (this.game_boardA[Number(n_ind.charAt(0))] == 0 ) {return n_ind.charAt(0);}
            if (this.game_boardA[Number(n_ind.charAt(1))] == 0 ) {return n_ind.charAt(1);}
            if (this.game_boardA[Number(n_ind.charAt(2))] == 0 ) {return n_ind.charAt(2);}
        }
        
        count_a = 0;
        jokerId = -1;
        
        for (let x = 0; x<8; x++){
        	for (let y = 0; y<3; y++){
        		if( this.game_boardA[Number(aux[x][y])] === 1 ){count_a++;}
        	}
        	
        	if ( count_a == 1 ){ jokerId = x; break; }  
        	count_a = 0;
        }
        
        if (jokerId > -1 ){
        	for (let a=0; a<3; a++){
        		if (this.game_boardA[aux[jokerId][a]] == 0 ){
        			return aux[jokerId][a];
        		}
        	}
        }
        
        
        
    }

    cpuPlay() {
        let brd = this.game_boardA;
        let Xwn = this._search(1,2);
        let Own = this._search(2,2);
        
        if ( !Xwn == 'NaN' || !Own == 'NaN' ) {
        	
        }
        
    }

    haveWinner(player) {
        let playID = (player == 'X') ? 1 : 2;
        let indices = this._search(playID,3);
        if (indices !== 'NaN' ){ return indices; }
        return NaN;
    }


}