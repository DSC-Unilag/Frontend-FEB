
function testResults(form){
  var name = form.name.value;
  var email = form.email.value;
  var message = form.message.value;
  var formName = name; 
  if(name.length===0 || email.length===0 || message.length === 0){
    alert("please fill the boxes");
  }else{
  alert("Thank you, your request will be processed shortly " + formName);
  }
}

function resetForm(form){
  form.name.value = "";
  form.email.value ="";
  form.message.value = "";
}
