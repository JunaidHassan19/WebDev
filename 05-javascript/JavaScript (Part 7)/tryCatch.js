// =====================================================
// TRY AND CATCH - BASICS
// =====================================================

// WHAT IS TRY AND CATCH?
//
// Try-Catch is used to handle errors in JavaScript gracefully.
// Instead of crashing, your program can catch the error and continue running.
//
// TRY BLOCK:   Contains code that might cause an error
// CATCH BLOCK: Runs if an error occurs in the try block
//
// Think of it like a safety net - if something goes wrong, 
// the catch block catches it instead of the program crashing.


// =====================================================
// SYNTAX
// =====================================================

/*
try {
    // Code that might cause an error
} catch (error) {
    // Code that runs if an error occurs
    // 'error' is an object with error information
}
*/


console.log("This is a test");
try {
  console.log(a);
}catch (error) {
  console.log("An error occurred: " + error.message);
}
console.log("This is a test 2");