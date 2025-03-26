
let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");



button.addEventListener("click",()=>{
 let li = document.createElement("li");
 li.innerText = input.value;
 ul.appendChild(li);
 input.value ="";
});