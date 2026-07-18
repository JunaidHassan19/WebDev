const student = {
  name: "Junaid",
  age: 21,
  marks: 92,
  city: "Srnagar"
};

console.log(student);      // { name: 'Junaid', age: 21, marks: 92, city: 'Srnagar' }
console.log(student.name);      // Junaid
console.log(student["marks"]); // 92

student.age = 22;
console.log(student.age); // 22
console.log(student);

delete student.city;
console.log(student);