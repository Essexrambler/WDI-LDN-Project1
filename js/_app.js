document.addEventListener("DOMContentLoaded", function() {
  console.log('JS loaded');
  // $('document').ready(function(){
});



var clicks = 0; //Counts how many cards pciked in turn
var firstChoice; //stores index of first card
var secondChoice ; //stroes index of second card

var match = 0; //counts matches to add to click counter
var backCard = url("http://i.imgur.com/PhbibAE.png"); //shows back of card when flipped over




  var cards = document.querySelectorAll(".card");
  var playerScore =

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card1':
        image = 'url(images/bigredbus.jpg)';
        break;
      }

      this.style.backgroundImage = image1;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card2':
        image = 'url(images/bridgeonfire.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card3':
        image = 'url(images/switchhouse.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card4':
        image = 'url(images/stpauls.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card5':
        image = 'url(images/shard.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card6':
        image = 'url(images/blackfriarsbridge.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card7':
        image = 'url(images/cityhall.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card8':
        image = 'url(images/sunsetshard.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card9':
        image = 'url(images/bigredbus.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card10':
        image = 'url(images/bridgeonfire.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card11':
        image = 'url(images/switchhouse.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }
  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card12':
        image = 'url(images/stpauls.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card13':
        image = 'url(images/shard.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card14':
        image = 'url(images/blackfriarsbridge.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card15':
        image = 'url(images/cityhall.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card16':
        image = 'url(images/sunsetshard.jpg)';
        break;
      }

      this.style.backgroundImage = image;
    });
  }
});

//Shuffle function array made with card indices as images attached to each card id
//should flip cardS and shuffle images under each card to enable game restart.
var cardList = [
    {
      name: 'card_1'
      id: 1
    },
    {
      name: 'card_2'
      id: 2
    },
    {
      name: 'card_3'
      id: 3
    },
      name: 'card_4'
      id: 4
    },
      name: 'card_5'
      id: 5
    },
      name: 'card6'
      id: 6
    },
     name: 'card_7'
     id: 7
    },
      name: 'card_8'
      id: 8
    },
      name: 'card_9'
      id: 9
    },
      name: 'card_10'
      id: 10
    },
      name: 'card_11'
      id: 11
    },
      name: 'card_12'
      id: 12
    },
     name: 'card_13'
     id: 13
   },
    name: 'card_14'
    id: 14
  },
    name: 'card_15'
    id: 15
  },
    name: 'card_16'
    id: 16
  },
],

card = [],
card id =[],
cardsFlipped = 0,
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
 function createCardDeck() {
   shuffle(cardlist);
   var card= '';
   for(var i = 0 ; i< cardList.length; i++){
     card += '<span class="card" id"${cardList[i].id}">
                        <img class="card_back" url=card-back-"http://i.imgur.com/PhbibAE.jpg"
                        alt="Union jack card back"/>
                        <img class="card_front inner-img"
  src="asset/${cardList[i].name}.jpg />
  </span>
 }
    appendToBoard.innerHtml = card;
}

  document.getElementById('btnReset').addEventListener('click',function(e) {
    event.preventDefault();
    createCardDeck();
  }, true);

  function flipCard() {
    var card = document.querySelectorAll('.card');

    for( var i=0; i < card.length; i++) {
      card[i].addEventListener('mousedown', function(e) {
        event.currentTarget.classList.toggle('flipped');
        return false;
      });
    }
  }

  createCardDeck();
