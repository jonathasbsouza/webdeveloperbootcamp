//create secret number
var secretNumber = 4;
//ask user for number
var guess = Number(prompt("Guess a number."));
//check guess
if(guess) === secretNumber) {
    alert("Congratulations, you're right!");
} else if(guess) < secretNumber) {
    alert("Sorry, but you number is lower.");
} else if(guess) > secretNumber){
    alert("Sorry, but you number is higher.");
}