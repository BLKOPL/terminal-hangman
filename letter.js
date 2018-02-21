// store string and if guessed
var Letter = function(letter) {
  this.letter = letter;
  this.guessed = false;
}

// function that returns the underlying char if letter is guessed or placeholder with underscore if not guessed
Letter.prototype.print = function() {
  if (this.guessed) {
    return this.letter + " ";
  } else {
    return "_ ";
  }
}

// var a = new Letter("a")
// console.log(a.print())

Letter.prototype.check = function(char) {
  this.char = char;
  if (this.char === this.letter) {
    this.guessed = true;
  }
}

module.exports = Letter;
