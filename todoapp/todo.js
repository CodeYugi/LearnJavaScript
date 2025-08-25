// so basic add more logic by your side
let clicked = "";
let startbtn = document.getElementById("startbtn");

startbtn.addEventListener('click', () => {
    clicked = "done";

    if (clicked === "done") {

        let todo = [];

        let request = prompt("enter your request");
        console.log(request);

        while (true) {
            if (request === "quit") {
                console.log("quitting app");
                break;
            }

            if (request === "list") {
                for (let task of todo) {
                    console.log(task);
                }
            } else if (request === "add") {
                let task = prompt("pls enter your task");
                todo.push(task);
            }

            request = prompt("enter your request"); 
        }

    }
});
