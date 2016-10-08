document.addEventListener("DOMContentLoaded", function() {
  console.log('JS loaded');

//
// var clicks = 0; //Counts how many cards pciked in turn
// var firstChoice; //stores index of first card
// var secondChoice ; //stroes index of second card
//
// var match = 0; //counts matches to add to click counter
// var backCard = "image.png";

  var cards = document.querySelectorAll(".card");

  for(var i=0;i<cards.length;i++) {
    cards[i].addEventListener('click', function() {
      var image;
      switch(this.id) {
      case 'card1':
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



  // document.getElementById('card1').onclick = function() {
  //     document.getElementById('card1').style.backgroundImage = "images/bigredbus.jpg";
  // };
  //
  //   var cardTwo = document.getElementById('card2').onclick = function() {
  //
  //     document.getElementById('card2').style.backgroundImage = "images/bridgeonfire.jpg";
  //
  //   };
  //
  //   var cardThree = document.getElementById('card3').onclick = function() {
  //
  //     document.getElementById('card3').style.backgroundImage = "images/switchhouse.jpg";
  //
  //   };
  //
  //   var cardFour = document.getElementById('card4').onclick = function() {
  //
  //     document.getElementById('card4').style.backgroundImage = "images/stpauls.jpg";
  //
  //   };
  //
  //   var cardOne = document.getElementById('card5').onclick = function() {
  //
  //       document.getElementById('card5').style.backgroundImage = "images/shard.jpg";
  //
  //     };
  //
  //     var cardOne = document.getElementById('card6').onclick = function() {
  //
  //         document.getElementById('card6').style.backgroundImage = "images/blackfriarsbridge.jpg";
  //
  //       };
  //     });

        // var cardOne = document.getElementById('card1').onclick = function() {
        //
        //     document.getElementById('card1').style.backgroundImage = "images/bigredbus.jpg";
        //
        //   };
        //
        //   var cardOne = document.getElementById('card1').onclick = function() {
        //
        //       document.getElementById('card1').innerHTML = '<img src="images/bigredbus.jpg">'
        //
        //     };
