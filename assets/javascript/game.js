  //Variables for Psychic Game

  var psychLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var Win = 0;
  var Lose = 0;
  var guessesRemaining = 10;
  var guessedLetters = []; 

  document.onkeyup = function (event) {
    var userGuess = event.key;  
    guessedLetters.push(userGuess);  
    var psychicAnswer = psychLetters[Math.floor(Math.random() * psychLetters.length)];

  
    var reset = function () {
      guessesRemaining = 10;
      guessedLetters = [];
    }

    if (userGuess === psychicAnswer) {
      Win++;
      guessesRemaining = 9;
    }
   
    else {
      guessesRemaining--;
    }

   
    if (guessesRemaining === 0) {
      Lose++;
      guessesRemaining = 9;
      reset();
    }

    var html = "<p>Guess what letter I'm thinking of...</p>" + "<p>Wins: " + Win + "</p>" + "<p>Loses: " + Lose + "<p>Guesses Left: " + guessesRemaining + "<p>Your Guesses so far: " + guessedLetters.join(', '); //Reveal guessed letters here
    document.getElementById("psychicInfo").innerHTML = html;
  }