const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
  console.log("Request received");
  // this is a middleware function that will be executed for every incoming request
  // res.send({
  //   message: "this is my first express server",
  //   name: "Junaid Hassan",
  //   email: "junaid@example.com",
  // });
  let code =
    "<h1>Hey! i'm <i>Junaid Hassan</i></h1> <ul> <li>I'm a <b>Full Stack Developer</b></li> <li>I'm a <b>Software Engineer</b></li> <li>I'm a <b>Web Developer</b></li> </ul>";
  res.send(code);
});
