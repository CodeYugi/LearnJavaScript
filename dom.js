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





