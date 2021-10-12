- Este é um projeto muito saturado nesse meio. Sei que há trocentos projetos iguais, melhores e inferiores, sei também que não é algo relativamente difícil de se codar. Para a maioria dos devs que estão iniciando, este é um job bobo, algo que não agrega muito ao conhecimento pessoal. Mas confesso que gostei de codar, aprendi ferramentas,funções e conceitos novos que não sabia sobre o  **JavaScript** .  Me diverti, fiquei frustado e quebrei muito a cabeça em funções onde eu não tinha conhecimento sulficiente para codar. 

![image](content://media/external/images/media/20463)

-------

- Entretanto, com toda a dor de cabeça e frustações, tenho orgulho de algumas funções que me deram um pouco de dor de cabeça, e quero explicar aqui seu funcionamento ao ter que documentalas, como disse: tenho orgulho delas, sei que provavelmente ninguém vai ler isso, mas se vc que esta vendo isso, for bem mais experiente que eu, não ache que sou louco por ficar animado com funções que provavelmente vc faria por cabeça.  <br/><br/>


1. ####    `_search(player,length,joker)`

- Essa função em termos hierarquicos, é a 2° (segunda) mais importante para o funcionamento do jogo. Com ela posso "diminuir" a quantidade física de ifs no códico, que são usados para checar vitórias, derrotas e outras coisas.


![image](content://media/external/images/media/20465)

- Apesar de qualquer um poder entender seu funcionamento (Em mimha defesa tenho leves aspectos de um portador de T.O.C ), Para quem está iniciando ("como eu"). vou explica como ela funciona, e poque não usala em jobs reais que lhe foram solicitados.

- Veja a variável `gm_bo` ela é responsavel por referenciar o tabulerio (que é um array simples de 9 posições) assim evito digitar o operador `this` toda vez que precisar acessar algum índice do tabuleiro. Os parametros `Player, length, joker ` são usadas para controlar que tipo de verificação será feita, eles que tornam a função multi-uso. 

- temos também 3 variaveis de controle interno, `housesFound, arrayIndice, housesJoker `, essas váriaveis trabalham em paralelo aos argumentos passados, por enquanto é só isso que vc precisa saber.

-  Logo abaixo temos um array `victs[8]` , onde está salvo os índices onde há vitórias no tabuleiro `gm_bo`, nesse caso `let id_v  = victs[0] --012 ` me retornam os índices de vitória da primeira posição orizontal em forma de string, que são `gm_bo[0]=1, gm_bo[1] = 1 ,gm_bo [2] = 1`, como vc pode ver na imagem abaixo, essas posições são uma vitória. </br> </br>**Obs:** dentro do tabuleiro `gm_bo` tenho os valores ( 0,1,2 ) onde **0** (zero) representa uma posição **livre**  (joker). O **1** (um), representa o jogador do símbolo **X**, e o número **2** representa o jogador **O**. 
 
![image](content://media/external/images/media/20467)

- a gora sem mais enrolação vou te explicar como ela funciona, e o porquer dela ser muilt-uso, eo  porque de'la não ser indicada para usos em problemas reais. perceba que o 1° for vai de  0 à 8, esse for é usado para "pegar" os pares de 3 números do `array victs[x] : 012, victs[1] :345, victs[2] : 678 etc.. ` , já no segundo for eu o uso para pegar um único número dos pares de 3.  `victs[1][2] : 5 `, e o uso como indice em `gm_bo[5]` para checar oque há lá com base no parametro `player`, se for um **1** logo sei que tem o símbolo **X** ,  então fasso `housesFound +=1` .  Como o meu 2° for vai de 0 à 3, essa condição é testada em todos os índices da posição do 1° for.  `x=1 , if (victs[1][0] .. victs[1][1] .. victs[1][2]) ` , agora perceba que tenho a quantidade de **X** encontrados no tabuleiro de forma organizada graças ao 1° for eo `victs[]` agora só preciso saber oque fazer com essa informação, Mas graças ao parametro `length` eu posso retornar os indices com base na quantidade de `players` encontrados e quem invocou a função 'se rebola' com as info.. </br></br>

-  **Exemplo:** let data = _search(1,2,0) , chamando-a desse modo posso procurar por possíveis vitórias do jogador **X**, caso aja chance de vitória na primeira linha horizontal, data vai ter os sequintes dados: '012' 