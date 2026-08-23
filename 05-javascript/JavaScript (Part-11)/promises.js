/*
Promises:the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

function savetoDb(data, success, failure) {
  let internerSpeed = Math.floor(Math.random() * 10) + 1;
  if (internerSpeed > 4) {
    success();
  } else {
    failure();
  }
}

// Callback hell: when we have multiple nested callbacks, it becomes difficult to read and maintain the code. This is called callback hell.
savetoDb(
  "Hello World",
  () => {
    console.log("Your data was saved");
    savetoDb(
      "Second data",
      () => {
        console.log("Second data was saved");
        savetoDb(
          "Third data",
          () => {
            console.log("Third data was saved");
          },
          () => {
            console.log("Weak internet connection, third data was not saved");
          },
        );
      },
      () => {
        console.log("Weak internet connection, second data was not saved");
      },
    );
  },
  () => {
    console.log("Weak internet connection, your data was not saved");
  },
);
