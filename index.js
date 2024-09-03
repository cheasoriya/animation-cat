console.log(2+3);
console.log("First Day of Javascript")

// let vs var
let a = 5;
console.log('a:', a);

var b = 10;
console.log('b:', b);

function add(){
  var num = 1; //function scrop
  if (true) {
    let num = 2; //BLock Scrop
    console.log('num:', num);
  }
  console.log('num outside if statement',num)
}

add();

let c; //declare
let d = 3; //initailize a variable
c=20; //assign variable


//naming convention
//Camel Test
let firstName;
//snake test
let first_name;

//case-sensitive 
let y;
let Y;

let m = 10;

m != 10 ? console.log('No Config') : console.log(m);

const PI =3.14; //អូខេអ្នកគ្រូ


let image = document.getElementById('profile');
let content = document.getElementById("content");
let btnYes = document.getElementById("btnyes");
let btnNo = document.getElementById("btnno");
const happyCat = new Audio("/happy-happy-happy-cat.mp3");
const sadCat = new Audio("/sad-meow-song.mp3");
console.log(image);

image.src = "https://i.pinimg.com/564x/9d/4a/49/9d4a49b2b2b9392d3f844c4dbcff52d6.jpg";
image.style.height = "200px";

content.innerHTML = "Do You Love Me?";

btnYes.addEventListener("click",()=>{
  content.innerHTML = "I Love You Too";
 
  image.src = "https://media.tenor.com/UTrLSr85tYEAAAAM/happy-cat-cat.gif";
  sadCat.pause();
  happyCat.currentTime = 0;
  happyCat.play();
});

btnNo.addEventListener("click",()=>{
  content.innerHTML = "Hik Hik Hik Ginchana ning ning ning";
  image.src = "https://media.tenor.com/8Z2XV772ZlwAAAAi/banana-cat-banana-cat-crying.gif";
  happyCat.pause();
  sadCat.currentTime = 0;
  sadCat.play();
})
