// Single quotes ('') are a fundamental method for creating strings in JavaScript?
// double quotes ("") are a fundamental method for creating strings in JavaScript?

//In JavaScript, single quotes ('') and double quotes ("") work exactly the same for creating strings—
// you just need to use the same type of quote at the start and end.
//  The main difference is that using one type lets you easily include the other type 
// inside the string without adding backslashes. For example, use single quotes if your 
// string has double quotes inside, and double quotes if your string has single quotes. 
// Other than that, they behave identically.

// temlplate string feature 

//  ${} use this when something veriable want to add in string 
let FullName = 'Alice';
let greeting = `Hello, ${FullName}!`; 
console.log(greeting); // Output: Hello, Alice!
// while using this we don't use "" and '' insted we use ``


//Concatenation (+ Operator)
let string1 = "help";
let string2 = "me";
let string3 = "guys";
let finalstring = string1 + " " + string2 + " " + string3;
console.log(finalstring);
// i add " " for space 


