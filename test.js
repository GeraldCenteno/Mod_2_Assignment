//JavaScript goes here
console.log("Hello, World!")

/* 3 Examples of basic arithmetic in JS */
console.log(3 + 9)
console.log(3 * 9)
console.log(9 % 3)

/* 2 Examples of declaring variables in JS */
let a = 10
var b = 25

/* 2 Examples of using variables in arithmetic operations in JS */
console.log(b / a)
console.log(a - b)

/* experimenting with DOM manipulation */

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});


  