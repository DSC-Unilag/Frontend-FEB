//Declare variables
const button = document.querySelector("button");
const closeButton = document.getElementById("closeButton");
const newTodoBlock = document.getElementsByClassName("newTodoBlock")[0];
const todoText = document.getElementById("todoText");
const form = document.querySelector("form");
const categorySelected = document.getElementById("todoCategory");
const categoryHeader = document.getElementsByClassName("todoCategoryHeader")[0];
const all = document.getElementById("allNav");
const personal = document.getElementById("personalNav");
const work = document.getElementById("workNav");
const home = document.getElementById("homeNav");
const TodosList = document.getElementById("TodosList");
const logout = document.getElementById("logout");
//Day 12 task
const todoDeadlineDate = document.querySelector("input[type=date]");
const todoDeadlineTime =  document.querySelector("input[type=time]");
//
const allDeadlines = document.getElementsByClassName("deadline");
const todoTitle = document.getElementsByClassName("todoTitle");
//
closeButton.addEventListener("click", () => {
    newTodoBlock.classList.remove("newTodoBlockActive");
    button.style.display = "initial";
});
const addTodo = () => {
    newTodoBlock.classList.add("newTodoBlockActive");
    button.style.display = "none";
}

button.addEventListener("click", addTodo);
//Confirm if user wants to Log out
logout.addEventListener("click", (e) => {
    if(!(confirm("Are you sure you want to Logout?"))){
        e.preventDefault();
    }
});
//Get Current Time
const currentTime = () => {
    const currentTime = new Date();
    const currentTimeDigits = Date.parse(currentTime);
    return currentTimeDigits;
}
//What to do when todo form is submitted
const formSubmit = (e) => {
     e.preventDefault();
    const currentTimeDigits = currentTime();
    const todoTime = new Date(todoDeadlineDate.value + " " + todoDeadlineTime.value);
    const todoTimeDigits = Date.parse(todoTime);
    if(currentTimeDigits >= todoTimeDigits){
        //Alert Error messsage if user selected an earlier date as deadline for todo
       alert("Enter a future date");  
    }else{
        newTodoBlock.classList.remove("newTodoBlockActive");
        button.style.display = "initial";
        const newTodo = document.createElement("li"); //Create a new list element
        newTodo.innerHTML = `<span class='todoTitle'>${todoText.value}</span>` +
        "<span title='Remove Todo' class='delete'>&#128465;</span>" +
        "<span class='complete' title='Completed'>&#10004;</span><br>" +
        `<span class='deadline'>${todoDeadlineDate.value} ${todoDeadlineTime.value}</span>`; 
        //Input values from form into list element
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
form.addEventListener("submit", formSubmit);
//Ensuring only todos on a particular category are displayed when category is clicked
const filter = (e) => {
    const category = e.target.classList[1];
    const lis = document.querySelectorAll("li");
    for (let li of lis) {
        if(li.classList.contains(`${category}color`)){
            li.style.display = "block";
        }else{
            li.style.display = "none";
        }
    }
}
personal.addEventListener("click", filter);
home.addEventListener("click", filter); 
work.addEventListener("click", filter); 
all.addEventListener("click", () => {
    categoryHeader.innerText = "all todos";
    const lis = document.querySelectorAll("li");
    for(let todo of lis){
        todo.style.display = "block";
    }
});
//
//Day15 task 
//Deleting and Completing Todos
const deleted = (e) => {
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
TodosList.addEventListener("click", deleted);
const overdueAlert = () => {
    for(var i = 0; i < allDeadlines.length; i++){
        const currentTimeDigits = currentTime();
        const todoTime = new Date(allDeadlines[i].innerText);
        const todoTimeDigits = Date.parse(todoTime);
        //Compare Todo Deadline with Current Time
        if(currentTimeDigits >= todoTimeDigits){
            //Change Todo Background Color to Red and text Color to white if Deadline has been met
            todoTitle[i].parentNode.style.backgroundColor = "red";
            todoTitle[i].parentNode.style.color = "white";
            todoTitle[i].nextSibling.style.color = "white";
            //alert a message saying a particular todo is overdue
            alert(`${todoTitle[i].innerText} is overdue`);
        }
    }
}
setInterval(currentTime,1000);
setInterval(overdueAlert,30000);
overdueAlert();
