// practice callbacks 
console.log("i ordered pizza");

setTimeout(() => {
    console.log("pizza is ready");
}, 5000);

console.log("playing Minecraft");


// can you guess the output ?
// i ordered pizza 
// playing minecraft 
// pizza is ready (but this output come after 5 second because of settimeout 5000)

// we dont use this syntax for this type of task because 
// hard to read, hard to handle errors, easy to make bugs.

// for example

setTimeout(() => {
    console.log("step one done");
    setTimeout(() => {
        console.log("step two done");
        setTimeout(() => {
            console.log("step three done");
            setTimeout (() => {
                console.log("step four done");
            } , 2000 );
        }, 2000 );
    },  2000 );
}, 2000 );


//-------------------------------------------------------------------------------------


function doTask(name, ms, done) {
  setTimeout(() => {
    console.log(name, "done");
    done(); // call when finished
  }, ms);
}

doTask("Wash", 500, () => {
  doTask("Cook", 400, () => {
    doTask("Eat", 300, () => {
      console.log("All done");
    });
  });
});
