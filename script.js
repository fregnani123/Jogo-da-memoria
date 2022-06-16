const FRONT = 'card_front'
const BACK = 'card_back'
const CARD = 'card'
const ICON ='icon'




startGame();

function startGame(){

    initializeCards(game.createCardsFromTechs());

}

function initializeCards(cards){
    let gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    game.cards.forEach(card => {

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement);

    })
}

function createCardContent(card, cardElement){
 
createCardFace (FRONT,card,cardElement);
createCardFace (BACK,card,cardElement);

}

function createCardFace (face, card, element){
    let cardElemneteFace = document.createElement('div');
    cardElemneteFace.classList.add(face);
    if (face === FRONT){

      let iconElement = document.createElement('img');
      iconElement.classList.add(ICON);
      iconElement.src = '/imagens/' + card.icon + '.jpg';
      cardElemneteFace.appendChild(iconElement);
         
    }else {
        cardElemneteFace.innerHTML = '&lt/&gt';
    }
element.appendChild(cardElemneteFace);
}

    function flipCard(){

if (game.setCard(this.id)){

    this.classList.add('flip');
    if(game.secundCard){
   if(game.checkMath()){
    game.clearCards();
   if (game.checkGameOver()){

let gameOverLayer = document.getElementById('gameOver')
gameOverLayer.style.display = 'flex';

   }
   }else{

    setTimeout(() => {
        
let firstCardView = document.getElementById(game.firstCard.id);
let secundCardView = document.getElementById(game.secundCard.id);

firstCardView.classList.remove('flip');
secundCardView.classList.remove('flip');
game.unflipCards();
}, 1000);
   }
}

}

};  

function restart() {
   game.clearCards();
   startGame();
   let gameOverLayer = document.getElementById('gameOver')
gameOverLayer.style.display = 'none';

}