/*

Array Methods in JavaScript

-> forEach(): Executes a provided function once for each array element.
-> map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
-> filter(): Creates a new array with all elements that pass the test implemented by the provided function.
->some(): Tests whether at least one element in the array passes the test implemented by the provided function. Returns a Boolean value.
-> every(): Tests whether all elements in the array pass the test implemented by the provided function. Returns a Boolean value.
->reduce(): Executes a reducer function on each element of the array, resulting in a single output value.


*/

// forEach
let arr = [1, 2, 3, 4, 5];

function print(el) {
  console.log(el);
}

arr.forEach(print);

//or

arr.forEach(function (el) {
  console.log(el);
});

//or

arr.forEach((el) => console.log(el));

let arr2 = [
  {
    name: "Junni",
    age: 25,
  },
  {
    name: "Alice",
    age: 30,
  },
  {
    name: "Bob",
    age: 35,
  },
  {
    name: "Charlie",
    age: 40,
  },
];

// for (let i = 0; i <= arr2.length - 1; i++) {
//   console.log(arr2[i].name);
//   console.log(arr2[i].age);
// }

arr2.forEach((el) => {
  console.log(el.name, el.age);
});
