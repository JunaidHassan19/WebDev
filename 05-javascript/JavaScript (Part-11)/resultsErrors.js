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

// Promise Chaining with Results and Errors
savetoDb("My data")
  .then((result) => {
    console.log("Data saved successfully!");
    console.log(result);
    return savetoDb("Data 2");
  })
  .then((result) => {
    console.log("Data 2 saved successfully!");
    console.log(result);
  })
  .catch((error) => {
    console.log("Failed to save data.");
    console.log(error);
  });
