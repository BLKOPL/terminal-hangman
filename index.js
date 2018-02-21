var Word = require("./word");
var Letter = require("./letter");
var inquirer = require('inquirer');
var pool = ["sartre", "nietzsche", "kierekegaard", "kafka", "heidegger", "ortega"];
var randomIndex = Math.floor(Math.random() * pool.length);
var randomizer = pool[randomIndex];
var newWord = new Word(randomizer);
var Guesses = 15;

var question =
  {
    type: 'input',
    name: 'enteredLetter',
    message: "Enter a letter",
    validate: function(value) {
      var pass = value.match(/^[A-Za-z]+$/);
      if (pass) {
        return true;
      }
      return 'Letters only';
    }
  };

function start() {
// console.log(newWord + '');
console.log("Guess this word: ", newWord + '');
if (newWord.guessesMade.length >= Guesses) {
  console.log('You have no more guesses. TRY AGAIN!.');
return;
}
inquirer.prompt(question).then(function(answer) {
  var input = answer.enteredLetter.toLowerCase();
  newWord.checkAns(input);
  if (newWord.solved()) {
					console.log('YOU WIN! It was ' + newWord + '');
        } else {
          console.log('You have ' + (Guesses - newWord.guessesMade.length) + ' guesses left.')
          start();
        }
});
}

start();
