let favorite = "End Game";
let guess = prompt("Guess my Favorite Movie: ");

while(guess != favorite && guess != "quit") {
  guess = prompt("Wrong Guess, Please try again!: ");
}

if(guess == favorite) {
  alert(`Yes ${guess} is my Favorite Movie!`)
}