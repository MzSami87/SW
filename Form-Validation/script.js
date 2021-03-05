const form = document.getElementById('form');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


function processFormData(e) {
    console.log(e);
}


//Event Listener
form.addEventListener('submit', processFormData)