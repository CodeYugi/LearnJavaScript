// this keyword
const skills = {
     skill1: "javaScript" ,
     skill2: "html" ,
     skill3: "css" ,
     skill4: "c++" ,
     skill5: "node.js" ,
     skill6: "react" ,
     myfav(){
        let fav = (this.skill6 + " "  +" is my fav skill");
        return fav;
     }
}

console.log(skills.myfav());



// this with arrow function

const skills2 = {
  skill1: "JavaScript",
  skill6: "React",

  myfav() {
    const arrowFn = () => {
      return this.skill1 + " is my fav skill";
    };
    return arrowFn();
  }
};

console.log(skills2.myfav());
 