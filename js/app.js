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
  // should flip cardS and shuffle images under each card to enable game restart.
  var cardList = [
    {
      name: 'card_1',
      image: 'bigredbus',
      id: 1
    },
    {
      name: 'card_2',
      image: 'bridgeonfire',
      id: 2
    },
    {
      name: 'card_3',
      image:'switchhouse',
      id: 3
    },
    {
      name: 'card_4',
      image:'stpauls',
      id: 4
    },
    {
      name: 'card_5',
      image:'shard',
      id: 5
    },
    {
      name: 'card6',
      image:'blackfriarsbridge',
      id: 6
    },
    {
      name: 'card_7',
      image:'cityhall',
      id: 7
    },
    {
      name: 'card_8',
      image:'sunsetshard',
      id: 8
    },
    {
      name: 'card_9',
      image:'bigredbus',
      id: 9
    },
    {
      name: 'card_10',
      image:'bridgeonfire',
      id: 10
    },
    {
      name: 'card_11',
      image:'switchhouse',
      id: 11
    },
    {
      name: 'card_12',
      image:'stpauls',
      id: 12
    },
    {
      name: 'card_13',
      image:'shard',
      id: 13
    },
    {
      name: 'card_14',
      image:'blackfriarsbridge',
      id: 14
    },
    {
      name: 'card_15',
      image:'cityhall',
      id: 15
    },
    {
      name: 'card_16',
      image:'sunsetshard',
      id: 16
    },
  ];

  var appendToBoard = document.getElementById('cardTable');

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

  var gameBoard = document.getElementById('li');

  function insertShuffledCardDeck() {
    var cardHTML = '';

    shuffle(cardList);
    for(var i = 0 ; i< cardList.length; i++){
      // <li id="card1" class="card" data-image="bigredbus"></li>
      cardHTML += '<li id="' + cardList[i].name + '" class="card" data-image="' + cardList[i].image + '"></li>';
    }
    appendToBoard.innerHTML = cardHTML;
  }

  document.getElementById('btnReset').addEventListener('click', function(e) {
    event.preventDefault(); //calling the shuffle image-list
    insertShuffledCardDeck();{}

    return gameBoard;
  });
});
