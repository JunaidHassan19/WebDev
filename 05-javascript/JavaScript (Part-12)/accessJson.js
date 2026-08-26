// This is a JSON string received from an API response.
// It contains a fact about cats and the length of the message.
let apiReq =
  '{"fact":"Today there are about 100 distinct breeds of the domestic cat.","length":62}';

// Print the raw JSON string as it is received.
console.log(apiReq);

// JSON.parse() converts the JSON string into a JavaScript object.
let apiRes = JSON.parse(apiReq);

// Display the object after parsing.
console.log(apiRes);

// Access specific properties of the parsed object.
console.log(apiRes.fact);
console.log(apiRes.length);

// This is a JavaScript object representing a student.
let student = {
  name: "Junni",
  age: 21,
  city: "Shopian",
  bio: "I am a student of Web Development at Sigma. I am passionate about coding and love to learn new technologies.",
};

// Print the JavaScript object.
console.log(student);

// JSON.stringify() converts the JavaScript object into a JSON string.
let studentJson = JSON.stringify(student);

// Print the JSON string version of the object.
console.log(studentJson);
