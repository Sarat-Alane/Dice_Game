function roll() {

let defaultDice = Array.from(document.getElementsByClassName("default"));
defaultDice.forEach(Dice => {
    Dice.style.display = "none";
});

let dicecontainers = Array.from(document.getElementsByClassName("dice-container"));
dicecontainers.forEach(Container => {
    Container.style.display = "none";
});

let player1score = Math.floor((Math.random() * 6) + 1);

let player2score = Math.floor((Math.random() *6 ) + 1);


switch (player1score) {
    case 1:
        document.querySelector("#container-11").style.display = "block";
        break;
    case 2:
        document.querySelector("#container-12").style.display = "block";
        break;
    case 3:
        document.querySelector("#container-13").style.display = "block";
        break;
    case 4:
        document.querySelector("#container-14").style.display = "block";
        break;
    case 5:
        document.querySelector("#container-15").style.display = "block";
        break;
    case 6:
        document.querySelector("#container-16").style.display = "block";
        break;
}

switch(player2score) {
    case 1:
        document.querySelector("#container-21").style.display = "block";
        break;
    case 2:
        document.querySelector("#container-22").style.display = "block";
        break;
    case 3:
        document.querySelector("#container-23").style.display = "block";
        break;
    case 4:
        document.querySelector("#container-24").style.display = "block";
        break;
    case 5:
        document.querySelector("#container-25").style.display = "block";
        break;
    case 6:
        document.querySelector("#container-26").style.display = "block";
        break;
}

if(player1score > player2score) {
    document.getElementById("Winner-text").innerText = "Player 1 Wins!!!"
}
else if (player1score < player2score){
    document.getElementById("Winner-text").innerText = "Player 2 Wins!!!"
}
else {
    document.getElementById("Winner-text").innerText = "Draw"
}
// console.log("hello",player1score,player2score)
}