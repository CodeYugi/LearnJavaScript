// Boolean have only two value true and false
// don't stress about if and else we will cover that 

// Assigning boolean values directly
let isAvailable = true;
let isComplete = false;

// Using boolean values in conditions
if (isAvailable) {
  console.log("Item is available");
} else {
  console.log("Item is not available");
}


// Converting other values to boolean explicitly
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean("text")); // true


// one more thing 
let isTrue = true;   // boolean literal, correct
let isFalse = false; // boolean literal, correct

let isStringTrue = "true";  // string, not boolean
let isStringFalse = "false"; // string, not boolean



// there are so many omparision operators 
// (1)  < (less than)
// (2)  > (greater than)
// (3)  <= (less than or equal to)
// (4)  >= (greater than or equal to)
// (5)  === (strictly equality)
// (6)  !== (strictly inequality) 
// (7)  == (loose equality) Avoid this 
// (8)  != (loose inequality) Avoid this


// example 
// Comparison that returns a boolean
let a = 10;
let b = 20;
let result = a < b;  // true 
console.log(result);  // outputs: true

// in if else also (by the way syntax of if else is same it will make sense )
if(a === 2){
    console.log("value of a is 2");
}
else if(a === 3){
    console.log("value of a is 3");
}
else{
    console.log("nothing not 2 or 3")
};

// there are logical operators also 
// Logical AND (&&)
let ab = true;
let bc = false;
console.log(ab && bc);  // false - both must be true for true result
console.log(ab && true); // true

// Example usage in condition
if (ab && !bc) {
  console.log("ab is true and bc is false");
}

// one more example 
let age = 19;
let hasPermission = true;
if (age >= 18 && hasPermission) {
  console.log("Access granted");
}
else{
     console.log("Access not granted");
}

// Logical OR (||)
console.log(ab || bc); // true - true if at least one is true
console.log(false || false); // false - both false yields false

// Logical NOT (!)
console.log(!ab); // if ab is true ! make it flase if false make it true
console.log(!bc); // same as bc

// Using NOT in condition (think this make sense)
if (!bc) {
  console.log("bc is false");
}


// there are three things to understand 
// NaN
// null
// undefined 
// what that means 

// NaN: "Not a Number" - result of invalid numeric operation or failed number conversion
let nanExample = "hello" / 2;
console.log(nanExample);  // NaN because dividing a string by a number is invalid

// null: Explicit "no value" - used to indicate an intentional empty or non-existent value
let user = null;
console.log(user);  // null, set purposely to show the absence of any object or value

// undefined: "Value not assigned" - a variable declared but not given a value yet
let name;
console.log(name);  // undefined because 'name' variable has no assigned value

function greet() {}
console.log(greet()); // undefined because function returns nothing
// dont take stress for function

// two more bigint and symbol

// BigInt: A special kind of number for really, REALLY big numbers
// Normal numbers in JS get confused if they are too big,
// but BigInt can handle super big numbers without messing up.

let bigNumber = 9007199254740991n;  // See the "n" at the end? That means BigInt!
console.log(bigNumber);  // Prints the big number correctly

// You can add BigInts too:
let anotherBigNumber = 10n;
console.log(bigNumber + anotherBigNumber);  // Adds them correctly

// -----------------------------

// Symbol: A special kind of label that is always unique,
// even if it looks the same. Think of it like a secret name tag.

let tag1 = Symbol("myTag");
let tag2 = Symbol("myTag");

console.log(tag1 === tag2);  // false, because each Sysmbol is a unique secret tag!

// You can use Symbols to give things unique names so they don't get mixed up.
