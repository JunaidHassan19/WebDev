# Express.js Learning

This folder contains beginner-friendly notes, examples, and practice projects
for learning Express.js with Node.js.

## Topics Covered

- What Express.js is and why it is used with Node.js
- Creating an Express application
- Starting a local web server
- Handling HTTP requests and responses
- GET and POST routes
- Route parameters with `req.params`
- Query strings with `req.query`
- Middleware with `app.use()`
- Sending text, HTML, and JSON responses
- Using npm and `package.json`

## What Is Express.js?

Express.js is a lightweight web framework for Node.js. Node.js provides the
runtime, while Express provides convenient tools for creating web servers and
APIs, defining routes, handling requests, and sending responses.

## Folder Structure

```text
09-backend 2 (Node- Express)/
|
|-- express.txt       Express.js notes and examples
|-- expressDir/       Express practice project
|   |-- index.js       Express server and route examples
|   |-- package.json   Project metadata and dependencies
|   `-- package-lock.json  Locked dependency versions
`-- README.md          Overview and setup instructions
```

## Prerequisites

Install the LTS version of Node.js from [nodejs.org](https://nodejs.org).

Check the installation:

```bash
node -v
npm -v
```

## Quick Start

Move into the practice project and install its dependencies:

```bash
cd "09-backend 2 (Node- Express)/expressDir"
npm install
```

Start the Express server:

```bash
node index.js
```

The server runs at:

```text
http://localhost:8080
```

Keep the terminal running while testing the routes. Stop the server with
`Ctrl+C`.

## Available Routes

| Method | Path             | Purpose                               |
| ------ | ---------------- | ------------------------------------- |
| `GET`  | `/`              | Returns the root path message         |
| `GET`  | `/name`          | Returns a name message                |
| `GET`  | `/apple`         | Returns an apple message              |
| `GET`  | `/color`         | Returns a favorite color message      |
| `POST` | `/`              | Handles a POST request                |
| `GET`  | `/:username/:id` | Reads username and id path parameters |
| `GET`  | `/search?q=node` | Reads the `q` query string            |

Examples:

```text
http://localhost:8080/
http://localhost:8080/name
http://localhost:8080/junaid/101
http://localhost:8080/search?q=express
```

## Basic Express Server

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

## Route Parameters

Named values in a route path are available through `req.params`:

```javascript
app.get("/:username/:id", (req, res) => {
  const { username, id } = req.params;
  res.send(`Hello @${username}, your id is ${id}`);
});
```

For `/junaid/101`, `req.params.username` is `"junaid"` and
`req.params.id` is `"101"`.

## Query Strings

Optional key-value pairs after `?` are available through `req.query`:

```javascript
app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`You searched for ${q}`);
});
```

For `/search?q=express`, `req.query.q` is `"express"`. Query values arrive as
strings, so validate or convert them when necessary.

## Middleware

Middleware runs between receiving a request and sending a response. It can
log requests, parse request bodies, serve static files, or pass control to the
next handler:

```javascript
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

Useful built-in middleware includes:

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
```

For complete explanations and additional examples, read
[express.txt](express.txt).

## npm Commands

Create an Express project:

```bash
npm init -y
npm install express
```

Install all dependencies listed in `package.json`:

```bash
npm install
```

The project also includes `nodemon`, which can restart the server when files
change:

```bash
npx nodemon index.js
```

## Important Points

- Start the app from the folder containing `index.js`.
- Use `http://localhost:8080`, including the protocol and port.
- A browser normally sends GET requests; use Postman, curl, or frontend code
  to test POST requests.
- A missing route usually returns a 404 response.
- If the site cannot be reached, check that the server is running and that the
  port is correct.
- In production, validate input, handle errors, protect secrets, and use
  environment variables for configuration.
