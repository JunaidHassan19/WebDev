/*
Asynchronous functions are a way to handle asynchronous operations in JavaScript. They allow you to write code that looks synchronous, but actually performs asynchronous tasks, such as fetching data from an API or reading files.

-async and await are the two keywords used to define and work with asynchronous functions.

async functions are defined using the async keyword before the function declaration. Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved or rejected.
*/

async function greet() {
  // throw new Error("Something went wrong!");
  return "hello!";
}

greet()
  .then((result) => {
    console.log("greet() resolved successfully with result: ", result);
  })
  .catch((err) => {
    console.log("greet() rejected with an error : ", err.message);
  });

let test = async () => {
  return 5;
};

test()
  .then((result) => {
    console.log("test() resolved successfully with result: ", result);
  })
  .catch((err) => {
    console.log("test() rejected with an error : ", err.message);
  });
