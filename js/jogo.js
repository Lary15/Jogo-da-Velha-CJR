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

// Confere se o jogo chegou ao fim
function confere(id){
    
    if(i == -1){
        if(verificaId(id,player_one)){
            player_one.push(id);
        }
    }else{
        if(verificaId(id,player_two)){
            player_two.push(id);
        }
    }

    player_one.sort();
    player_two.sort();


    if(verificaVitoria(player_one)){
        alert("X ganhou!");
    }
    if(verificaVitoria(player_two)){
        alert("O ganhou!");
    }
    // if que verifica se o jogo deu velha
    if(player_one.length + player_two.length == 9){
        alert("Deu Velha!");
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
