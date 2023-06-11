


    // declaring some global variables
  
    // array of images to be stored in the individual cards
    const deckCards = ["kurd2.jpg", "peshmarga.jpg", "ala.jpg", "shwan.jpg", "shayy.jpg", "galb.jpg", "qala.jpg", "mnara.jpg",
      "kurd2.jpg", "peshmarga.jpg", "ala.jpg", "shwan.jpg", "shayy.jpg", "galb.jpg", "qala.jpg", "mnara.jpg"
    ];
  
    // selecting <ul> with class of deck
    const deck = document.querySelector(".deck");
  
    // empty array to store openedCards cards
    let openedCards = [];
  
    // empty array to store matching cards
    let matched = [];
  
    // selecting the modal
    const modal = document.getElementById("modal");
  
    // selecting reset button
    const reset = document.querySelector(".reset-btn");
  
    // selecting play-again button
    const playAgain = document.querySelector(".play-again-btn");
  
    // selecting the moves counter, which will have its innerHTML changed depending on number of moves made
    let movesCount1 = document.querySelector(".movescounter1");
    let movesCount2 = document.querySelector(".movescounter2");
  
    // create variable for the number of moves made (cards clicked), starting at 0
    let moves = 0;
  
  
    // selecting the stars to give the player a rating
    const star = document.getElementById("star-rating").querySelectorAll(".star");
  
    let starCount = 3;
  
    // selecting timer
    const timeCounter = document.querySelector(".timer");
  
    let time;
    let minutes = 0;
    let seconds = 0;
    let timeStart = false;

    document.getElementById("mp").style.visibility = "hidden";
    document.getElementById("p").style.visibility = "hidden";
  
    /* create a function that shuffles the array every time the game is started
    function will have a random number, a temporary variable which will be storing the value of the array at the current iteration
    it will then pull out the value of the shuffledDeck at a random iteration and will swap it with the current iteration value (stored at temporary variable)
    it will continue to loop through the array and repeat the same process, producting a randomly shuffled array 
    function will then return the shuffled array */
    function shuffle(arr) {
      for (let i = 0; i < arr.length; i++) {
  
        let randomNumber = Math.floor(Math.random() * arr.length);
  
        let temp = "";
        let current = arr[i];
        let randomElement = arr[randomNumber];
  
        temp = current;
        arr[i] = randomElement;
        arr[randomNumber] = temp;
      }
      return arr;
    }
  
    function startGame() {
      // Invoke shuffle function created earlier and store in variable
      const shuffledDeck = shuffle(deckCards);
       
      // Iterate over deck of cards array
      for (let i = 0; i < shuffledDeck.length; i++) {
        // at each iteration, create a <li> tag
        const liTag = document.createElement("li");
        // Give <li> class of card
        liTag.classList.add("card");
        // Create an <img> tag
        const addImage = document.createElement("img");
        // Append <img> to <li> tag
        liTag.appendChild(addImage);
        // Set the img src path with the shuffled deck
        addImage.setAttribute("src", "images/" + shuffledDeck[i]);
        // Add an alt tag to the image
        addImage.setAttribute("alt", `Image of ${shuffledDeck[i]}`);
        // Append the new <li> tag to the deck
        deck.appendChild(liTag);
      }
  
      let cards = document.getElementsByClassName("card");
      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function() {
          let flip = new Audio("sounds/flip.mp3");
          flip.play();
        });
      }
      
      let name1 = prompt("ناوی یاریزانی یەکەم");
      let name2 = prompt("ناوی یاریزانی دووەم");  

      document.getElementById("pl1").innerHTML = name1;
      document.getElementById("pl2").innerHTML = name2;

      document.getElementById("pl1").style.color="red";
      document.getElementById("pl2").style.color="black";
    }
  
    startGame();
    flash_cards();
    // create a function that removes cards. Function will be called upon reset
    function removeCard() {
      // As long as <ul> deck has a child node, remove the child node
      while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
      }
    }
  
    /* Update the timer in the HTML for minutes and seconds
    The timer function is called in the event listener the first time a card is clicked. */
    function timer() {
      // Update the count every 1 second
      time = setInterval(function() {
        seconds++;
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
  
        // Update the timer in HTML with the time it takes the user to play the game
        if (screen.width <= 500) {
          timeCounter.innerHTML = `<i class='fa fa-clock'></i> ${minutes} دەقە ${seconds} چرکە`;
        } else {
          timeCounter.innerHTML = `<i class='fa fa-clock' style="color: rgb(99, 72, 22);"></i><strong style="color: rgb(99, 72, 22);"> کات:</strong> ${minutes} دەقە ${seconds} چرکە`;
        }
      }, 1000);
    }
  
    // Create a function that stops the timer once all 16 cards are matched.
    function stopTime() {
      clearInterval(time);
    }
  
    // Create a function that resets all global variables and the content of HTML elements (timer, stars, moves, and their innerHTML)
    function resetEverything() {
      // Stop time, reset the minutes and seconds update the time inner HTML
      stopTime();
      timeStart = false;
      seconds = 0;
      minutes = 0;
      timeCounter.innerHTML = `<h3 class="timer"><i class="far fa-clock"></i> <span class="timer-header">کات:</span> 00:00</h3>`;
  
      // Reset star count and the add the class back to show stars again
      star[0].firstElementChild.classList.add("fa-star");
      star[1].firstElementChild.classList.add("fa-star");
      star[2].firstElementChild.classList.add("fa-star");
      starCount = 3;
      document.getElementById("pl1").style.color="red";
      document.getElementById("pl2").style.color="black";
      // Reset moves count and reset its inner HTML
      moves = 0;
      movesCount1.innerHTML = 0;
      movesCount2.innerHTML = 0;
      ds = 0;
      ds2 = 0;
      cs = 1;
  
      // Clear both arrays that hold the openedCards and matched cards
      matched = [];
      openedCards = [];
  
      // Clear the deck
      removeCard();
  
      // Create a new deck
      startGame();
      flash_cards();
    }
  let cs=1;
  let ds=0;
  let ds2=0
    /* Create a function that increments the moves counter, which is called at each comparison.
    for every two cards compared add one to the count. */
    function movesCounter(a) {
      // Update the html for the moves counter
      if(cs==1){
      movesCount1.innerHTML++;
      if(a==1){ds++;
      
      }
      else
      {
        cs*=-1;
      document.getElementById("pl1").style.color="black";
      document.getElementById("pl2").style.color="red";
      }
      
      }
      else{
        movesCount2.innerHTML++;
        if(a==1){ds2++;
          
        }
      else
      {
        cs*=-1;
        document.getElementById("pl1").style.color="red";
        document.getElementById("pl2").style.color="black";
      }
        
      }
      // Keep track of the number of moves for every pair checked
      moves++;
    }
  
    /* Create a function that updates the star rating depending on the number of moves the player has made to complete the Game
    the number of starts will decrease the more moves a player makes. */
    function starRating(a) {
      if (a >= 9 && a < 11) {
        // First element child is the <i> within the <li>
        star[2].firstElementChild.classList.remove("fa-star");
        starCount--;
      }
      if (a >= 11) {
        star[1].firstElementChild.classList.remove("fa-star");
        starCount--;
        starCount--;
         }
    }
    
    
  
    // Create a function to compare two cards in the openedCards array to see if they match
    function compareTwo() {
      // When there are 2 cards in the openedCards array
      if (openedCards.length === 2) {
        // Disable any further mouse clicks on other cards
        document.body.style.pointerEvents = "none";
      }
      // Compare the two images src
      if (openedCards.length === 2 && openedCards[0].src === openedCards[1].src) {
        // If matched call match()
       return match();
        
      } else if (openedCards.length === 2 && openedCards[0].src != openedCards[1].src) {
        // If No match call noMatch()
       return noMatch();
        
      }
    }
  
    // Create a function that checks if the two cards match, and keep the cards open if they do and applie class of match.
    function match() {
      /* Access the two cards in openedCards array and add the class of match to the parent of the image, i.e the <li> tag */
  
      setTimeout(function() {
        openedCards[0].parentElement.classList.add("match");
        openedCards[1].parentElement.classList.add("match");
  
        // Push the matched cards to the matched array
        matched.push(...openedCards);
  
        // Allow for further mouse clicks on cards
        document.body.style.pointerEvents = "auto";
  
        // Check to see if the game has been won with all 8 pairs
        winGame();
  
        /* play sound when cards match */
        let match = new Audio("sounds/match2.mp3");
        match.play();
        // Clear the openedCards array
        openedCards = [];
      }, 600);
  
      // Call movesCounter to increment by one
      movesCounter(1);
    }
  
    /* function that checks if the two cards do not match, and removes the cards from the openedCards array
    and flips the cards back over by removing the flip class. */
  
    function noMatch() {
      //after 450 milliseconds, add the noMatch class to the card
      setTimeout(function() {
        openedCards[0].parentElement.classList.add("noMatch");
        openedCards[1].parentElement.classList.add("noMatch");
      }, 450);
  
      setTimeout(function() {
        //after 600 milliseconds, play the "wrong.mp3" audio file
        let wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
      }, 600);
  
      setTimeout(function() {
        //after 1450 milliseconds, remove the noMatch class
        openedCards[0].parentElement.classList.remove("noMatch");
        openedCards[1].parentElement.classList.remove("noMatch");
      }, 1450);
  
      // After 1500 miliseconds the two cards open will have the class of flip removed from the images parent element <li>
      setTimeout(function() {
        // Remove class flip on images parent element
        openedCards[0].parentElement.classList.remove("flip");
        openedCards[1].parentElement.classList.remove("flip");
  
        // Allow further mouse clicks on cards
        document.body.style.pointerEvents = "auto";
  
        // Remove the cards from openedCards array
        openedCards = [];
      }, 1500);
  
      // Call movesCounter to increment by one
      movesCounter(0);
    }
  
    /*Function that produces stats regarding time, number of moves made, 
    and star rating for the end game and updates the modal with these stats. */
  
    function AddStats() {
        let b1=Number(movesCount1.innerHTML);
        let b2=Number(movesCount2.innerHTML);
        if(b1>b2){
            starRating(b1);
        }
        else if(b1<b2){
            starRating(b2);
        }
        else{
            starRating(b1+b2);
        }
        
      // Access the modal content div
      const stats = document.querySelector(".modal-content");
      // Create three different paragraphs
      for (let i = 1; i <= 3; i++) {
        // Create a new Paragraph
        const statsElement = document.createElement("p");
        // Add a class to the new Paragraph
        statsElement.classList.add("stats");
        // Add the new created <p> tag to the modal content
        stats.appendChild(statsElement);
      }
      // Select all p tags with the class of stats and update the content
      let p = stats.querySelectorAll("p.stats");
      // Set the new <p> to have the content of stats (time, moves and star rating) depending on the star rating
      if (starCount === 1) {
        p[0].innerHTML = `<strong> کاتی تێچوو</strong> ${minutes} دەقە و ${seconds} چرکە`;
        if(b1>b2){
            p[1].innerHTML = `<strong> جووڵەی کراو</strong> ${b1} - جووڵەی زۆرت کرد`;
        }
        else if(b1<b2){
            p[1].innerHTML = `<strong> جووڵەی کراو</strong> ${b2} - جووڵەی زۆرت کرد`;
        }
        else{
            p[1].innerHTML = `<strong> جووڵەی کراو</strong> ${b2+b1} - جووڵەی زۆرتان کرد`;
        }
        p[2].innerHTML = `<strong> هەڵسەنگاندنەکەت</strong> ${starCount} لە 3 ئەستێرە ... !دەرچووی - خراپ نیە`;
      } 

      else if (starCount === 2) {
        p[0].innerHTML = `<strong> کاتی تێچوو</strong> ${minutes} دەقە و ${seconds} چرکە`;
        if(b1>b2){
            p[1].innerHTML = `<strong> جووڵەی کراو</strong> ${b1} - جووڵەی باشت کرد`;
            }
            else if(b1<b2){
            p[1].innerHTML = `<strong> جووڵەی کراو</strong> ${b2} - جووڵەی باشت کرد`;
            }
            else{
                p[1].innerHTML = `<strong> جووڵەی کراو</strong> ${b2+b1} - جووڵەی باشتان کرد`;
            }
        p[2].innerHTML = `<strong> هەڵسەنگاندنەکەت</strong> ${starCount} لە 3 ئەستێرە ... `;
      } 
      
      else if (starCount === 3) {
        p[0].innerHTML = `<strong> کاتی تێچوو</strong> ${minutes} دەقە و ${seconds} چرکە`;
        if(b1>b2){
            p[1].innerHTML = `<strong> جووڵەی کراو</strong> ${b1} - دەرچووی -  باشبوویت`;
            }
            else if(b1<b2){
            p[1].innerHTML = `<strong> جووڵەی کراو</strong> ${b2} - دەرچووی -  باشبوویت`;
            }
            else{
                p[1].innerHTML = `<strong> جووڵەی کراو</strong> ${b2+b1} - دەرچوون -  باشبوون`;
            }
        p[2].innerHTML = `<strong> هەڵسەنگاندنەکەت</strong> ${starCount} لە 3 ئەستێرە ... <i class="fas fa-check-circle"></i> نایابە - مێشکێکی نایابە`;
      } 
      
    }
  
    // create function that displays the modal when the game is won
  
    function displayModal() {
      // Access the modal <span> element (x) that closes the modal
      const modalClose = document.getElementsByClassName("close")[0];

      let b1=Number(movesCount1.innerHTML);
      let b2=Number(movesCount2.innerHTML);
      let name1=document.getElementById("pl1").innerHTML;
      let name2=document.getElementById("pl2").innerHTML;
      if(b1>b2){
        document.getElementById("title2").innerHTML= name1 +" پیرۆزە";
        document.getElementById("par2").innerHTML= "توانیت "+ ds +" جووت بدۆزیتەوە";
    }
    else if(b1<b2){
        document.getElementById("title2").innerHTML= name2 +" پیرۆزە";
        document.getElementById("par2").innerHTML= "توانیت "+ ds2 +" جووت بدۆزیتەوە";

    }
    else{
        document.getElementById("title2").innerHTML="پیرۆزە بۆ هەردووکتان";
        document.getElementById("par2").innerHTML= "توانیتان هەر ٨  جووت بدۆزیتەوە";

    }

      const img_lose = document.getElementsByClassName("modal-img");
      img_lose[0].src="images/success.svg";
      const modal_block = document.getElementsByClassName("modal-content");
      modal_block[0].style="border: 0.8em solid #fc4;"
      // When the game is won set modal to display block to show it
      modal.style.display = "block";
  
      // When the user clicks on <span> (x), close the modal
      modalClose.onclick = function() {
        modal.style.display = "none";
      };
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
    
    /* function used Check the length of the matched array and if there are 8 pairs 16 cards 
    all together then the game is won.
    Stop the timer update the modal with stats and show the modal. */
  
    function winGame() {
      if (matched.length === 16) {
        stopTime();
        AddStats();
  
  
        // play victory sound when all cards are matched and display modal 700ms after last match is made
        setTimeout(() => {
          let victory = new Audio("sounds/victory.mp3");
          displayModal();
          victory.play();
        }, 800);
      }
    }
  
    function clickHandler(event) {
      if (event.target.nodeName === "LI") {
        // Start the timer after the first click of one card
        // Executes the timer() function
        if (timeStart === false) {
          timeStart = true;
          timer();
        }
        // Call flipCard() function
        flipCard();
      }
  
      //Flip the card and display cards img
      function flipCard() {
         //play "flip" audio file
         let flip = new Audio("sounds/flip.mp3");
         flip.play();
        // When <li> is clicked add the class .flip to show img
        event.target.classList.add("flip");
        // Call addToOpenedCards() function
        addToOpenedCards();
      }
  
      //Add the fliped cards to the empty array of openedCards
      function addToOpenedCards() {
        /* If the openedCards array has zero or one other img push another
        img into the array so we can compare these two to be matched
        */
        if (openedCards.length === 0 || openedCards.length === 1) {
          // Push that img to openedCards array
          openedCards.push(event.target.firstElementChild);
        }
        // Call compareTwo() function
        compareTwo();
      }
    }
  
    deck.addEventListener("click", clickHandler);
    deck.addEventListener("touchstart", clickHandler);
  
    reset.addEventListener('click', resetEverything);
  
    playAgain.addEventListener('click', function() {
      modal.style.display = "none";
      resetEverything();
    });
  
  
    /* add the show/open classes then removes them after timeout */
    function flash_cards() {
      document.querySelectorAll('.card').forEach(function(card) {
        card.classList.add('flip');
      });
      setTimeout(function(){
        document.querySelectorAll('.card').forEach(function(card) {
          card.classList.remove('flip');
        });
      }, 2000);
    }