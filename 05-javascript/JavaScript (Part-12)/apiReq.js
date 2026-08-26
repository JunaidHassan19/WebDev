let url = "https://catfact.ninja/fact";

fetch(url)
  .then((response) => {
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    console.log("First fact: " + data.fact);

    return fetch(url); // Make another API request
  })
  .then((response) => {
    return response.json(); // Parse the second response as JSON
  })
  .then((data) => {
    console.log("Second fact: " + data.fact);

    return fetch(url); // Make a third API request
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Third fact: " + data.fact);
  })

  .catch((err) => {
    console.error("Error occurred while fetching API data.", err);
  });
