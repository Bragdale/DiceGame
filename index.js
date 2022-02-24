const btn = document.getElementById("botao");
btn.addEventListener("click", play);
function renova() {
    window.location.reload();
}

function play() {
    var jogada1 = (Math.floor(Math.random()*6) + 1);
    var jogada2 = (Math.floor(Math.random()*6) + 1);

    var dices = [];

    // pegando todos os elementos da classe "dice" (no caso só 2 dados) e colocando dentro do array dices
    for (let d = 0; d < document.getElementsByClassName("dice").length; d++) {
        const dice = document.getElementsByClassName("dice")[d];
        dices.push(dice);
    }

    // pegando os dices do jogador 1 e 2 (índice 0 e 1), que é uma tag <image>
    // e trocando o src dela pra ser o equivalente ao da jogada
    dices[0].src = `images/d${jogada1}.png`;
    dices[1].src = `images/d${jogada2}.png`;

    // trocando o innerHTML da div Result pra ter os textinhos
    var resultDiv = document.getElementById("Result");
    if (jogada1 > jogada2) {
        resultDiv.innerHTML = "Player1 WINS!";
    }
    else if (jogada1 < jogada2) {
        resultDiv.innerHTML = "Winner is Player2!";
    } else {
        resultDiv.innerHTML = "It's a tie!";
    }
}
