let student = {
  name: 'Junni',
  age: 20,
  eng: 65,
  math: 72,
  computer: 90,

  greet() {
    console.log(`Hello i'm ${this.name}, ${this.age} years old`);
  },

 getAvg() {
    let avg = (this.eng + this.math + this.computer) / 3;
    console.log(avg);
  }



};

console.log(student.name); // Output: Junni
console.log(student.age); // 20

student.greet();
student.getAvg();


/*

this keyword refers to the object that is currently executing the code. In the context of an object method, this refers to the object itself. It allows you to access properties and methods of the object from within its own methods.

*/