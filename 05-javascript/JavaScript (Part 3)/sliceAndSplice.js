// Slice method: slice(start, end)
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
console.log(cars.slice()); // copies the whole array
console.log(cars.slice(2)); // copies the array from index 2 to the end
console.log(cars.slice(2, 4));  // copies the array from index 2 to index 4 (not including index 4)
console.log(cars.slice(-2)); // copies the last 2 elements of the array

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);  
console.log(citrus);


// Splice method:  slice(start, deleteCount, item1, item2, ...)
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);