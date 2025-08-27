// async and await

//async function


// async function greet(){
//     throw "WEAK";
//     return "hello!";
// } 

// greet()
// .then((result) => {
//     console.log("promise is fullfilled");
//     console.log("result was " , result);
// })
// .catch((err) => {
//    console.log("promise is rejected with error" , err);
// });

// let arro = async () => {
//     return 5;
// };

//=================================================================================================
//await = >  pause 

// function getnum(){
//    return new Promise((resolve , reject) =>{
//     setTimeout(() => {
//         let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     },1000);
//    });
// }

// async function res() {
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
// }



// colour one 

// let h1  =  document.querySelector('h1');

// function colourchange(colour , delay){
//   return new Promise((resolve)=>{
//      setTimeout(()=>{
//       h1.style.color = colour;
//       resolve();
//     } , delay);
    
//   });
// }


// async function result() {
//     await colourchange("red" , 1000);
//     await colourchange("green" , 1000);
//     await colourchange("blue" , 1000);
//     await colourchange("yellow" , 1000);
//     await colourchange("red" , 1000);
// }


// result();


//handling rejection 

// use try and catch to prevent error in between 