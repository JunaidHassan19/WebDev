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