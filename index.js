const btn = document.getElementById("botao");
btn.addEventListener("click", renova);
function renova() {
    window.location.reload();
}

function play() {
var jogada1 = (Math.floor(Math.random()*6) + 1);
var jogada2 = (Math.floor(Math.random()*6) + 1);

var dice1 = "d"+ jogada1;
document.querySelector("#"+dice1).classList.toggle("play1show");
    
var dice2 = "x"+ jogada2;
document.querySelector("#"+dice2).classList.toggle("play2show");
    
    if (jogada1 > jogada2) {
        document.write("Player1 WINS!");
    }
    else if (jogada1 < jogada2) {
        document.write("Winner is Player2!");
    } else {
        document.write("It's a tie!");
    }
}

play();
