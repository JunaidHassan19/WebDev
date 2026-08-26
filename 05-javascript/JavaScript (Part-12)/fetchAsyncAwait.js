let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log("First fact: " + data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log("Second fact: " + data2.fact);

    let res3 = await fetch(url);
    let data3 = await res3.json();
    console.log("Third fact: " + data3.fact);
  } catch (err) {
    console.error("Error occurred while fetching API data.", err);
  }
}
getFacts();
