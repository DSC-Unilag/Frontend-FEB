//Declare variables
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
var logout = document.getElementById("logout");
//Day 12 task
var todoDeadlineDate = document.querySelector("input[type=date]");
var todoDeadlineTime =  document.querySelector("input[type=time]");
//
var allDeadlines = document.getElementsByClassName("deadline");
var todoTitle = document.getElementsByClassName("todoTitle");
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
//Confirm if user want to Log out
logout.addEventListener("click", function(e){
    if(!(confirm("Are you sure you want to Logout?"))){
        e.preventDefault();
    }
})
//What to do when todo form is submitted
function formSubmit(e){
     e.preventDefault();
    var currentTimeDigits = currentTime();
    var todoTime = new Date(todoDeadlineDate.value + " " + todoDeadlineTime.value);
    var todoTimeDigits = Date.parse(todoTime);
    if(currentTimeDigits >= todoTimeDigits){
        //Alert Error messsage if user selected an earlier date as deadline for todo
       alert("Enter a future date");  
    }else{
        newTodoBlock.classList.remove("newTodoBlockActive");
        button.style.display = "initial";
        var newTodo = document.createElement("li"); //Create a new list element
        newTodo.innerHTML = "<span class='todoTitle'>"+ todoText.value +"</span>" +"<span title='Remove Todo' class='delete'>&#128465;</span><span class='complete' title='Completed'>&#10004;</span><br>" + 
        "<span class='deadline'>" + todoDeadlineDate.value +" "+ todoDeadlineTime.value + "</span>"; //Input values from form into list element
        //Check category selected to determine todo background color
        if (categorySelected.value === "personal"){
            newTodo.classList.add("personalcolor");
        } else if(categorySelected.value === "home"){
            newTodo.classList.add("homecolor");
        } else if(categorySelected.value === "work"){
            newTodo.classList.add("workcolor");
        }
        //Append the new list(li) element into its parent Element(ul) already on the page
        TodosList.appendChild(newTodo);  
        //Clear form values
        todoText.value = "", todoDeadlineDate.value = "", todoDeadlineTime.value = ""; 
    }
}
//Ensuring only todos on a particular category are displayed when category is clicked
personal.addEventListener("click", function(){
    categoryHeader.innerText = "personal todos";
    var lis = document.querySelectorAll("li");
    for(var i = 0; i < lis.length; i++){
        if (!(lis[i].classList.contains("personalcolor"))){
             lis[i].style.display = "none";
        }else{lis[i].style.display = "block";}
    }
});
home.addEventListener("click", function(){
    categoryHeader.innerText = "home todos";
    var lis = document.querySelectorAll("li");
    for(var i = 0; i < lis.length; i++){
        if (!(lis[i].classList.contains("homecolor"))){
            lis[i].style.display = "none";
        }else{lis[i].style.display = "block";}
    }
});
work.addEventListener("click", function(){
    categoryHeader.innerText = "work todos";
    var lis = document.querySelectorAll("li");
    for(var i = 0; i < lis.length; i++){
        if (!(lis[i].classList.contains("workcolor"))){
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
//
//Day15 task 
//Deleting and Completing Todos
TodosList.addEventListener("click", deleted);
function deleted(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure you want to Remove this Todo?')){
            var li = e.target.parentElement;
            TodosList.removeChild(li);
        }
    }else if(e.target.classList.contains("complete")){
        if(confirm('Are you Sure?')){
            alert("Nice work Completing your todo\nKeep it up!");
            var li = e.target.parentElement;
            TodosList.removeChild(li);
        }
    } 
}
//Get Current Time
function currentTime(){
    var currentTime = new Date();
    var currentTimeDigits = Date.parse(currentTime);
    return currentTimeDigits;
}
function overdueAlert(){
    for(var i = 0; i < allDeadlines.length; i++){
        var currentTimeDigits = currentTime();
        var todoTime = new Date(allDeadlines[i].innerText);
        var todoTimeDigits = Date.parse(todoTime);
        //Compare Todo Deadline with Current Time
        if(currentTimeDigits >= todoTimeDigits){
            //Change Todo Background Color to Red and text Color to white if Deadline has been met
            todoTitle[i].parentNode.style.backgroundColor = "red";
            todoTitle[i].parentNode.style.color = "white";
            todoTitle[i].nextSibling.style.color = "white";
            //alert a message saying a particular todo is overdue
            alert(todoTitle[i].innerText + " is overdue");
        }
    }
}
setInterval(currentTime,1000);
setInterval(overdueAlert,30000);
overdueAlert();