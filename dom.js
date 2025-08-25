// DOM 

let tag = document.getElementById("h1tag");
console.log(tag);

let txt = document.querySelector(".text");
console.log(txt.parentNode);

let lists = document.querySelector(".list");
console.log(lists.firstChild);
console.log(lists.firstElementChild);
console.log(lists.lastElementChild);
console.log(lists.childNodes);

let secondsibs = document.querySelector(".second");
console.log(secondsibs.previousElementSibling);
console.log(secondsibs.nextElementSibling);

let thirdsibs = document.querySelector(".third");
console.log(thirdsibs.previousElementSibling);
console.log(thirdsibs.nextElementSibling);


let div = document.createElement("div");
div.innerHTML = ("<p>HI I CREATED div FROM JAVA SCRIPT");
  div.id = "phraaa";
  div.firstChild.id = "first";
  div.className = "classname";
//   document.body.appendChild(div);

console.log(div);



let menu = document.getElementById("menu");

let list = document.createElement("li");
list.innerHTML = "LogOut";

let list2 =  document.createElement("li")
list2.innerHTML = "added"
// menu.appendChild(list);
// menu.append(list2, list);

// menu.prepend(list2);

menu.insertAdjacentHTML("beforeend" , "<li>before end</li>");
menu.insertAdjacentHTML("beforebegin", "<li>before begin</li>");
menu.insertAdjacentHTML("afterbegin" , "<li>afterbegin</li>");
menu.insertAdjacentHTML("afterend" , "<li>afterend</li>");


// let newnode = menu.cloneNode();
// let newnode = menu.cloneNode(false);
let newnode = menu.cloneNode(true);
console.log(newnode);


menu.removeChild(menu.lastElementChild);


menu.insertBefore( newnode ,menu.firstElementChild)



// querySelector so that we can select css only for single collector
console.log(document.querySelector('h1'));






