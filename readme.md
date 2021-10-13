- Este é um projeto muito saturado nesse meio. Sei que há trocentos projetos iguais, melhores e inferiores, sei também que não é algo relativamente difícil de se codar. Para a maioria dos devs que estão iniciando, este é um job bobo, algo que não agrega muito ao conhecimento pessoal. Mas confesso que gostei de codar, aprendi ferramentas,funções e conceitos novos que não sabia sobre o  **JavaScript** .  Me diverti, fiquei frustado e quebrei muito a cabeça em funções onde eu não tinha conhecimento sulficiente para codar. 

![image](content://_res/rd_im_01.jpg)

-------

- Entretanto, com toda a dor de cabeça e frustações, tenho orgulho de algumas funções que me deram um pouco de dor de cabeça, e quero explicar aqui seu funcionamento ao ter que documentalas, como disse: tenho orgulho delas, sei que provavelmente ninguém vai ler isso, mas se vc que esta vendo isso, for bem mais experiente que eu, não ache que sou louco por ficar animado com funções que provavelmente vc faria por cabeça.  <br/><br/>


1. ####    `_search(player,length,joker)`

- Essa função em termos hierarquicos, é a 2° (segunda) mais importante para o funcionamento do jogo. Com ela posso "diminuir" a quantidade física de ifs no códico, que são usados para checar vitórias, derrotas e outras coisas.


![image](content://_res/rd_im_02.jpg)

- Apesar de qualquer um poder entender seu funcionamento (Em mimha defesa tenho leves aspectos de um portador de T.O.C ), Para quem está iniciando ("como eu"). vou explica como ela funciona, e poque não usala em jobs reais que lhe foram solicitados.

- Veja a variável `gm_bo` ela é responsavel por referenciar o tabulerio (que é um array simples de 9 posições) assim evito digitar o operador `this` toda vez que precisar acessar algum índice do tabuleiro. Os parametros `Player, length, joker ` são usadas para controlar que tipo de verificação será feita, eles que tornam a função multi-uso. 

- temos também 3 variaveis de controle interno, `housesFound, arrayIndice, housesJoker `, essas váriaveis trabalham em paralelo aos argumentos passados, por enquanto é só isso que vc precisa saber.

-  Logo abaixo temos um array `victs[8]` , onde está salvo os índices onde há vitórias no tabuleiro `gm_bo`, nesse caso `let id_v  = victs[0] --012 ` me retornam os índices de vitória da primeira posição orizontal em forma de string, que são `gm_bo[0]=1, gm_bo[1] = 1 ,gm_bo [2] = 1`, como vc pode ver na imagem abaixo, essas posições são uma vitória. </br> </br>**Obs:** dentro do tabuleiro `gm_bo` tenho os valores ( 0,1,2 ) onde **0** (zero) representa uma posição **livre**  (joker). O **1** (um), representa o jogador do símbolo **X**, e o número **2** representa o jogador **O**. 
 
![image](content://_res/rm_im_03.jpg)

- a gora sem mais enrolação vou te explicar como ela funciona, e o porquer dela ser muilt-uso, eo  porque de'la não ser indicada para usos em problemas reais. olha o `for ( let x=0; x<8; x++ )`, esse for é usado para "pegar" os pares de 3 números do `array victs[x] `,  já o segundo `for (  let y=0; y<3; y++ )` é para percorrer os pares de 3 números retornados por  `victs[x]`,.  Na primeira interação nos laços for, terei algo como `victs[x][y] : 0`,  esse valor é salvo em `arrayIndice = 0` que logo a baixo é usado como valor índice em `gm_bo[arrayIndice]`, se por acaso nessa posição contiver o valor igual a `player` que é equivalente à **X ou 1** minha variável de controle `housesFound` será incrementada dentro do segundo for. Assim `housesFound`  terá  trés valores que são estados do jogo. **1** reprensenta nada, **2** representa possível vitória e **3** que reprensenta a vitória. Esses estados são controlados pelo parametro `length` nos testes de condição dentro de segundo for. </br></br>
- há também a variável `housesJoker` que é um dos pilares da função, sem essa variável todo o códico não passaria de dados sem sentido, e ou a penas o estado **3** funcionaria corretamente.  Essa variável serve para controlar  2 estados do jogo de forma que não haja conflitos e error lógicos, um exemplo simples seria testar os seguintes dados.  [ x ][ x ] [O ], sem a variavel `housesJoker` a função `_search(1,2,null)` retornaria `'012'`, mas veja que há um erro, eu não posso mais ganhar nessas posições. Pois a posição 2 está oculpada por **O**. Então Para contornar isso devo adicionar um ou mais elementos `Joker`, que nesse exemplo seria um valor vazio, que é representado por **0 (zero)** , com `housesJoker` ativo essa mesma chamada me retornaria `false`. Pois preciso de 2 posições com **X**, e um ou mais caracter joker **0 / vazia**.  