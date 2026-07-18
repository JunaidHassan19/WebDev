//Qs 1:
 function poem() {
   console.log("Roses are red,");
   console.log("Violets are blue,");
   console.log("I'm writing functions,");
   console.log("And so are you!");
 };

//  poem();


 //Qs 2:
function dice() {
  console.log(Math.floor(Math.random() * 6)+1);
}

// dice();

//Qs 3:
function avg(a, b, c) {
  let average = (a+b+c)/3;
  console.log(average);
}

// avg(10, 15, 5);

function mul(num) {
  for(let i = 1; i <= 10; i ++) {
    console.log(`${num} * ${i} = `+ num * i);
  }
}

// mul(9);

// Qs 4
function sum(num){
  let sum = 0;
  for(let i = 1; i <= num; i ++) {
    sum += i;
  };
  return sum;
}

console.log(sum(5));