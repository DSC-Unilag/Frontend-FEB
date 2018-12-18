//Declare all variables
var button = document.querySelector("button");
var closeButton = document.getElementById("closeButton");
var newTodoBlock = document.getElementsByClassName("newTodoBlock")[0];
var todoText = document.getElementById("todoText");
var form = document.querySelector("form");
var categorySelected = document.getElementById("todoCategory");
var categoryHeader = document.getElementsByClassName("todoCategoryHeader")[0];
var all = document.getElementById("allNav");
var personal = document.getElementById("personalNav");
var work = document.getElementById("workNav");
var home = document.getElementById("homeNav");
var TodosList = document.getElementById("TodosList");
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
    var newTodo = document.createElement("li");
    newTodo.innerHTML = todoText.value + "<span class=hide " + categorySelected.value + "></span>" + "<span title='Remove Todo' class='delete'>&#128465;</span><br>" + 
    todoDeadlineDate.value + " "+ todoDeadlineTime.value;
    if (categorySelected.value === "personal"){
        newTodo.classList.add("personalcolor");
    } else if(categorySelected.value === "home"){
        newTodo.classList.add("homecolor");
    } else if(categorySelected.value === "work"){
        newTodo.classList.add("workcolor");
    }
    TodosList.appendChild(newTodo);
}
personal.addEventListener("click", function(){
    categoryHeader.innerText = "personal todos";
    var lis = document.querySelectorAll("li");
    for(var i = 0; i < lis.length; i++){
        if (!(lis[i].innerHTML.includes('personal=""'))){
             lis[i].style.display = "none";
        }else{lis[i].style.display = "block";}
    }
});
home.addEventListener("click", function(){
    categoryHeader.innerText = "home todos";
    var lis = document.querySelectorAll("li");
    for(var i = 0; i < lis.length; i++){
        if (!(lis[i].innerHTML.includes('home=""'))){
            lis[i].style.display = "none";
        }else{lis[i].style.display = "block";}
    }
});
work.addEventListener("click", function(){
    categoryHeader.innerText = "work todos";
    var lis = document.querySelectorAll("li");
    for(var i = 0; i < lis.length; i++){
        if (!(lis[i].innerHTML.includes('work=""'))){
             lis[i].style.display = "none";
        } else{lis[i].style.display = "block";}
    }
});
all.addEventListener("click", function(){
    categoryHeader.innerText = "all todos";
    var lis = document.querySelectorAll("li");
    for(var i = 0; i < lis.length; i++){
        lis[i].style.display = "block";
    }
});
//Day15 task
TodosList.addEventListener("click", deleted);
function deleted(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
          var li = e.target.parentElement;
          TodosList.removeChild(li);
        }
       }
}
//




