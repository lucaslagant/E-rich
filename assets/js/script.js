// BLACK JACK
let dealer = 0;
let player = 0;
let dealeracecount = 0;
let playeracecount = 0;
let hidden;
let deck;
let canHit = true;

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}
function buildDeck() {
    let values = ["A", "2", "3", "4", "5","6","7","8","9","10","J","Q","K"];
    let types = ["C", "D" ,"H","S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
    // console.log(deck);
}
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    // console.log(deck);
}
function startGame() {
    hidden = deck.pop();
    dealer += getValue(hidden);
    dealeracecount += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealer);
    while (dealer < 17) {
        // <img src="./cards/4-C.png">
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "/assets/img/" + card + ".png";
        dealer += getValue(card);
        dealeracecount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    console.log(dealer);
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "/assets/img/" + card + ".png";
        player += getValue(card);
        playeracecount += checkAce(card);
        document.getElementById("player-cards").append(cardImg);        
    }
    console.log(player);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);
}

function hit() {
    if (!canHit) {
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "/assets/img/" + card + ".png";
    player += getValue(card);
    playeracecount += checkAce(card);
    document.getElementById("player-cards").append(cardImg);
    if (reduceAce(player, playeracecount) > 21) {
        canHit = false;
    }
}
function stay() {
    dealer = reduceAce(dealer, dealeracecount);
    player = reduceAce(player, playeracecount);

    canHit = false;
    document.getElementById("hidden").src = "/assets/img/"+ hidden + ".png";
    let message ="";
    if (player > 21) {
        message = "Perdu !";
    }else if (dealer > 21) {
        message = "Tu remportes la main !";
    }
    else if (player == dealer) {
        message = "Match nul !";
    }
    else if (player > dealer) {
        message = "Tu remportes la main !";
    }
    else if (player < dealer) {
        message = "Perdu !";

    }
    document.getElementById("dealer").innerText = dealer;
    document.getElementById("player").innerText = player;
    document.getElementById("result").innerText = message;
}

function getValue(card) {
    let data = card.split("-")
    let value = data[0];

    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}
function reduceAce(player, playeracecount) {
    while (player > 21 && playeracecount > 0 ) {
        player -= 10;
        playeracecount -=1;
    }
    return player;
}

// ROULETTE 