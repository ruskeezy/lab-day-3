'use strict';
var correctAnswers = 0;
var answers = [];

function heRide() {
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
}

function heTravelled() {
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
}

function heRan() {
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
}

function jobz() {
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
}

function gamez() {
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
}


function favNum() {
  var numberOfGuesses = 0;

  console.log('You answered: ', favoriteNumber);
  while (numberOfGuesses <= 4) {
    // var favoriteNumber = prompt('What is Christian\'s favorite number?');
    var numberYouGuessed = parseInt(prompt('What is Christian\'s favorite number?'));
  if (numberYouGuessed === 7) {
    alert('Lucky number!');
    break;
  } else if (numberYouGuessed > 7) {
    alert('Think lower, it\'s a lucky number.');
    numberOfGuesses++;
  } else if (numberYouGuessed < 7) {
    alert('Think a little higher than that!');
    numberOfGuesses++;
  } else {
    alert('That\'s not a number.');
    numberOfGuesses++;
    }
  }
}

function heLives() {
  var statesLived = ['New Hampshire'];
  var statesGuessed = 0;
  while (statesGuessed <= 6) {
    var statesQuestion = prompt('Can you guess which states Christian has lived in?');
    if (statesLived === 'New Hampshire') {
      alert('You got it! That\'s the only other state i\'ve lived in.');
      break;
    } else {
      alert('Sorry! You didn\'t get it. Maybe next time.');
      statesGuessed++;
    }
  }
}

heRide();
heTravelled();
heRan();
jobz();
gamez();
favNum();
heLives();

console.log('You got ', correctAnswers, ' answers correct.');
