// Spread Operator with Object literals

let data = {
  name: "Junni",
  password: "1234",
};

let newData = {
  ...data,
  email: "junni@example.com",
};

console.log(data); // { name: 'Junni', password: '1234' }
console.log(newData); // { name: 'Junni', password: '1234', email: 'junni@example.com' }
