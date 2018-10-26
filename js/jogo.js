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

//Variavel pra saber quanta vezes jogou
var Times_Played = 0;

// Funcao bota imagem x ou imagem o na div que foi clicada
function jogada(id){
    var col, row;
    var divJogada = document.getElementById(id);


    if (Times_Played > 0){
        i = 1;
        Times_Played = 0;
    }


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
        player_one.push(id);

    }
    if(i==-1 && matriz[row][col]==0){
        divJogada.innerHTML="<img src='../img/o.png'>";
        matriz[row][col] = 'o';
        i *= -1;
        player_two.push(id);

    }

    console.log(player_one);
    console.log(player_two);

}

// Confere se o jogo chegou ao fim
function confere(id){    

    player_one.sort();
    player_two.sort();


    if(verificaVitoria(player_one)){
        alert("X ganhou!");
        reset_button();
    }
    if(verificaVitoria(player_two)){
        alert("O ganhou!");
        reset_button();
    }
    // if que verifica se o jogo deu velha
    if(player_one.length + player_two.length == 9){
        alert("Deu Velha!");
        reset_button();
    }
}

// Funcao que verifica se algum jogador ganhou
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
               }
               if(counter == 3){
                   return(true);
               }
            }
        }
        counter=0;
    }
    return(false);
}

// Funcao que impede que o mesmo id seja posto mais de uma vez no array player
function verificaId(id, player){
    for(var i=0; i < player.length; i++){
        if(id == player[i]){
            return(false);
        }
    }
    return(true);
}


function reset_button() {
     var Tic_Tac_Toe = [
         ['a1', 'a2', 'a3'],
         ['b1', 'b2', 'b3'],
         ['c1', 'c2', 'c3']
     ];

     var id_T;


     for(var i = 0; i < 3; i++) {
         for(var j = 0; j < 3; j++) {

             id_T = Tic_Tac_Toe[i][j];
             document.getElementById(id_T).innerHTML=" ";
         }
     }

     player_one = [];
     player_two = [];

     matriz = [
         [0,0,0],
         [0,0,0],
         [0,0,0]
     ];

     Times_Played++;

}

function Verify_Repeat_Numbers(player_one, player_two) {

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if(matriz[i][j] == 'x' || matriz[i][j] == 'o'){
                return false;
            }
        }
    }

    return true;


}
