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

    fakeIACode() {
        let pBoard = this.arrayGroup(this.game_boardA, 3);

    }

    cpuPlay() {
        let pBoard = this.game_boardA;
        let $1victory = this.haveWinner('X', 'y');
        let $2victory = this.haveWinner('O', 'y');
        try {
            for (let lp = 0; lp < 3; lp++) {
                if (Number(pBoard[$2victory.charAt(lp)]) == 0) { return Number($2victory.charAt(lp)); }
                if (Number(pBoard[$1victory.charAt(lp)]) == 0) { return Number($1victory.charAt(lp)); }
            }
        } catch (errr) {
            setTimeout(() => { this.fakeIACode() }, 2000)
            //return this.fakeIACode()
            console.log('erro, haveWine retornou NaN')
        }
    }

    haveWinner(player, prewin) {
        let pBoard = this.game_boardA;

        let playID = (player == 'X') ? 1 : 2;
        let preWin = (prewin == 'y') ? 1 : 0; /* pre vitoria */

        const victS = ['012', '345', '678', '036',
                         '147', '258', '048', '246'] // indices de vitoria

        let counter = 0; /* conta quantos, (1 || 2) ,  (X || O)  */
        let chJoker = 0; /* Caracter coringa (Zero), ver linha 7 */

        for (let x = 0; x < 8; x++) { //for1
            for (let y = 0; y < 3; y++) { //for2  
                /*board [R,1,2,3,4..] victS[0][1] = 0, board[victS] = R */
                let gbIdVal = Number(pBoard[victS[x][y]])
                counter += (gbIdVal == playID) ? 1 : 0;
                chJoker += (gbIdVal == 0) ? 1 : 0;
            } //for2
            if (preWin == 1 && chJoker == 1) { return victS[x]; } /* board -> 110 */
            if (preWin == 0 && counter == 3) { return victS[x]; } /* board -> 111 */

            counter = 0;
            chJoker = 0;
        } //for1

        return NaN;
    }


}