// syntax of a function 
// Function definition (syntax)
function functionName(parameter1, parameter2) {
  // code to be executed
  // (optional) return value;
}

// Calling the function (syntax)
// functionName(argument1, argument2);

//example 
function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Ali"); // Output: Hello Ali


// we return value only when we have to return value 

function add(a, b){ // a and b is paramerter 
    c = a + b;
    return c;
}

console.log(add(1,3)); // noe parameter change into value

// default value for perameter 
function multiply(a, b = 1) {
  return a * b;
}

multiply(5);      // returns 5 (b uses default 1)
multiply(5, 2);   // returns 10 (b is 2)
multiply(5, 0);   // returns 0 (b is 0, not default)


// calling other function 
// Define the helper function
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

// A function that calls another function
function greetAndWelcome(name) {
  sayHello(name);        // Calling another function
  console.log("Welcome to our website.");
}

// Now call the "outer" function
greetAndWelcome("Yugi");


// nesting => function inside another function
function outer(x, y) {
  function inner(a, b) {
    return a * b + x + y; // inner can use x and y from outer
  }
  return inner(3, 4); // Call the nested function
}

console.log(outer(2, 5)); // Output: 19


// My fav and shortcut for funtion 

// lets take two example of mutiplication first long and second short 

//eg 1 long one 
function sub1(a,b){
    c = a - b;
    return c; // or you  can just say return a - b;
}
console.log(sub1(5,2)); //output is 3 

// eg 2

const sub2 = (a,b) => a - b;
console.log(sub2(5,2)); // output is 3 


// another way to write function

let summ = function sumi(){
  console.log("you can enter logic here ");
  return "done";
};

// how to call this ?

console.log(summ());