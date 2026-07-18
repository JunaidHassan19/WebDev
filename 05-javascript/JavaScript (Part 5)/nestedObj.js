const students = {
  junni: {
    RollNo: 1,
    marks: 92,
  },
  jai: {
    RollNo: 2,
    marks: 88,
  },
  jsx: {
    RollNo: 3,
    marks: 95,
  }
};

console.log(students);
console.log(students.junni.marks); // 92

console.log(students["jsx"]["RollNo"]); // 3
console.log(students.jsx.RollNo); // 3