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
    	let board = this.game_boardA;
    	if ( board[4] == 1 && board[2] == 0 ) return 2;
    	if ( board[0] == 1 && board[2] == 1 && board[4] == 0 ) return 4;
    	if ( board[6] == 1 || board[8] == 1 && board[4] == 0 ) return 4;
    	if ( board[1] == 1 && board[7] == 0 ) return 7;
    	if ( board[7] == 1 && board[1] == 0 ) return 1;
    	if ( board[3] == 1 && board[5] == 0 ) return 5;
    	if ( board[5] == 1 && board[3] == 0 ) return 3;
    	
    	if (board[4] == 2 && board[3] == 0 ) return 3;
    	if (board[4] == 2 && board[5] == 0 ) return 5;
    	
    }

    
    cpuPlay() {
        let brd = this.game_boardA;
        let Xwn = this._search(1,2,0);
        let Own = this._search(2,2,0);
        let aux = false;
        
       for (let lp=0; lp<3; lp++){
       		if ( Xwn != false && brd[Xwn.charAt(lp)] == 0){ return Xwn.charAt(lp)}
        	if ( Own != false && brd[Own.charAt(lp)] == 0){ return Own.charAt(lp)}
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