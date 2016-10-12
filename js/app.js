document.addEventListener("DOMContentLoaded", function() {
  // Console log
  console.log('Document loaded');

  var playerScore = 0;
  var cards = document.querySelectorAll(".card");
  var moves = [];
  var clickedElements = [];
  var appendToBoard = document.getElementById('cardTable');
  var clicks = 0;
  var cardList = [
    {name: 'card1',image: 'bigredbus',id: 1},
    {name: 'card2',image: 'bridgeonfire',id: 2},
    {name: 'card3',image:'switchhouse',id: 3},
    {name: 'card4',image:'stpauls',id: 4},
    {name: 'card5',image:'shard',id: 5},
    {name: 'card6',image:'blackfriarsbridge',id: 6},
    {name: 'card7',image:'cityhall',id: 7},
    {name: 'card8',image:'sunsetshard',id: 8},
    {name: 'card9',image:'bigredbus',id: 9},
    {name: 'card10',image:'bridgeonfire',id: 10},
    {name: 'card11',image:'switchhouse',id: 11},
    {name: 'card12',image:'stpauls',id: 12},
    {name: 'card13',image:'shard',id: 13},
    {name: 'card14',image:'blackfriarsbridge',id: 14},
    {name: 'card15',image:'cityhall',id: 15},
    {name: 'card16',image:'sunsetshard',id: 16},
  ];

function gamePlay(){
  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {         //Gameplay function created too call the data
      var selection = this.getAttribute("data-image");      //in one function, contains all the images
      moves.push(selection);                                //the win function and style background.
      clickedElements.push(this);
      console.log(moves);
      console.log(clickedElements);
      var image;
      switch(this.id) {                                     //managed to refract the image switch by coupling
        case 'card1':                                      //the pairs with equal images.
        case 'card9':
        image = "url('images/Archive/bigredbus.jpg')";
        break;

        case 'card2':
        case 'card10':
        image = 'url(images/Archive/bridgeonfire.jpg)';
        break;

        case 'card3':
        case 'card11':
        image = 'url(images/Archive/switchhouse.jpg)';
        break;

        case 'card4':
        case 'card12':
        image = 'url(images/Archive/stpauls.jpg)';
        break;

        case 'card5':
        case 'card13':
        image = 'url(images/Archive/shard.jpg)';
        break;

        case 'card6':
        case 'card14':
        image = 'url(images/Archive/blackfriarsbridge.jpg)';
        break;

        case 'card7':
        case 'card15':
        image = 'url(images/Archive/cityhall.jpg)';
        break;

        case 'card8':
        case 'card16':
        image = 'url(images/Archive/sunsetshard.jpg)';
        break;
      }

      this.style.backgroundImage = image;

      checkWin();
      clicks += 1;
      document.getElementById("clicks").innerHTML = "Player Moves = " + clicks;
    });

  }
}

function checkWin () {                                 //Win function, checking if moves is equal to
    if (moves.length == 2) {                           //moves length and if not a match 700th of a second
      if (moves[0] == moves[1]) {                      //flip back to backgroundImage.

        moves = [];
        clickedElements = [];
      } else {
        setTimeout(function(){
          clickedElements[0].style.backgroundImage = "";
          clickedElements[1].style.backgroundImage = "";
          moves = [];
          clickedElements = [];
        }, 700);
      }
    }
  }

  // Shuffle function array made with card indices as images attached to each card id
  // should flip cardS and shuffle images under each card to enable game restart with
  //card in different positions to enable game functionality.

  function shuffle(array) {
    var currentIndex = array.length,
    temporaryValue,
    randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }
    cardList = array;
    return array;
  }

  function insertShuffledCardDeck() {
    var cardHTML = '';

    shuffle(cardList);
    for(var i = 0 ; i< cardList.length; i++){

      // <li id="card1" class="card" data-image="bigredbus"></li>
      cardHTML += '<li id="' + cardList[i].name + '" class="card" data-image="' + cardList[i].image + '"></li>';
        // console.log(cardHTML);
    }

    appendToBoard.innerHTML = cardHTML;
  }
  // After this is the game
  gamePlay();

  document.getElementById('btnReset').addEventListener('click', function(e) {
    // event.preventDefault(); //calling the shuffle image-list
    clicks = 0;
    document.getElementById("clicks").innerHTML = "Player Moves = " + clicks;

    insertShuffledCardDeck();
    cards = document.querySelectorAll(".card");

    gamePlay();


  });
});
