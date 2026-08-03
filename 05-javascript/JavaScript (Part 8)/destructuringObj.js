// Destructuring Objects in JavaScript

const student = {
  name: "Junni",
  rollNo: 123,
  age: 20,
  grade: "A",
  phone: "123-456-7890",
  subjects: ["Math", "Science", "English"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

// Without destructuring
// let name = student.name;
// let age = student.age;
// let grade = student.grade;
// let city = student.address.city;
// let state = student.address.state;
// console.log(name, age, grade, city, state);

// With destructuring
let {
  name,
  age,
  grade,
  address: { city, state },
} = student;

console.log(name, age, grade, city, state);
