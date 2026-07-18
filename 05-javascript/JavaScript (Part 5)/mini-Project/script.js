const max = prompt("Enter the maximum number for the random number generator:");

const randomNumber = Math.floor(Math.random() * max) + 1;
console.log(randomNumber);

let userGuess = prompt(`Guess a number between 1 and ${max}:`);

while(true) {
  if(userGuess == 'quit') {
    console.log("Game exited.");
    break;
  }

  if(userGuess == randomNumber) {
    console.log("Congratulations! You guessed the correct number!, The number was " + randomNumber);
    break;

  } else if(userGuess < randomNumber) {
    userGuess = prompt("Your guess is too low! Try again! Guess a number between 1 and " + max + ":");
  } else if(userGuess > randomNumber) {
    userGuess = prompt("Your guess is too high! Try again! Guess a number between 1 and " + max + ":");
  }else{
    userGuess = prompt("Invalid input. Please enter a valid number between 1 and " + max + ":");
  }
}