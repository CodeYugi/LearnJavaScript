// if statements 
// (1)=>
    if (condition) {
  // block of code to execute if the condition is true
}

// (2)=>
    if (condition) {
  // block of code if condition is true
} else {
  // block of code if condition is false
}

// (3)=>
    if (condition1) {
  // block if condition1 is true
} else if (condition2) {
  // block if condition2 is true (and condition1 was false)
} else {
  // block if neither condition1 nor condition2 is true
}

// example 
let grade = 87;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("D");
}


// nesting if else 
//  structure or syntax
if (condition1) {
  // Executes if condition1 is true
  if (condition2) {
    // Executes if condition1 and condition2 are both true
  } else {
    // Executes if condition1 is true and condition2 is false
  }
} else {
  // Executes if condition1 is false
}

//example try to read 

let number = -2;

if (number > 0) {
  if (number % 2 === 0) {
    console.log("The number is positive and even.");
  } else {
    console.log("The number is positive and odd.");
  }
} else {
  console.log("The number is not positive.");
}

// switch case 
switch (expression) {
  case value1:
    // executes if expression === value1
    break;
  case value2:
    // executes if expression === value2
    break;
  // more cases as needed
  default:
    // executes if no case matches
}

//example
let color = "green";

switch (color) {
  case "red":
    console.log("STOP");
    break;
  case "yellow":
    console.log("GET READY");
    break;
  case "green":
    console.log("GO");
    break;
  default:
    console.log("INVALID COLOR");
}
