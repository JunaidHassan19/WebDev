let animals = [["crow", "pigeon", "parrot"], ["lion", "tiger", "bear"], ["shark", "whale", "dolphin"]];

for(let i = 0; i < animals.length; i++) {
  console.log("Row:", i);
  for(let j = 0; j < animals[i].length; j++) {
    console.log(animals[i][j]);
  }
}