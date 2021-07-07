
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");

let nam = prompt("What is your Name?")

player = {
    name: nam,
    chips: 144
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    }
    else if (randomCard === 1) {
        return 11
    }
    else {
        return randomCard
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    // cardEl.textContent = "Card: " + cards[0] + " - " + cards[1];
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum;
    if (sum <= 20) {
        message = 'Do you want to draw a new card';
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true
    }
    else {
        message = "You're got out of the game";
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackjack === false){
        let cardVariable = getRandomCard()
    cards.push(cardVariable)
    sum += cardVariable;
        renderGame();
    }
    
}


