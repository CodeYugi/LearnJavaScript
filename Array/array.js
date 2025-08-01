// what is array 
// An array in JavaScript is a special variable used to store multiple values in a single variable.
//  Arrays can hold a collection of items, which can be accessed by their numerical index. Arrays are dynamic, 
// meaning you can add, remove, or change elements at any time.

// You can create an array in several ways:

// Literal syntax
let fruits = ["apple", "banana", "cherry"];

// Constructor syntax
let numbers = new Array(1, 2, 3, 4);

// Empty array
let empty = [];

// Why Do We Use Arrays?
// To store a list of values (e.g., names, scores, objects).

// To group related data together for easier management and processing.

// Arrays support powerful methods for filtering, sorting, and transforming collections of data.

// Array Index
// Arrays use zero-based indexing

// The first item’s index is 0, the second is 1, and so on.
let colors = ["red", "blue", "green"];
console.log(colors[0]); // "red"
console.log(colors[2]); // "green"
console.log(colors.length); // 3


// Some common array methods include:

// push() //: Add an item to the end

// pop() //: Remove the last item

// shift() //: Remove the first item

// unshift() //: Add items to the start

// slice() //: Get a portion of an array

// splice() //: Add/Remove items by index

// forEach() //: Run a function for every item

// map() //: Transform items to a new array

// filter() //: Get items matching a condition

// reduce() //: Accumulate all items into one value

// find() //: Get the first item that matches a condition

// includes() //: Check if item exists


// Declare a sample array
let arr = [1, 2, 3, 4, 5];

// length – Get the number of elements
console.log(arr.length); // 5

// toString – Convert to comma-separated string
console.log(arr.toString()); // "1,2,3,4,5"

// join – Join with a custom separator
console.log(arr.join('-')); // "1-2-3-4-5"

// push – Add elements to the end
arr.push(6);
console.log(arr); // [1,2,3,4,5,6]

// pop – Remove last element
arr.pop();
console.log(arr); // [1,2,3,4,5]

// shift – Remove first element
arr.shift();
console.log(arr); // [2,3,4,5]

// unshift – Add elements at the start
arr.unshift(1);
console.log(arr); // [1,2,3,4,5]

// concat – Merge arrays
let arr2 = [6,7];
let combined = arr.concat(arr2);
console.log(combined); // [1,2,3,4,5,6,7]

// slice – Get a section
console.log(arr.slice(1,4)); // [2,3,4]
// slice(1, 4) means:
// Start from position 1 (counting from 0), include this element.
// Stop before position 4, don’t include this one.
// So you get the elements at positions 1, 2, and 3.

// splice – Add/remove elements at any position
arr.splice(2, 1, 999);
console.log(arr); // [1,2,999,4,5]

// forEach – Run a function for every item
arr.forEach((item, idx) => console.log(item)); // 1 2 999 4 5

// map – Create a new array by transforming values
let doubled = arr.map(x => x * 2);
console.log(doubled); // [2,4,1998,8,10]

// filter – Filter values matching a condition
let evens = arr.filter(x => x % 2 === 0);
console.log(evens); // [2,4]

// reduce – Accumulate to a single result
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum); // sum of elements

// find – First value matching condition
let bigNum = arr.find(x => x > 100);
console.log(bigNum); // 999

// findIndex – Index of first matching value
let idx = arr.findIndex(x => x === 999);
console.log(idx); // 2

// includes – Check if value exists
console.log(arr.includes(4)); // true

// indexOf – Index of value
console.log(arr.indexOf(4)); // 3

// reverse – Reverse the array without modifying original
let reversed = [...arr].reverse();
console.log(reversed); // [5,4,999,2,1]

// sort – Sort the array without modifying original
let sorted = [...arr].sort((a, b) => a - b);
console.log(sorted); // [1,2,4,5,999]

// some – Check if any element passes the test
console.log(arr.some(x => x > 3)); // true

// every – Check if all elements pass the test
console.log(arr.every(x => x > 0)); // true

// fill – Fill with static value
let arr3 = [1, 2, 3];
arr3.fill(0);
console.log(arr3); // [0,0,0]

// copyWithin – Copy part within itself
let arr4 = [1, 2, 3, 4];
arr4.copyWithin(1, 2);
console.log(arr4); // [1,3,4,4]

// flat – Flatten nested arrays
let nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1,2,3]

// Spread operator (...) – Expand elements
let spreadArr = [...arr, 100];
console.log(spreadArr); // [1,2,999,4,5,100]

// Array destructuring – Unpack values
let [first, second, ...rest] = arr;
console.log(first, second, rest); // 1 2 [999,4,5]

// Arrays are objects
console.log(typeof arr); // "object"

// Array.isArray – Test if value is array
console.log(Array.isArray(arr)); // true
console.log(Array.isArray({})); // false




// dont learn all them just try to understand if these are like giving you stress get reasearch on sigle one of them

// Spread Operator (...)
let arr1 = [1, 2, 3];
console.log(arr1);
let arr12 = [...arr1, 4, 5]; // [1,2,3,4,5]
let arr11 = [arr1, 4, 5]; // [[1,2,3],4,5]
console.log(arr12);
let str = "hello";
let chars = [...str]; // ['h', 'e', 'l', 'l', 'o']
let chars1 = [...str]; // ['hello']
console.log(chars);




// Destructuring
// Destructuring lets you unpack values from arrays

// An array with some values
const fruitss = ["Apple", "Banana", "Cherry", "Date"];

// Destructuring assignment: unpack elements into variables
const [firstt, secondd, third] = fruitss;

console.log(firstt);  // Output: Apple
console.log(secondd); // Output: Banana
console.log(third);  // Output: Cherry

// You can skip elements by leaving blank spots with commas
const [a, , c] = fruitss;
console.log(a, c);   // Output: Apple Cherry

// Use the rest operator to collect remaining elements
const [head, ...tail] = fruitss;
console.log(head);   // Output: Apple
console.log(tail);   // Output: ["Banana", "Cherry", "Date"]

// You can also assign default values if elements are missing
const [x = "Default", y = "Default", z = "Default", w = "Default", v = "Default"] = ["A", "B"];
console.log(x, y, z, w, v); // Output: A B Default Default Default
