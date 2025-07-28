// A callback is a function you give to another function, so that function can "call back" to your code later.
// Callbacks are everywhere in JS: events, timers, async code.


// A simple callback example

function greet(name) {
  console.log("Hello, " + name); // The code that runs later
}

function processUser(username, callback) {
  // ...Do something with username
  callback(username); // Call the callback with the result
}

processUser("Yugi", greet); // Will print: Hello, Yugi



// Anonymous Callback Example

// You can use a "nameless" (anonymous) function directly

processUser("Yugi", function(name) {
  console.log("Hi there, " + name);   // This runs as a callback
}); // Prints: Hi there, Yugi


// Arrow Function Callback Example

// With ES6, arrow functions are a fast way to write callbacks

processUser("Charlie", (name) => {
  console.log("Hey, " + name);
}); // Prints: Hey, Charlie

 

// another one 

function add(a, b, callback) {
  callback(a, b);
}


add(23 , 34 , (x , y) => {
  let c = x + y;
  console.log("addition is " + c);
});