var button = document.querySelector("button");
var closeButton = document.getElementById("closeButton");
var newTodoBlock = document.getElementsByClassName("newTodoBlock")[0];
var todoText = document.getElementById("todoText");
var form = document.querySelector("form");
var allUL = document.getElementById("allUL");
var personalUL = document.getElementById("personalUL");
var homeUL = document.getElementById("homeUL");
var workUL = document.getElementById("workUL");
var categorySelected = document.getElementById("todoCategory");
//Day 12 task
var todoDeadlineDate = document.querySelector("input[type=date]");
var todoDeadlineTime =  document.querySelector("input[type=time]");
//
button.addEventListener("click", addTodo);
form.addEventListener("submit", formSubmit);
closeButton.addEventListener("click", function(){
    newTodoBlock.classList.remove("newTodoBlockActive");
    button.style.display = "initial";
});
function addTodo(){
    newTodoBlock.classList.add("newTodoBlockActive");
    button.style.display = "none";
}
function formSubmit(e){
    e.preventDefault();
    newTodoBlock.classList.remove("newTodoBlockActive");
    button.style.display = "initial";
    // console.log(todoText.value);
    //More codes to come
    var newTodo = document.createElement("li");
    var textNode = document.createTextNode(todoText.value);
    newTodo.appendChild(textNode);
    allUL.appendChild(newTodo); 
    if(categorySelected.value === "personalTodo"){
            personalUL.appendChild(newTodo.cloneNode(true));
        } else if(categorySelected.value === "homeTodo"){
            homeUL.appendChild(newTodo.cloneNode(true));
        } else if(categorySelected.value === "workTodo"){
            workUL.appendChild(newTodo.cloneNode(true));
        }
}

