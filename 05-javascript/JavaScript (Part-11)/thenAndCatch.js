// Then and Catch
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

savetoDb("My data")
  .then(() => {
    // This will run if the promise is resolved
    console.log("Data saved successfully!");
  })
  .catch(() => {
    // This will run if the promise is rejected
    console.log("Failed to save data.");
  });
