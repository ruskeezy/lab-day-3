'use strict';

var answers.toUpperCase() = [doesHeRide, hasHeTravelled, hasHeRan, jobExperience, videoGames];

var doesHeRide.toUpperCase() = prompt('Do you think Christian rides a motorcycle? Answer the following questions with a Y or N, or YES/NO.');
console.log('You answered: ', doesHeRide);

var hasHeTravelled.toUpperCase() = prompt('Has Christian travelled outside of the country before?');
console.log('You answered: ', hasHeTravelled);

var hasHeRan.toUpperCase() = prompt('Has Christian competed in state for his 4x100 relay team?')
console.log('You answered: ', hasHeRan);

var jobExperience.toUpperCase() = prompt('Do you think Christian worked at Whole Foods for two years before starting school?');
console.log('You answered: ', jobExperience);

var videoGames.toUpperCase() = prompt('Do you think Christian plays too many video games?');
console.log('You answered: ' videoGames);


for (var i = 0; i < answers.length; i++) {
    console.log(answers);
}

if (answers[0] === 'Y' || answers[0] === 'YES') {
  alert('Correct! He does.');
} else {
  alert('Whoops! Got that one wrong.');
}

if (answers[1] === 'Y' || answers[1] === 'YES') {
  alert('Nope, he hasn\'t.')
} else {
  alert ('')
}
