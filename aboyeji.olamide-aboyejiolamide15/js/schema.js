var button = document.querySelector("button");
var closeButton = document.getElementById("closeButton");
var newTodoBlock = document.getElementsByClassName("newTodoBlock")[0];
var form = document.querySelector("form");
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
    //More codes to come
}
