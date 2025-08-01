// ==========================================================
// JavaScript Loops
// ==========================================================

// What is a loop?
// Imagine you want to do something many times, like clapping your hands 5 times.
// Instead of saying "clap" five times, a loop lets you say "Do it again" automatically!
// In programming, loops help us run the same code over and over without writing it again and again.

// ==========================================================
// 1. For Loop - The Counting Loop
// ==========================================================
// We use the for loop when we know HOW MANY times we want to do something.

// Syntax explanation:
// for (start; keep going while this is true; do this after each round) {
//    Do this code
// }

// Example: Count from 0 to 2 (3 times)
for (let i = 0; i < 3; i++) {
  // i = 0 means start counting at zero
  // i < 3 means keep going as long as i is less than 3
  // i++ means add 1 to i after each time we run the code block
  console.log( i);
}
// What happens step by step:
// i starts at 0 → check if i < 3 (true) → print i → add 1 to i (i=1)
// i = 1, check i < 3 (true), print i, i=2
// i = 2, check i < 3 (true), print i, i=3
// i = 3, check i < 3 (false), stop

// ==========================================================
// 2. While Loop - Keep Doing Until a Condition is False
// ==========================================================
// Used when we don't exactly know how many times, but want to keep going while something is true.

// Syntax:
// while (condition) {
//   Do this code
// }

// Example: Count from 0 to 2 using while
let count = 0;
while (count < 3) {
  console.log(count);
  count++; // increase count by 1 each time
}
// Step by step:
// count=0 check count<3 true → print → count=1
// count=1 check count<3 true → print → count=2
// count=2 check count<3 true → print → count=3
// count=3 check count<3 false → stop

// ==========================================================
// 3. Do...While Loop - Do First, Then Check Condition
// ==========================================================
// Similar to while, but the code runs at least ONCE before checking if it should run again

// Syntax:
// do {
//   Do this code
// } while (condition);

// Example counting 0 to 2 with do...while
let num = 0;
do {
  console.log( num);
  num++;
} while (num < 3);

// Step by step:
// num=0 → do print → num=1 → check 1<3 true → do print → num=2 → check 2<3 true → do print → num=3 → check 3<3 false stop

// ==========================================================
// 4. For...In Loop - Loop Through Keys of an Object
// ==========================================================
// Used to take each PROPERTY (key) name from an object.

// Example:
const cat = { name: "Fluffy", color: "white", age: 3 };
for (let key in cat) {
  console.log(key, "value:", cat[key]);
}
// Output:
// key is 'name', print Fluffy
// key is 'color', print white
// key is 'age', print 3

// ==========================================================
// 5. For...Of Loop - Loop Through Values of Array or String
// ==========================================================
// Used to take each VALUE from a list (like an array or a string)

// Example with array:
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Example with string:
const word = "hey";
for (let letter of word) {
  console.log(letter);
}

// ==========================================================
// 6. Breaking & Continuing Loops
// ==========================================================
// Sometimes we want to STOP a loop early or SKIP one turn.

// break: stops the loop completely
// continue: skips the rest of this turn and goes to next

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue; // skip printing 3
  }
  if (i === 4) {
    console.log("Stopping at 4");
    break; // stop loop here
  }
  console.log("Value:", i);
}

// Output:
// Value: 0
// Value: 1
// Value: 2
// Skipping 3
// Stopping at 4

// ==========================================================
// Summary Table of Loops
//
// | Loop Type    | What it does                             | When to Use                  |
// |--------------|-----------------------------------------|------------------------------|
// | for          | Loops a known number of times            | Counting, array indexing      |
// | while        | Loops while a condition stays true       | Unknown times, conditional    |
// | do...while   | Like while but runs code at least once   | When code must run first      |
// | for...in     | Loops over keys of an object              | Read object's keys and values |
// | for...of     | Loops over values of iterable (array, str)| Simpler array/string loops    |
// ==========================================================

// =======================
// Remember!
// =======================
// - Loops help us repeat tasks.
// - Always make sure loops will stop or they run forever (infinite loop).
// - Use the best loop for your task.

// You can practice by changing numbers or array values and see how output changes!

