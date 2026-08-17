let input = document.getElementById("input");
let button = document.getElementById("button");
let List = document.getElementById("todoList");
let todoList = [];
function render(){
    List.innerHTML = "";
    let template = document.getElementById("todoTemplate");
    todoList.forEach(function(todoWork){
       let clone = template.content.cloneNode(true);
      clone.querySelector("li").textContent = todoWork;
      List.appendChild(clone);
    });
};
button.addEventListener("click",function(){
   let value = input.value;
if(value !== ""){
    todoList.push(value);
    localStorage.setItem("todoList",JSON.stringify(todoList));
    input.value = "";
};
render();
});
let savedtodoList = localStorage.getItem("todoList");
if(savedtodoList){
    todoList = JSON.parse(savedtodoList);
};
render();
