const obj = {
  1: 'a', // it converts the number 1 to string '1' and uses it as a key
  2: 'b',// it converts the number 2 to string '2' and uses it as a key
  true: 'c',// it converts the boolean true to string 'true' and uses it as a key
  null: 'd',// it converts the null to string 'null' and uses it as a key
  undefined: 'e',// it converts the undefined to string 'undefined' and uses it as a key
};

console.log(obj[1]); // Output: 'a'
console.log(obj[true]); // Output: 'c'