const nameA = 'Abdullah Zaky'
let nameB = prompt('What is your name?')
const nameCompared = nameA === nameB

console.log(nameA);
console.log(nameB);
console.log(nameCompared);

const ageA = 25
let ageB = parseInt(prompt('How old are you?'))  //output is string
parseInt(ageB)

if (ageA > ageB) {
    console.log('I\'m older than you');
    alert(`Hello there ${nameB} it seems that i\'m older than you`);
    guessAge();
} else if (ageA < ageB) {
    console.log('You\'re older than me');
    alert(`Hello there ${nameB} it seems that you\'re older than me`);
    guessAge();
} else if (ageA == ageB){
    console.log('ah we cant play a game cause your age same with me');
    alert(`Hello there ${nameB} it seems that we\'re about the same age`);
} else {
    console.log('you didnt input a number');
    alert(`you didnt input a number`);
}
function guessAge() {
alert(`so, can you guess how old i am?`)
let guess = prompt('Guess, how old am i?')
parseInt(guess)

for (guess == ageA; guess != ageA; guess = prompt('try again')) {
    if (guess < ageA) {
        alert('nope, i\'m older than that')
    } else if (guess > ageA) {
        alert('nope, i\'m younger than that')
    }
}
alert('YES!! You\'re right!!')
}