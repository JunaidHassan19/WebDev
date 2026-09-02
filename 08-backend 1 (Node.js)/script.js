// console.log(math);
// console.log(math.sum(5, 6));
// console.log(math.subtract(5, 6));
// console.log(math.multiply(5, 6));
// console.log(math.PI);

// const info = require("./fruits");

// console.log(info);

let figlet = require("figlet");

figlet("Junaid Hassan", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
