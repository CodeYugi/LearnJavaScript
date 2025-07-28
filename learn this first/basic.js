// very basic 
let banana = 5;      // Imagine you say: "I have 5 banana"
const cat = "meo";  // Imagine you say: "The cat's name is meo"

console.log(banana); // This makes the computer say “5”
console.log(cat);   // This makes the computer say “meo”


// LET: You can change this later if you want
let apple = "green";      // "I have a green apple"
apple = "red";            // "Now my apple is red"

// CONST: You can never change this!
const dog = "Max";        // "The dog's name is Max"
// dog = "Buddy";          // ❌ This will give an error! You can't change a const

// VAR: Old way to make a box for your things (not used much now)
var toy = "truck";        // "My toy is a truck"
toy = "ball";             // "Now my toy is a ball"

// See what the computer says
console.log(apple);       // Shows: red
console.log(dog);         // Shows: Max
console.log(toy);         // Shows: ball


let cookie = "chocolate";

// IF: The computer checks if you have a chocolate cookie
if (cookie === "chocolate") {
  // If true, it says this!
  console.log("Yum! My favorite cookie!");
} else {
  // If NOT true, it says this!
  console.log("Oh... I wanted chocolate.");
}

// Another example:
let age = 5;

// IF you are 5 years old
if (age === 5) {
  console.log("You are five! Let's play!");
} else {
  console.log("How old are you?");
}

// Summary in code comments:
// if — the computer checks: "Is this true?"
// else — if not, it does something different!


// This is a function! It's like a little machine

function sayHello() {
  // When you press the button, the machine says "Hello!"
  console.log("Hello!");
}

// To use the machine, you call its name with ()
// Like pressing the button!
sayHello(); // The computer says: Hello!

// Another function: Add two numbers
function add(a, b) {
  // The machine adds the numbers and tells you the answer!
  let sum = a + b;
  console.log(sum); // Shows the answer
}

// Let's use the add machine!
add(3, 4); // The computer says: 7

// Summary in code comments:
// function — tells the computer a new word it can use
// You can use it anytime by saying its name and ()
// It's like making your own magic trick or button!
