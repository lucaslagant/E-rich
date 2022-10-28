let form = document.getElementById('form1');

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

// Mot de passe 
// console.log(form.password);
form.password.addEventListener('change', function() {
    validPassword(this);
});

const validPassword = function(inputPassword) {
    let passwordRegex = new RegExp ('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
    
    let testPassword = passwordRegex.test(inputPassword.value);
    // console.log(testPassword);
}
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
});