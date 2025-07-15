
let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");



button.addEventListener("click",()=>{


if(input.value.trim()){
   ul.innerHTML +=`
   <li>
   <span>${input.value}</span>
   <div>
   <button onclick="editTask(this)"> <i class="ri-edit-2-fill"></i> </button>
   <button onclick="deleteTask(this)">  <i class="ri-delete-bin-6-fill"></i> </button>
   </div>
   </li>`
}
 input.value ="";
});


function deleteTask(btn){
   btn.closest("li").remove(); 
};

function editTask(btn){
   const span = btn.closest("li").querySelector("span");
   const newValue = prompt("edit Task:", span.textContent);
   if(newValue !== null){
      span.textContent = newValue.trim();
   }
};






