document.addEventListener("DOMContentLoaded", function() {
  // Console log
  console.log('Document loaded');

  var playerScore = 0;
  var cards = document.querySelectorAll(".card");

  var moves = [];
  var clickedElements = [];
  var clicks = 0;


  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {

    var selection = this.getAttribute("data-image");
    moves.push(selection);
    clickedElements.push(this);

    console.log(moves);
    console.log(clickedElements);


      var image;
      switch(this.id) {
        case 'card1':
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

  function checkWin () {
    if (moves.length == 2) {
      if (moves[0] == moves[1]) {
        alert("match");
        moves = [];
        clickedElements = [];
      } else {
        setTimeout(function(){
          clickedElements[0].style.backgroundImage = "";
          clickedElements[1].style.backgroundImage = "";
          moves = [];
          clickedElements = [];
        }, 500);



      }
    }
  }

  // Shuffle function array made with card indices as images attached to each card id
  // should flip cardS and shuffle images under each card to enable game restart.
  var cardList = [
    {
      name: 'card_1',
      id: 1
    },
    {
      name: 'card_2',
      id: 2
    },
    {
      name: 'card_3',
      id: 3
    },
    {
      name: 'card_4',
      id: 4
    },
    {
      name: 'card_5',
      id: 5
    },
    {
      name: 'card6',
      id: 6
    },
    {
      name: 'card_7',
      id: 7
    },
    {
      name: 'card_8',
      id: 8
    },
    {
      name: 'card_9',
      id: 9
    },
    {
      name: 'card_10',
      id: 10
    },
    {
      name: 'card_11',
      id: 11
    },
    {
      name: 'card_12',
      id: 12
    },
    {
      name: 'card_13',
      id: 13
    },
    {
      name: 'card_14',
      id: 14
    },
    {
      name: 'card_15',
      id: 15
    },
    {
      name: 'card_16',
      id: 16
    },
  ],

  card = [""];
  cardId = ["#"];
  cardsFlipped = 0;
  appendToBoard = document.getElementById('cardTable');

  function shuffle(array) {
    var currentIndex = array.length,
    temporaryValue,
    randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }
    return  array;
  }

  var gameBoard = document.getElementById('li');

  function createCardDeck() {
    shuffle(cardlist);
    var card= '';
    for(var i = 0 ; i< cardList.length; i++){
      card= '<span class="card" id="' + cardList[i].id +'">' +
      '<img class="card_back" alt="Union jack card back"/>' +
      '<img class="card_front inner-img" src="images/' + cardList[i].name + '.jpg" />' +
      '</span>';
    }
  }

  appendToBoard.innerHTML = card;

  document.getElementById('btnReset').addEventListener('click', function(e) {
    event.preventDefault();
    createCardDeck();
  });

  function flipCard() {
    var card = document.querySelectorAll('.card');

    for ( var i=0; i < card.length; i++) {
      card[i].addEventListener('mousedown', function(e) {
        event.currentTarget.classList.toggle('flipped');
        return false;
        // function shuffle (array) {}
      });
    }

    createCardDeck();
  }
});
