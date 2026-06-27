// Qs: Create a traffic system that shows what to do based on color

let light = "green";

if(light === 'red'){
  console.log("Stop");
}
if(light ==='yellow'){
  console.log("Slow down");
}
if(light === 'green'){
  console.log("Go");
}

// Qs: Create a system to calculate popcorn price based on the size customer asked for

let size = 'M';

if(size === 'XL'){
  console.log("Price is Rs. 250")
} else if(size === 'L') {
    console.log("Price is Rs. 200")
} else if(size === 'M') {
    console.log("Price is Rs. 100")
} else if(size ==='S') {
    console.log("Price is Rs. 50")

}

// Qs: A "good string" is a string that starts with the letter 'a' and has a length >3. Write a program to check if a string is a good string or not.

let str = 'apple';

if(str[0] === 'a' && str.length > 3) {
  console.log("Good string");
}else{
  console.log("Not a Good string")
}


// Qs: Use switch statement to pront the day of the week using a number variable 'day' with values 1 to 7.

let day = 6;

switch(day) {
  case 1 :
    console.log("Monday");
    break;
  case 2 :
    console.log("Tuesday");
    break;
  case 3 :
    console.log("Wednesday");
    break;
  case 4 :
    console.log("Thursday");
    break;
  case 5 :
    console.log("Friday");
    break;
  case 6 :
    console.log("Saturday");
    break;
  case 7 :
    console.log("Sunday");
    break;
    default:
      console.log("Enter a valid value");
}
