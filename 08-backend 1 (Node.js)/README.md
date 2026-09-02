# Node.js Learning

This folder contains beginner-friendly notes, examples, and practice projects for learning Node.js and backend JavaScript.

## Topics Covered

- What Node.js is and how to install it
- Node.js features and common uses
- Running JavaScript files with Node.js
- Node.js REPL
- Node.js file paths
- Node.js modules and built-in modules
- CommonJS `require` and `module.exports`
- ES modules with `import` and `export`
- Exporting modules from files and directories
- The `process` object and command-line arguments
- Asynchronous programming with callbacks, promises, and async/await
- Creating a basic HTTP server
- npm and package management
- `package.json` and `package-lock.json`
- Installing, removing, and running packages
- Local and global package installation

## What Is Node.js?

Node.js is a JavaScript runtime environment that allows JavaScript to run
outside the browser. It is built on Chrome's V8 JavaScript engine and is used
to create backend applications, APIs, command-line tools, and real-time
applications.

Important features:

- Open source and cross-platform
- Fast because it uses the V8 engine
- Asynchronous and event-driven
- Uses non-blocking I/O operations
- Uses JavaScript on both the frontend and backend

## Folder Structure

```text
08-backend 1 (Node.js)/
|
|-- nodejs.txt              Node.js notes and commands
|-- math.js                 CommonJS module export example
|-- script.js               Module and package practice
|-- fruits/                 Exporting modules from a directory
|   |-- apple.js
|   |-- banana.js
|   |-- mango.js
|   `-- index.js
|-- figletDir/              Example project using the figlet package
`-- demoProject/            npm project and dependency practice
```

## Prerequisites

Install the LTS version of Node.js from [nodejs.org](https://nodejs.org).

Check the installation:

```bash
node -v
npm -v
```

## Quick Start

Move into this folder and run a JavaScript file:

```bash
cd "08-backend 1 (Node.js)"
node math.js
```

Start the Node.js REPL:

```bash
node
```

Use `.exit` to leave the REPL.

## npm Workflow

Create a new project:

```bash
npm init -y
```

Install a package locally:

```bash
npm install package-name
```

Install a development package:

```bash
npm install package-name --save-dev
```

Install a command-line package globally:

```bash
npm install -g package-name
```

Install all dependencies listed in `package.json`:

```bash
npm install
```

## Import and Export Example

Export values from a file:

```javascript
// math.js
module.exports = {
  sum: (firstNumber, secondNumber) => firstNumber + secondNumber,
};
```

Import the values into another file:

```javascript
const math = require("./math");

console.log(math.sum(2, 3));
```

For the complete explanation and additional examples, read [nodejs.txt](nodejs.txt).

## Node.js Files and Paths

Node.js files normally use the `.js` extension. Run a file by passing its path
to the `node` command:

```bash
node fileName.js
node ./scripts/app.js
```

The current directory is represented by a dot. Use `./` or `../` when
importing a local file. Without a relative path, Node.js searches for a
built-in module or an installed package.

## The `process` Object

`process` is a built-in global object that provides information about and
control over the current Node.js program.

Useful properties and methods:

- `process.argv`: command-line arguments
- `process.env`: environment variables
- `process.cwd()`: current working directory
- `process.exit()`: stops the program

Example:

```javascript
console.log(process.argv);
console.log(process.cwd());
console.log(process.env.NODE_ENV);
```

Run a file with an argument:

```bash
node app.js hello
```

The value `hello` is available in `process.argv`. The first two values are
usually the Node.js executable path and the JavaScript file path.

## Built-in Node.js Modules

Node.js provides reusable built-in modules such as:

| Module   | Purpose                               |
| -------- | ------------------------------------- |
| `fs`     | Works with files and folders          |
| `http`   | Creates HTTP servers                  |
| `path`   | Works with file and directory paths   |
| `os`     | Provides operating system information |
| `events` | Supports event-driven programming     |

Example:

```javascript
const os = require("os");

console.log(os.platform());
console.log(os.cpus().length);
```

## Importing and Exporting Modules

CommonJS is used in many Node.js projects. Import a built-in module, installed
package, or local module with `require`:

```javascript
const path = require("path");
const figlet = require("figlet");
const math = require("./math");
```

The `.js` extension can usually be omitted with `require`. Use
`module.exports` to share values:

```javascript
// math.js
const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
module.exports = { sum: sum };
```

```javascript
// another file
const math = require("./math");
console.log(math.sum(2, 3));
```

ES modules use `import` and `export`. Add this field to `package.json`:

```json
"type": "module"
```

Then use:

```javascript
import path from "path";
import { sum } from "./math.js";
```

Do not mix CommonJS and ES module syntax in the same file unless the project is
configured to support both systems.

### Exporting from a Directory

An `index.js` file can be the public entry point for a directory:

```javascript
// fruits/apple.js
module.exports = { name: "apple" };

// fruits/banana.js
module.exports = { name: "banana" };

// fruits/index.js
const apple = require("./apple");
const banana = require("./banana");
module.exports = [apple, banana];
```

Load the directory from another file:

```javascript
const fruits = require("./fruits");
console.log(fruits);
```

## npm and `package.json`

npm stands for Node Package Manager. It is installed with Node.js and is used
to find, install, update, remove, and manage JavaScript packages.

Create a project with:

```bash
npm init -y
```

This creates `package.json`, which stores project information, scripts, and
dependencies. Important fields include:

- `name` and `version`: identify the project
- `main`: the main entry file
- `scripts`: commands run with `npm run`
- `dependencies`: packages required by the application
- `devDependencies`: packages required only during development

Example:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": { "start": "node app.js" },
  "dependencies": {}
}
```

## Installing Packages

Install a package such as `figlet` in the current project:

```bash
npm install figlet
```

The package is placed in `node_modules`, and its name and version are added to
`package.json`. `package-lock.json` records exact dependency versions so the
project can be installed consistently on another machine.

Useful commands:

```bash
npm install package-name --save-dev
npm uninstall package-name
npm install
npm run script-name
```

Local installation is the normal choice for project dependencies. Global
installation is mainly for command-line tools:

```bash
npm install package-name
npm install -g package-name
npx package-name
```

## Simple HTTP Server

The following program creates a web server on port `3000`:

```javascript
const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello from the Node.js server");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

Save it as `server.js`, run `node server.js`, and open
`http://localhost:3000`. Stop the server with `Ctrl+C`.

## Asynchronous Programming

Node.js uses callbacks, promises, and `async`/`await` to handle asynchronous
operations without blocking the main thread.

Example using the `fs` module and a callback:

```javascript
const fs = require("fs");

fs.readFile("file.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log(data);
});
```

## Common Uses and Limitation

Node.js is commonly used for REST APIs, web servers, chat and real-time
applications, streaming applications, command-line tools, and microservices.

Node.js is not usually used for heavy CPU-based tasks because a long-running
calculation can block its main event loop. Worker threads or separate services
can be used for those tasks.
