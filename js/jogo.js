// Matriz que representa o jogo
var matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

//jogadas de cada player
var player_one = [];
var player_two = [];

//se player one venceu ou nao
var flag_player = false;

// Variavel que define quem jogada, o ou x
var i=1;

// Funcao bota imagem x ou imagem o na div que foi clicada
function jogada(id){
    var col, row;
    var divJogada = document.getElementById(id);

    if(id[0] == 'a'){
        row = 0;
    }
    if(id[0] == 'b'){
        row = 1;
    }
    if(id[0] == 'c'){
        row = 2;
    }
    col = (id[1]-1);

    if(i==1 && matriz[row][col]==0){
        divJogada.innerHTML="<img src='../img/x.png'>";
        matriz[row][col] = 'x';
        i *= -1;
    }
    if(i==-1 && matriz[row][col]==0){
        divJogada.innerHTML="<img src='../img/o.png'>";
        matriz[row][col] = 'o';
        i *= -1;
    }
}

function confere(id){

    var flag_player_one;
    var flag_player_two;

    console.log(matriz);
    var row;
    var col;
    console.log(id);

    if(i == -1){
        player_one.push(id);
    }else{
        player_two.push(id);
    }
    console.log(player_one);
    console.log(player_two);

    player_one.sort();
    player_two.sort();

    flag_player_one = verificaVitoria(player_one);
    flag_player_two = verificaVitoria(player_two);

    if(flag_player_one==true){
        alert("X ganhou!")
    }

    if(flag_player_two==true){
        alert("O ganhou!")
    }
}

function verificaVitoria(player){
    var counter=0;

    var Win_Combinations = [
        ['a1', 'a2', 'a3'],
        ['b1', 'b2', 'b3'],
        ['c1', 'c2', 'c3'],
        ['a1', 'b1', 'c1'],
        ['a2', 'b2', 'c2'],
        ['a3', 'b3', 'c3'],
        ['a1', 'b2', 'c3'],
        ['a3', 'b2', 'c1']
    ];

    for(var i=0; i < 8; i++){
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < player.length; k++) {
               if(player[k] == Win_Combinations[i][j]){
                   counter++;
                   console.log(counter);
               }
               if(counter == 3){
                   return(true);
                   break;
               }
            }
        }
        counter=0;
    }

    return(false);
}
