let x = 5;
let y = 10;
let z = 15;

if(x < y && y < z){
  console.log("Both conditions are true");
} else {
  console.log("At least one condition is false");
}

if(x < y || y > z){
  console.log("At least one condition is true");
} else {
  console.log("All conditions are false");
}

if(!(x > y)){
  console.log("The condition is false");
} else {
  console.log("The condition is true");
}