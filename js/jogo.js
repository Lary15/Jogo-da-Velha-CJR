// Matriz que representa o jogo
var matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]; 

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

function confere(){
    console.log(matriz);
}
