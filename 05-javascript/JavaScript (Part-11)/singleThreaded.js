/*
JS is single threaded, it means it can only execute one task at a time.
  in the blow example, the synchronous code will be executed first and then the asynchronous code will be executed after 2 seconds. if we write two or more setTimeout functions, they will be executed in the same order as they are written in the code, but they will be executed after the specified time, it is up to browser to decide when to execute them, it can be after 2 seconds or more than that, it depends on the browser's event loop and the current state of the browser.
*/

setTimeout(() => {
  console.log("i am setTimeout, i will be executed after 2 seconds");
}, 2000);

console.log("I am synchronous code");
