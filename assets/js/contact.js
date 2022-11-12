let form = document.getElementById('contactForm');

// Nom
// console.log(form.name);
form.name.addEventListener('change', function(){
    validName(this);
});

const validName = function(inputName){
    let nameRegex = new RegExp ('^[a-zA-Z ]+$');

    let testName = nameRegex.test(inputName.value);
    // console.log(testName);
}

// Email
// console.log(form.email);
form.email.addEventListener('change', function(){
    validEmail(this);
});

const validEmail = function(inputEmail){
    let emailRegex = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

    let testEmail = emailRegex.test(inputEmail.value);
    // console.log(testEmail);
}

// Message 
// console.log(form.message);
form.message.addEventListener('change', function(){
    validMessage(this);
});

const validMessage = function(textareaMessage){
    let messageRegex = new RegExp('^[a-zA-Z1-9]+$');

    let testMessage = messageRegex.test(textareaMessage.value);
    // console.log(testMessage);
}  