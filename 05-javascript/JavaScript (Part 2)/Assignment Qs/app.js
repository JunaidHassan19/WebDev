//Qs 1:

let num = 10;

if(num%10 == 0) {
  console.log("good");
}else{
  console.log("bad");
}

//Qs 2:

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");

// let info = `${name} is ${age} years old`;
// alert(info);


//Qs3:

let quarter = 4;

switch(quarter){
  case 1 :
    console.log("January,"," February,"," March");
    break;
  case 2 :
    console.log("April,"," May,"," June");
    break;
  case 3:
    console.log("July,"," August,"," September");
    break;
  case 4:
    console.log("October,"," November,"," December")
  break;
  default:
    console.log("Invalid");
}

// Qs 4:
let str = "Application";

if(str[0] === 'A' && str.length > 5) {
  console.log("Golden string");
}else{
  console.log("Not a golden string");
}