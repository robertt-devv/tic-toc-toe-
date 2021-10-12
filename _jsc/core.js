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


    cleanBoard() {
       this.game_boardA.forEach( (a,b,c) => c[b] = 0);
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
    
    
    _search(player,length,joker){
    	let gm_bo = this.game_boardA;
    	
    	let housesFound = 0; // oculipated houses
    	let arrayIndice = 0; // array id
    	let housesJoker = 0; // home joker 
    	
    	const victs= [  '012', '345', '678', '036',
    	                '147', '258', '048', '246'  ];
    	               
    	for (let x=0; x<8; x++) {
    	for (let y=0; y<3; y++) {
    		arrayIndice = Number( victs[x][y] );
    		housesFound += ( gm_bo [arrayIndice] == player ) ? 1 : 0;
    		housesJoker += ( gm_bo [arrayIndice] == joker  ) ? 1 : 0;
    		
    		if ( housesFound == length && housesJoker >= 1 ) { 
    			return victs[x];
    		}
    		
        } housesFound = 0; housesJoker =0; }
        
    	return false;
    }
    
    
    fakeIaCode(){
    	
    	let deadlock = [ '048','147','246',
    	                 '345','480','543',
    	                 '642','741','840' ];
    	                 
    	let learned  = [ '042','147','206',
    	                 '345','453','508',
    	                 '608','748','802' ];
    	
    	let board = this.game_boardA;
    	
    	for (let x=0; x<9; x++){
    	for (let y=1; y<2; y++){
    		
    		let _nb1 = Number(deadlock[x][0]);
    	    let _nb2 = Number(deadlock[x][y]);
    	    
    	    if ( board[_nb1] == 1 && board[_nb2] == 0 ){
    	    	//console.log(`deadlock: ${board[x]} :${deadlock[x][y]}`)
    	    	return Number(deadlock[x][y]);
    	    	
    	    }
    	}}
    	
    	for (let x=0; x<9; x++){
    	for (let y=1; y<3; y++){
    		
    		let _nb1 = Number(learned[x][0]);
    	    let _nb2 = Number(learned[x][y]);
    	    
    	    if ( board[_nb1] == 2 && board[_nb2] == 0 ){
    	    	//console.log(`learned: ${board[x]} :${learned[x][y]}`)
    	    	return Number(learned[x][y]);
    	    	
    	    }
    	}}
    }

    
    cpuPlay() {
        let brd = this.game_boardA;
        let Xwn = this._search(1,2,0);
        let Own = this._search(2,2,0);
        let aux = false;
        
       for (let lp=0; lp<3; lp++) {
       	    if ( Own != false && brd[Own.charAt(lp)] == 0){ return Own.charAt(lp)}
       		if ( Xwn != false && brd[Xwn.charAt(lp)] == 0){ return Xwn.charAt(lp)}
       }
    
       return this.fakeIaCode();
    }

    haveWinner(player) {
        let playID = (player == 'X') ? 1 : 2;
        let indices = this._search(playID,3,playID);
        if (indices != false ){ return indices; }
        return NaN;
    }


}