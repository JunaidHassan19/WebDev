const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
    // app.use is a method that allows you to define middleware functions that will be executed for every incoming request to the server. In this case, we are using app.use to define a middleware function that will log a message to the console and send a response back to the client.
app.use((req, res) => {
    console.log("Request received");
    // res.send({
    //   message: "this is my first express server",
    //   name: "Junaid Hassan",
    //   email: "junaid@example.com",
    // });
  let code =
    "<h1>Hey! i'm <i>Junaid Hassan</i></h1> <ul> <li>I'm a <b>Full Stack Developer</b></li> <li>I'm a <b>Software Engineer</b></li> <li>I'm a <b>Web Developer</b></li> </ul>";
  res.send(code);
});
*/

// app.get is a method that allows you to define a route handler for a specific HTTP GET request. In this case, we are using app.get to define a route handler for the root path ("/"). When a GET request is made to the root path, the callback function will be executed, and it will send a response back to the client with the message "You are on the root path".
app.get("/", (req, res) => {
  res.send("Hello! You are on the root path");
});

app.get("/name", (req, res) => {
  res.send("You are on the name path, and your name is Junaid Hassan");
});

app.get("/apple", (req, res) => {
  res.send("You are on the apple path, and your favorite fruit is apple");
});

app.get("/color", (req, res) => {
  res.send("You are on the color path, and your favorite color is blue");
});

app.get("/*splat", (req, res) => {
  res.send(
    "Hello you entered a wrong path, please check the path and try again",
  );
});

app.post("/", (req, res) => {
  res.send("you send a post request");
});
