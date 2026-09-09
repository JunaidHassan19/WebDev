const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/ig/:username", (req, res) => {
  const followers = ["user1", "user2", "user3"];
  let { username } = req.params;
  res.render("instagram", { username, followers });
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { diceValue });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
