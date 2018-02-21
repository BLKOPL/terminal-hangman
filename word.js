var Letter = require("./Letter");

var Word = function(word) {
  this.word = word;
  this.letterArr = [];
  this.guessesMade = "";
  for (var i = 0; i < this.word.length; i++) {
    this.letterArr.push(new Letter(this.word[i]))
  };
  // console.log(this.letterArr);
};

Word.prototype.toString = function() {
  this.answer = "";
  for (var i = 0; i < this.letterArr.length; i++) {
    this.answer += this.letterArr[i].print();
  };
  return this.answer;
};

Word.prototype.checkAns = function(userChar) {
  this.userChar = userChar.toLowerCase();
  if (this.guessesMade.indexOf(this.userChar) > -1) {
    return console.log("--------You've already entered this letter, pick another--------");
  } else {
    this.guessesMade += this.userChar;
    for (var i = 0; i < this.letterArr.length; i++) {
      this.letterArr[i].check(this.userChar);
    };
    // if (this.letterArr.guessed) {
    //   console.log("correct!")
    // } else {
    //   console.log("wrong!")
    // }
  }
  // console.log(this.letterArr)
};

Word.prototype.solved = function() {
  for (var i = 0; i < this.letterArr.length; i++) {
    if (this.letterArr[i].guessed === false) {
      return false;
    }
  };
  return true;
};

module.exports = Word;
