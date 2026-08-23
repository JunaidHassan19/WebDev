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

// Promise Chaining
savetoDb("My data")
  .then(() => {
    console.log("Data saved successfully!");
    return savetoDb("Data 2"); // This will return a new promise for the second data save operation
  })
  // This will run if the second promise is resolved
  .then(() => {
    console.log("Data 2 saved successfully!");
  })
  .catch(() => {
    console.log("Failed to save data.");
  });
