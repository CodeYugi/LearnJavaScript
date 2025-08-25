/* Scope determines the accessibility (visibility) of variables.

 # JavaScript variables have 3 types of scope:

1 Block scope
2 Function scope
3 Global scope

*/

//Block scope 
// what i mean by accessibility of variable 
// that sentence make sense that something related to access of variable 

// lets dive into it with an example 

// lets do with function 
//simple add function

function add(value1 , value2){
    let result  =  value1 + value2; // defining result 
    
    return result;
}

add(2 ,2 );
// console.log(result); // output will be result is not defined


// same function but diffrent location of console.log

function add2(valuee1 , valuee2){
    let result2 = valuee1 + valuee2; // defining result2 
    console.log(result2); // this show the output 4
    return result2;
}

add2(2,2); // call



// by the knowledge of these two example add and add2 function 
// there is simple thing like we in add function we can't access result out side the function 
// but when we put console.log inside it become accessable so 
// so this is block scope 
// but what make that block scope so why we can't access out side function ? i will answer soon how to do that by the way try yourself no rocket science 
// now  we take an another example with var let and const try to access varible declare inside the function and we access out the function

// example with let 

function multiply1( a , b){
    let c = a * b; // defining c
   return c;
}
   multiply1( 5 , 5);
//    console.log(c); // c is not defined 

// so let is a block scope hense proof 

// example with const

function multiply2( d , e ){
 const  f = d * e; // defining f
   return f;
}
   multiply2( 5 , 5);
//    console.log(f); // f is not defined 

   // hense proof const is also block scope 

// now with var 

function multiply2( g , h ){
 var  i = g * h; // defining i
   return i;
}
   multiply2( 5 , 5);
//    console.log(i); // i is not defined  lol 

   // but here var is not block scope it is function scope


// wait now we will clear whats going on 
// i am right you thinking what is diffrent between block scope and function scope 

// lets clear your mind 

{
  let x = 2;
}
// x can NOT be used here (block scope)

{
  const  x = 2;
}
// x can NOT be used here (block scope)

{
  var x = 2;
}
// x can  be used here (not a block block scope)

// any thing inside {} not like only in function 
// try with if else 

// example 
function demo() {
  if(true){
    var a = 1;      // function scoped
    let b = 2;      // block scoped
    const c = 3;    // block scoped
  }
  console.log(a);   // 1, accessible here
//   console.log(b);   // ReferenceError, not accessible here
//   console.log(c);   // ReferenceError, not accessible here
}
demo();

// last scope 
// Global scope

// as name suggest like you can use globally all over the code

// example 
var globalVar = "I am global";
let globalLet = 42;
const globalConst = true;

function showGlobals() {
  console.log(globalVar);    // Accessible
  console.log(globalLet);    // Accessible
  console.log(globalConst);  // Accessible
}

showGlobals();
console.log(globalVar);      // Accessible
console.log(globalLet);      // Accessible
console.log(globalConst);    // Accessible

//lexical scope

function outerfn(){
  let a = 1;
  let b = 2;
  function innerfn(){
    return console.log(a+b);
  }
  innerfn();
  return "hi";
}
console.log(outerfn());