console.log("This is a test");// This will print immediately

setTimeout(()=> {
  console.log("setTimeout executed after 4 seconds");// This will print after 4 seconds, last in the console because of the delay introduced by setTimeout
}, 4000);

console.log("This is a test 2");// This will print immediately after the first log, before the setTimeout executes