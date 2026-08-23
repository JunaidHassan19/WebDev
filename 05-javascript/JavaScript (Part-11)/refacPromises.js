// Refactored version using Promises
function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Your data was saved");
    } else {
      reject("Weak internet connection, your data was not saved");
    }
  });
}

savetoDb("Hello World");
