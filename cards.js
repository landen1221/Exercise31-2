const shuffle = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let deckID = ""
let number = 0

axios.get(shuffle)
    .then(res => deckID = res.data.deck_id)

async function newCard() {
    if (number < 52) {
        
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        let cardNum = res.data.cards[0].value;
        let cardSuit = res.data.cards[0].suit;
        let imageValue = cardNum + cardSuit[0];
        let evenOrOdd = function() {
            if (number % 2 == 0) {
                return 'even'
            } else {
                return 'odd'
            }
        }

        appendImage(imageValue, evenOrOdd())
        number ++
    } else {
        alert("End of Deck - Reshuffling now");
        location.reload();
    }
}

function appendImage(card, evenOrOdd) {
    let imagesLocation = document.getElementById('image-location');
    let newImage = document.createElement('img');
    newImage.src = `images/${card}.png`;

    if (evenOrOdd == 'even') {
        newImage.style.transform = `rotate(20deg)`;
    } else {
        newImage.style.transform = `rotate(-20deg)`;
    } 
    imagesLocation.appendChild(newImage)
}


