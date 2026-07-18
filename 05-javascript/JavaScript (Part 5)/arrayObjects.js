const students = [
  {
    name: "Junaid",
    age: 21,
    city: "Srinagar",
  },
  {
    name: "john",
    age: 22,
    city: "sanfrancisco",
  },
  {
    name: "alice",
    age: 23,
    city: "losangeles",
  },
];

console.log(students[0].name); // Output: "Junaid"
console.log(students[1]["age"]); // Output: 22

students[2].city = "newyork"; // Updating city for alice
console.log(students[2].city); // Output: "newyork"

delete students[1]; // Removing the student 'john'
console.log(students); // Output: Array with two student objects (Junaid and alice)