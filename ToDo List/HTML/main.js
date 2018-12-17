function get(){
    var username = localStorage.getItem("username");
    document.getElementById("message").innerHTML= `<h3> Welcome ${username} </h3>`
}