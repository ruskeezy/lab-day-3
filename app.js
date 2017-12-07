'use strict';
var correctAnswers = 0;
var answers = [];

var doesHeRide = prompt('Do you think Christian rides a motorcycle? Answer the following questions with a Y or N, or YES/NO.').toUpperCase();
console.log('You answered: ', doesHeRide);
answers.push(doesHeRide);
console.log(answers);
for (var i = 0; i < answers.length; i++) {
  if (answers[0] === 'Y' || answers[0] === 'YES') {
    alert('Correct!');
    correctAnswers++;
    break;
  } else {
    alert('Whoops! Got that one wrong.');
    correctAnswers--;
    break;
  }
}

var hasHeTravelled = prompt('Has Christian travelled outside of the country before?').toUpperCase();
console.log('You answered: ', hasHeTravelled);
answers.push(hasHeTravelled);
for (var i = 0; i < answers.length; i++) {
  if (answers[1] === 'N' || answers[1] === 'NO') {
    alert('Correct!');
    correctAnswers++;
    break;
  } else {
    alert('Whoops! Got that one wrong.');
    correctAnswers--;
    break;
  }
}

var hasHeRan = prompt('Has Christian competed in state for his 4x100 relay team?').toUpperCase();
console.log('You answered: ', hasHeRan);
answers.push(hasHeRan);
for (var i = 0; i < answers.length; i++) {
  if (answers[2] === 'N' || answers[2] === 'NO') {
    alert('Correct!');
    correctAnswers++;
    break;
  } else {
    alert('Whoops! Got that one wrong.');
    correctAnswers--;
    break;
  }
}

var jobExperience = prompt('Do you think Christian worked at Whole Foods for two years before starting school?').toUpperCase();
console.log('You answered: ', jobExperience);
answers.push(jobExperience);
for (var i = 0; i < answers.length; i++) {
  if (answers[3] === 'Y' || answers[3] === 'YES') {
    alert('Correct!');
    correctAnswers++;
    break;
  } else {
    alert('Whoops! Got that one wrong.');
    correctAnswers--;
    break;
  }
}

var videoGames = prompt('Do you think Christian plays too many video games?').toUpperCase();
console.log('You answered: ', videoGames);
answers.push(videoGames);
for (var i = 0; i < answers.length; i++) {
  if (answers[4] === 'Y' || answers[4] === 'YES') {
    alert('Correct!');
    correctAnswers++;
    break;
  } else {
    alert('Whoops! Got that one wrong.');
    correctAnswers--;
    break;
  }
}




var numberOfGuesses = 0;
var favoriteNumber = prompt('What is Christian\'s favorite number?');
var numberYouGuessed = parseInt(favoriteNumber);
console.log('You answered: ', favoriteNumber);
while (numberOfGuesses <= 4) {
if (numberYouGuessed === 7) {
  alert('Lucky number!');
} else if (numberYouGuessed > 7) {
  alert('Think lower, it\'s a lucky number.');
} else if (numberYouGuessed < 7) {
  alert('Think a little higher than that!');
} else {
  alert('That\'s not a number.');
  }
}

console.log('You got ', correctAnswers, ' answers correct.');
