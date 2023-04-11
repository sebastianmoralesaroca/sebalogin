var cont1 = document.getElementById('cont1');
var cont2 = document.getElementById('cont2');
var signIn = document.getElementById('signIn');
var signUp = document.getElementById('signUp');
signIn.addEventListener('click', function () {
    var userIn = document.createElement('input');
    userIn.id = 'userIn';
    userIn.type = 'text';
    userIn.placeholder = "User Name";
    cont2.appendChild(userIn);
    var passwordIn = document.createElement('input');
    passwordIn.id = 'passwordIn';
    passwordIn.type = 'password';
    passwordIn.placeholder = "Password";
    cont2.appendChild(passwordIn);
    var btnIn = document.createElement('button');
    btnIn.id = 'btnIn';
    btnIn.type = 'submit';
    btnIn.innerHTML = "SIGN IN";
    cont2.appendChild(btnIn);
    btnIn.addEventListener('click', function () {
        if (userIn.value === "seba") {
            alert("hola seba !");
        }
        else {
            alert("tu no eres seba !");
        }
    });
});
function funSignUp() {
    var passwordUp2 = document.createElement('input');
    passwordUp2.type = 'text';
    passwordUp2.id = 'repeatPassword';
    passwordUp2.placeholder = "Repeat Password";
    cont2.appendChild(passwordUp2);
}
/*
function funAutentications () {
    if (userIn === "seba" || passwordIn === "1") {
        alert("hola seba") ;
    } else {
        alert("no eres seba") ;
    }
}
*/
