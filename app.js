'use strict';
var correctAnswers = 0;

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
  correctAnswers++
} else {
  alert('Whoops! Got that one wrong.');
  correctAnswers--
}

if (answers[1] === 'Y' || answers[1] === 'YES') {
  alert('Nope, he hasn\'t.');
  correctAnswers--
} else {
  alert ('Correct! He hasn\'t.');
  correctAnswers++
}

if (answers[2] === 'Y' || answers[2] === 'YES') {
  alert('He has not, but his relay team was 1 placement away from state. Close!');
  correctAnswers--
} else {
  alert('Correct, but they were close!');
  correctAnswers++
}

if (answers[3] === 'Y' || answers[3] === 'YES') {
  alert('Correct! He did.');
  correctAnswers++
} else {
  alert('Incorrect! He did.');
  correctAnswers--
}

if (answers[4] === 'Y' || answers[4] === 'YES') {
  alert('You\'re right, Christian definitely plays too many video games.');
  correctAnswers++
} else {
  alert('Nope, he definitely does.');
  correctAnswers--
}

var favoriteNumber = prompt('What is Christian\'s favorite number?');
console.log('You answered: ', favoriteNumber);
if (favoriteNumber === 7) {
  alert('Lucky number!');
} else if (favoriteNumber > 10) {
  alert('Think lower.')
} 

console.log('You got ', correctAnswers, ' answers correct.');
