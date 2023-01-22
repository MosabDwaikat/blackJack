let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let newBtn =document.getElementById("new-btn")
let startBtn =document.getElementById("start-btn")
let playerEl = document.getElementById("player-el")

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "mosab",
    chips: 0
}

playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    hasBlackJack = false
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cards.length=0
    cards.push(card1)
    cards.push(card2)
    update()
}

function newCard(){
    let newCard = getRandomCard()
    cards.push(newCard)
    update()
    
    
}


function update() {
    
    sum = 0
    cards.forEach(element => sum += element);
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        player.chips+=20
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

    cardsEl.textContent = "Cards: "
    cards.forEach(element => {
        cardsEl.textContent += element + "\t"
    });

    playerEl.textContent = player.name + ": $" + player.chips

    if (isAlive && !hasBlackJack){
        newBtn.hidden=false
    }
    else  {  
        newBtn.hidden=true
    }

    


}
function getRandomCard(){
    let card = Math.floor(Math.random()*13)+1
    if (card === 1)
        return 11
    if (card > 10)
        return 10    
    return card

}