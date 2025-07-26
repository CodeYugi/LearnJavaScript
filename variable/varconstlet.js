// var , const , let 
// var => variale 
var a = "hi"; // now a is variable so it can change 
var a = "by"; // now we change hi to by no error 
console.log(a);
// output will be by 
// const => constant 
// const means we cat change for example
const b = "yugi";
    //   b = "hi";
// by doing this you get error that 'b'  has already declared 

// let 
// we can also change the value same as var 
let c = "hi";
    c = "by";
    console.log(c); // output by 

// i know you have a doubt in mind that what is diffrent between var and let 
// they both doing same thing 
// before dive into diffrence 
// understand what is block =>
// a block is a section of code enclosed within curly braces { }

// so let use only inside a block but var can use universal

// extra 
let userName = "Alice";      // Good: camelCase, descriptive
let _tempValue = 42;         // Allowed: legal but not common outside special use cases
let $result = 5;             // Allowed: rare but legal
const MAX_SCORE = 100;       // Constant naming convention
let isLoggedIn = true;       // Boolean, uses "is" prefix

// Invalid examples:
// let 1stUser = "Bob";         // ❌ Error: cannot start with a digit
// let user-name = "Bob";       // ❌ Error: hyphens not allowed
// let const = 3;               // ❌ Error: reserved word

// using camelCase is good habit 

//typeof
console.log(typeof "hello");        // "string"
console.log(typeof 42);             // "number"
console.log(typeof true);           // "boolean"
console.log(typeof {a: 1});         // "object"
console.log(typeof [1, 2]);         // "object"   (arrays are objects)
console.log(typeof null);        // "object"   (a well-known JavaScript quirk)
console.log(typeof undefined);      // "undefined"
console.log(typeof function() {});  // "function"
