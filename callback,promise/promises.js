// promises => is an object 

//resolve and reject 


// function databs(data){
//     return new Promise((resolve , reject)=>{
//         let internet = Math.floor(Math.random()*10) + 1;
//         if(internet > 4){
//             resolve("data is saved");
//         }else{
//             reject("data is not saved");
//         }
//     });
// }

// ===============================================================================================

//then() and catch()  => method of promise 
// if promise state is that promise is fullfiled if we need that after fullfiled we need some work so we use .then()
// if promise state is that promise is rejected if we need that after rejected we need some work so we use .catch()


// function databs(data){
//     return new Promise((resolve , reject)=>{
//         let internet = Math.floor(Math.random()*10) + 1;
//         if(internet > 4){
//             resolve("data is saved");
//         }else{
//             reject("data is not saved");
//         }
//     });
// }

// let request = databs("yugi");  // requets => promise object
// request.then(()=>{
//     console.log("your data is fullfiled");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("your data is rejected")
//     console.log(request);
// });




//==============================================================================================================

//promise chaining


// function databs(data){
//     return new Promise((resolve , reject)=>{
//         let internet = Math.floor(Math.random()*10) + 1;
//         if(internet > 4){
//             resolve("data is saved");
//         }else{
//             reject("data is not saved");
//         }
//     });
// }

//   databs("yugi")  
// .then(()=>{
//     console.log("your data is fullfiled");
//     databs("yugi2")
//     .then(()=>{
//         console.log("data2 is fullfiled")
//     })
//     .catch(()=>{
//         console.log("data2 is rejected")
//     })
// })
// .catch(()=>{
//     console.log("your data is rejected")

// });  //  this is not best way 


//try this 

// let request = databs("yugi");  // requets => promise object
// request.then(()=>{
//     console.log("your data is fullfiled");
//    return databs("yugi2");
// })
// .then(()=>{
//     console.log("date2 is fullfiled")
//     return databs("yugi3");
// })   
// .then(()=>{
//     console.log("data3 is fullfiled");
// })
// .catch(()=>{
//     console.log("your data is rejected")
 
// });
// this is know as prmoise chaining 


//===================================================================



// function databs(data){
//     return new Promise((resolve , reject)=>{
//         let internet = Math.floor(Math.random()*10) + 1;
//         if(internet > 4){
//             resolve("data is saved");
//         }else{
//             reject("data is not saved");
//         }
//     });
// }

// let request = databs("yugi");  
// request.then((result)=>{
//     console.log("your data is fullfiled" ,  result);
//     console.log(result);
//    return databs("yugi2");
// })
// .then((result)=>{
//     console.log("date2 is fullfiled" ,  result)
//     console.log(result);
//     return databs("yugi3");
// })   
// .then((result)=>{
//     console.log("data3 is fullfiled",  result);
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("your data is rejected", error)
//  console.log(error);
// });


//====================================================================================================

//applying promises in callbacks hell

let h1 = document.querySelector('h1');

function colurchange(colur , delay){
    return new Promise((resolve , reject)=>{
         setTimeout(() => {
        h1.style.color = colur;
        resolve("colur changed!")
    }, delay);
    })
   
}
colurchange("red", 1000)
.then(()=>{
    console.log("colour is changed to red");
    return colurchange("orange" , 1000 );
})
.then(()=>{
    console.log("orange colur is changed");
    return colurchange("green" , 1000);
})
.then(()=>{
  console.log("colour is changed to green");
  return colurchange("red" , 1000);
})
.then(()=>{
    console.log("colour is changed to red")
})