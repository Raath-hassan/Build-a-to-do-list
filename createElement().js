let input = document.getElementById("input");
let button = document.getElementById("button");
let List = document.getElementById("todoList");
let todoList = [];
function render(){
    List.innerHTML = "";
    todoList.forEach(function(todoWork){
       let li = document.createElement("li")
      li.textContent = todoWork;
      List.appendChild(li);
    });
};
button.addEventListener("click",function(){
   let value = input.value;
if(value !== ""){
    todoList.push(value);
    input.value = "";
};
render();
});