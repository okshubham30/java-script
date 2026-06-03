// String

// strings is a sequence of characters used to represent text in js. 

// string length 
let str = "hello";
console.log(str.length); 

// string index 
let str = " hello";
console.log(str[0]);

// template literals 

//1. old version 
let name ="shubham";
console.log("my name is " + name );

// 2. new version 

let name = "shubham";
console.log("my name is $(name)");

// output is : my name is shubham 

// string methods 
// toUpperCase()

let str = " hello ";
console.log(str.toUpperCase()); // outpur is : HELLO 

// toLowerCase() 

let str = " HELLO ";
console.log(str.toLowerCase()); // output is : hello 

// trim() by the help of this we remove space from start and end of the string 
// examplet 

let str ="   hello   ";
console.log(str.trim()); // outpur is : hello without space 

// concat() this method is used to join two or more strings together 

let str = " hello ";
let str1 = " brother ";
console.log(str.concat(str1)); // output is : hell0 brother 

// charAt() this method is used to return the character at a specified index in a string 

let str = " shubham"; 
console.log(str.charAt(0)); // output is : s

// replace() this method is used to replace a specified value with another value in a string 

let str = " hello brother";
console.log(str.replace("brother", "shubham")); // output is : hello shubham 

// slice() this method is used to extract a section of a string and return it as a new string 

let str = "helloShubham ";
console.log(str.slice(0,5)); // output is : hello