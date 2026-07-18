//Qs 1:
 function poem() {
   console.log("Roses are red,");
   console.log("Violets are blue,");
   console.log("I'm writing functions,");
   console.log("And so are you!");
 };

 poem();


 //Qs 2:

function dice() {
  console.log(Math.floor(Math.random() * 6)+1);
}

dice();

//Qs 3:

function avg(a, b, c) {
  let average = (a+b+c)/3;
  console.log(average);
}

avg(10, 15, 5);
