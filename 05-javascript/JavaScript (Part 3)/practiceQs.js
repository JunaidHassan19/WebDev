// Qs 1: for the given string, trim it and convert it to uppercase.

let str1 = " help! "
console.log(str1.trim().toUpperCase());
          

// Qs 2: saparate the "college" part in above string and replace "i" with " t" in it.
let str2 = "ApnaCollege";
console.log(str2.slice(4).replaceAll("l", "t"));


//Qs 3: For given start of an array, change it to final form using methods.

let months = ["january", "july", "march", "august"]
console.log(months);

months.shift();
months.shift();
console.log(months);

months.unshift("june");
months.unshift("july");
console.log(months);


//Qs 4: using splice

let months2 = ["january", "july", "march", "august"];
console.log(months2);
months2.splice(0, 2, "july", "june");
console.log(months2);

//Qs 5: Return the index of the "javascript" from the given array, if it was reversed.

let langu = ["c", "c++", "javascript", "python", "java", "c#", "sql"];
let revLangu = langu.reverse().indexOf("javascript");
console.log(revLangu);