var victoryTexts = new Array();
    victoryTexts.push('Muito bem, so nao e melhor doque\'eu');
    victoryTexts.push('Roubando assim!, todo mundo ganha ne!?');
    victoryTexts.push('Foi sorte, vamos outra partida');
    victoryTexts.push('Nao acredito que perdi para vc! ');
    victoryTexts.push('Nao sei oque vc ta fazendo, mas ta roubando de alguma forma');
    victoryTexts.push('Idiota, filha da cunha. Vamos jogar serio');
    victoryTexts.push('Ja chega, nao jogo com ladrao, desisto');
    victoryTexts.push('Meu Deus!, como vc esta fazendo isso');
    victoryTexts.push('Se eu tivesse pernas e braços, de enchia de porrada');
    
    

window.onload = function() {
    anim.borderDraw('.lines'); // animation X and Y lines 
    anim.pressHome('.-box'); // animation press home
}

var core = new Gcore();
var anim = new Ganim();
    
var borderButtons = core._$('.-box');
var turnPlayer = 'X';
var typeGame = 1;
var iCanPlay = true;
var playerOPoints = 0;
var playerXPoints = 0;


document.addEventListener('click',()=>{
    let playerX = core.haveWinner('X','n');
    let playerO = core.haveWinner('O','n');
 
    if (!isNaN(playerO) && iCanPlay == true){
       anim.vitory('.-box',playerO); iCanPlay=false
        playerOPoints +=1;
        core._$('#pts_1')[0].innerText = `${playerOPoints} Pontos`;
    } 
            
    if (!isNaN(playerX) && iCanPlay == true){
        anim.vitory('.-box',playerX); iCanPlay=false
        playerXPoints += 1;
        core._$('#pts_2')[0].innerText = `${playerXPoints} Pontos`;
        anim.writeText(victoryTexts[Math.round(Math.random()*8)],'#msgText',50)
    }
    
});
    
    
function mark_home(lp){
    if ( iCanPlay != true ) return 1;
    
    if ( typeGame == 2 ){
        if (core.markHome('.-box',turnPlayer,lp) == 0 ){
            anim.playSound('#markHome');
            anim.pressHome('.-box');
            turnPlayer = (turnPlayer == 'X') ? 'O' : 'X';
        }
    }else{
        if (turnPlayer === 'X'){
            let status = core.markHome('.-box','X',lp);
            anim.pressHome('.-box');
            if (status == 0) turnPlayer = 'O';
        }
        core.markHome('.-box','O',core.cpuPlay());
        anim.pressHome('.-box');
        turnPlayer = 'X';
    }
}
    
function clean_board(){
    core.cleanBoard('.-box');
    iCanPlay = true;
}
