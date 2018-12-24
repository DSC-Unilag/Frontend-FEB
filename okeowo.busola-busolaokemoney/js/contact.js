
var isMessagesInLocalStorage = (localStorage.getItem('messages') == null)

const contactForm = document.getElementById('contactForm')
const submitButton = document.querySelector('[type="submit"]')

function validateFormEntry() {
	var name = document.getElementById('name').value
	var email = document.getElementById('email').value
	var messageText = document.getElementById('message').value
	
	var isValid;
	if ((name === "") && (email === "") && (messageText === "")) {
		isValid = false
		alert("You must fill the form first, You don\'t wanna send me an empty message do you?")
	} 
	if (isValid) { saveMessage() } else { console.log('complete the form') }
}

function saveMessage(e) {
	
	var now = new Date()
	var name = document.getElementById('name').value
	var email = document.getElementById('email').value
	var messageText = document.getElementById('message').value
	var id = `msg${now.toISOString()}`
	
	var message = {
		id: id,
		name: name,
		email: email,
		messageText: messageText
	}

	if (isMessagesInLocalStorage) {
		var messages = []
		messages.push(message)
		localStorage.setItem('messages', JSON.stringify(messages))
	} else {
		var messages = JSON.parse(localStorage.getItem('messages'))
		messages.push(message)
		localStorage.setItem('messages', JSON.stringify(messages))
	}
	
	alert("Thank You For Contacting me I\'ll get back to you soon")
	contactForm.reset()

	fetchMessage()
	e.preventDefault()
	
}

function fetchMessage() {
	const messages = JSON.parse(localStorage.getItem('messages'))
	var messageList = document.getElementById('contactFormEntry')
	messageList.innerHTML = ""

	for (var i = messages.length - 1; i >= 0; i--) {
		var id = messages[i].id
		var name = messages[i].name
		var email = messages[i].email
		var messageText = messages[i].messageText

		messageList.innerHTML += `<tr>
									<td>${name}</td>
									<td><a href="mailto:${email}">${email}</a></td>
									<td>${messageText}</td>
									<td>
										<button class="btn" type="submit" onclick="deleteMessage('${id}', '${email}')">Delete</button>
									</td>
								</tr>`
	}
}

function deleteMessage(id, email) {
	var messages = JSON.parse(localStorage.getItem('messages'))
	for (var i = messages.length - 1; i >= 0; i--) {
	    if(id === messages[i].id && email === messages[i].email) {
	    	x = messages.pop(i)
	    }
	}
	localStorage.setItem('messages', JSON.stringify(messages))
	console.log('Message Deleted', x)
	
	fetchMessage()
}


function formReset() {
	document.getElementById('name').value = ""
	document.getElementById('email').value = ""
	document.getElementById('message').value = ""
}

contactForm.addEventListener('submit', validateFormEntry)
if (!isMessagesInLocalStorage) {
	window.addEventListener('load', fetchMessage)
}

