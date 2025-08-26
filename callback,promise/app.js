// let h1 = document.querySelector('h1');

// setTimeout(() => {
//     h1.style.color = "red";
// },1000);

// setTimeout(() => {
//     h1.style.color = "yellow";
// },2000);

// setTimeout(() => {
//     h1.style.color = "green";
// },3000);


// function databs(data){
//     let internet = Math.floor(Math.random()*10) + 1;
//     if(internet > 4){
//         console.log("file is saved" , data);
//     } else{
//         console.log("data is not saved due to low internet" , data);
//     }
// }


// ----------------------------------------------------------------------------------------------------------------

function databs(data , saved ,  notsaved){
    let internet = Math.floor(Math.random()*10) + 1;
    if(internet > 4){
        saved();
    } else{
        notsaved();
    }
}

databs("yugi" , 
    ()=>{
    console.log("data is saved");
    databs("yugi2" , ()=>{
        console.log("second data is saved");
        databs("yugi3" , ()=>{
            console.log("third data is saved");
        }, ()=>{
            console.log("third data is not saved ");
        });
    }, ()=>{
        console.log("second data is not saved");
    });
 }, 
    ()=>{
    console.log("data is not saved");
 });


 // ----------------------------------------------------------------------------------------------------------------------------------------------

