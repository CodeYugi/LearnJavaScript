// object 
// object is something where we can storevariable and use whenever we need and add or remove the variable in object 
// or you can say An object is a special box in JavaScript
//  where you can keep things using “name: value” pairs. 
// You can add, use, or remove things, and each thing is labeled by a name so you can find it easily

//  syntax

const toyBox = {
  car: "red car",
  bear: "teddy bear",
  blocks: "wooden blocks",
  anime: "goku",
  value: 78
};

console.log(toyBox); // print full object 

// if you need specific varible so use 
// NameOfObject.NameofThatVariable
console.log(toyBox.anime); // print only anime value which is in object toybox


// if you wanna add something in object so 
toyBox.name = "yugi";
console.log(toyBox);


// if you wanna swap the value
//same way you add just use that variable 
console.log(toyBox.anime); // for make sure it swap now output is goku
toyBox.anime = "naruto"; // we swap to naruto 
// now anime change to goku to naruto
console.log(toyBox.anime); // naruto 


// we can use and add and perform diffrent task 
let result =  toyBox.value + 10;
console.log(result);


// now how to delete from object 
// best way use delete 
console.log(toyBox.name); //  before performing delete lets print first to check
delete toyBox.name; // delete the varible from the object 
console.log(toyBox.name); //  output is undefined means sucessfully deleted 

// even we can put array 
// what is array 
// An array in JavaScript is like a long train with lots of cars,
//  and you can put anything you want in each car—numbers, words, even other objects!
//  It's a special box that can hold many values under one name, and each value has a number (called an index) 
// to tell its place in the line

// syntax of array 
const colors = ["red", "blue", "green"];

// adding array in object 
const myBox = {
  letters: ['A', 'B', 'C'],
  info: {
    owner: "Alex",
    color: "blue"
  }
};
console.log(myBox.letters[0]); // Shows: A
console.log(myBox.info.owner); // Shows: Alex


// Objects with Actions (Methods)
// In JavaScript, an object is a box that can hold named values (called properties) and
//  actions (called methods). Properties store data about the object, and 
// methods are functions inside the object that let it do things. 
// You use methods by calling them with object.method()

const person = {
  firstName: "Yugi",      
  lastName: "Tyagi",        
  // method (action)
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());  // Output: Yugi Tyagi

// same thing but shorter modern js 

const person2 ={
    firstname1: "Yugi",
    secondname1: "Arhant",
    fun(){
        console.log( person2.secondname1 + " is second name of " + person2.firstname1);
    }
}
person2.fun();

//  we can check Property Existence
console.log(toyBox);
console.log("anime" in toyBox); 
console.log(Object.values(toyBox).includes("red car"));


// more things we will cover in master js repo