# Node.js Learning

This folder contains beginner-friendly notes, examples, and practice projects for learning Node.js and backend JavaScript.

## Topics Covered

- What Node.js is and how to install it
- Running JavaScript files with Node.js
- Node.js REPL
- Node.js modules and built-in modules
- CommonJS `require` and `module.exports`
- ES modules with `import` and `export`
- Exporting modules from files and directories
- The `process` object and command-line arguments
- Asynchronous programming with callbacks
- Creating a basic HTTP server
- npm and package management
- `package.json` and `package-lock.json`
- Installing, removing, and running packages
- Local and global package installation

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
  sum: (firstNumber, secondNumber) => firstNumber + secondNumber
};
```

Import the values into another file:

```javascript
const math = require("./math");

console.log(math.sum(2, 3));
```

For the complete explanation and additional examples, read [nodejs.txt](nodejs.txt).
