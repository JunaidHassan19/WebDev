/*

Infinite loops run forever unless they are stopped manually or with a break.

*/

// This will run infinitely because i is decremented but the condition checks for i < 10
for(let i = 0; i < 10; i--) {
  // console.log(i);
}


// This will run infinitely because the condition is always true
for(let i = 1; i >=5; i++) {
  // console.log(i);
}

// This will run infinitely because there is no condition to stop the loop
for(let i = 1;  ; i ++) {
  // console.log(i);
}