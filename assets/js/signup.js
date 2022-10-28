let form = document.getElementById('form2');

// NOM
// console.log(form.name);
form.name.addEventListener('change', function() {
    validName(this);
});

const validName = function(inputName) {
    let nameRegex = new RegExp ('^[a-zA-Z ]+$');

    let testName = nameRegex.test(inputName.value);
    // console.log(testName);
}

// Prénom
// console.log(form.firstname);
form.firstname.addEventListener('change', function() {
    validFirstname(this);
});

const validFirstname = function(inputFirstName) {
    let firstnameRegex = new RegExp ('^[a-zA-Z ]+$');

    let testFirstname = firstnameRegex.test(inputFirstName.value);
    // console.log(testFirstname);
}

// Email 
// console.log(form.email);
form.email.addEventListener('change', function() {
    validEmail(this);
});

const validEmail = function(inputEmail) {
    let emailRegex = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

    let testEmail = emailRegex.test(inputEmail.value);
    // console.log(testEmail);    
}

// Password 
console.log(form.password)
form.password.addEventListener('change', function() {
    validPassword(this);
});

const validPassword = function(inputPassword) {
    let passwordRegex = new RegExp ('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
    
    let testPassword = passwordRegex.test(inputPassword.value);
    console.log(testPassword);
}
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
});

// Confirm Password 
form.confirmpassword.addEventListener('change', function() {
    validConfirmpassword(this);
});

const validConfirmpassword = function(inputConfirmpassword) {
    let confirmpasswordRegex = new RegExp ('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
    
    let testconfirmpassword = confirmpasswordRegex.test(inputConfirmpassword.value);
    // console.log(testconfirmpassword);
}
 let pw1 = document.getElementById('pw1');
 let pw2 = document.getElementById('pw');

if (pw1 != pw2) {
    document.write("Les mots de passe ne correspondent pas");
}
else{
    document.write("Mot de passe créé avec succés !");
}
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
});
