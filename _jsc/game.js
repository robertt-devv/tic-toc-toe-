const core = new Gcore(); // class core, contain all game functions
const anim = new Ganim(); // class anim, contain all anime functions


let iCanPlay = true; // if play X 
let playTurn = 'X';  // first to play 
let pts_o = 0;
let pts_x = 20;
    
window.onload = ()=> anim.borderDraw('.lines');

function check_vitory() {
     let play_x = core.haveWinner('X');
     let play_o = core.haveWinner('O');
    	
     if (!isNaN(play_o)){ anim.vitory('.-box',play_o); iCanPlay = false; pts_o +=1; }
     if (!isNaN(play_x)){ anim.vitory('.-box',play_x); iCanPlay = false; pts_x +=1; }
        
     return 0;
}
    
    
function mark_cell(id) {
    if ( iCanPlay == false ){ return 1; }
    	
    if ( playTurn == 'X' ) {
    if (!core.markHome('.-box',playTurn,id)) {
    		anim.pressedCell('.-box',id);
    		anim.playSound('#markHome'); playTurn = 'O';
    }}
        
    if (!core.markHome('.-box','O', core.cpuPlay())) playTurn = 'X'; 
    
    return 0;
}

function update_points(){
	let ptsX = core._$('#pts_1')[0];
	let ptsO = core._$('#pts_1')[0];
	
	ptsX.innerText = `${pts_x} pontos`;
	ptsO.innerText = `${pts_o} pontos`;
}
    

function clean_board() {
    core.cleanBoard();
    anim.clearBoard('.-box');
    iCanPlay = true;
    playTurn = 'X';
}
    
document.onclick = ()=> {
	check_vitory(); update_points();
}