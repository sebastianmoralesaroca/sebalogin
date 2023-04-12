const contPrincipal = document.getElementById('contPrincipal') ;
const cont1 = document.getElementById('cont1') ;
const cont2 = document.getElementById('cont2') ;
const signIn = document.getElementById('signIn') ;
const signUp = document.getElementById('signUp') ;


const userIn = document.createElement('input') ;
const passwordIn = document.createElement('input') ;
const btnIn = document.createElement('button') ;


function funSignIn () {
    userIn.id = 'userIn' ;
    userIn.type = 'text' ;
    userIn.placeholder = "User Name" ;
    cont2.appendChild( userIn ) ;

    passwordIn.id = 'passwordIn' ;
    passwordIn.type = 'password' ;
    passwordIn.placeholder = "Password" ;
    cont2.appendChild( passwordIn ) ;

    btnIn.id = 'btnIn' ;
    btnIn.type = 'submit' ;
    btnIn.innerHTML = "SIGN IN" ;
    cont2.appendChild(btnIn) ;
}


const userUp = document.createElement('input') ;
const passwordUp1 = document.createElement('input') ;
const passwordUp2 = document.createElement('input') ;
const btnUp = document.createElement('button') ;


function funSignUp () {
    userUp.id = 'userUp' ;
    userUp.type = 'text' ;
    userUp.placeholder = "Create Name User" ;
    cont2?.appendChild(userUp) ;

    passwordUp1.id = 'passwordUp1' ;
    passwordUp1.type = 'password' ;
    passwordUp1.placeholder = "Create Password"
    cont2?.appendChild(passwordUp1) ;

    passwordUp2.id = 'passwordUp2' ;
    passwordUp2.type = 'password' ;
    passwordUp2.placeholder = "Repeat Password" ;
    cont2.appendChild(passwordUp2) ;

    btnUp.id = 'btnUp' ;
    btnUp.type = 'submit' ;
    btnUp.innerHTML = "SIGN UP" ;
    cont2?.appendChild(btnUp) ;

}


funSignUp() ;
btnUp.addEventListener('click', () => {
    if (passwordUp1.value.length < 8) {
        alert("You need a password with minimum 8 characters.")
    } else if (passwordUp1.value === passwordUp2.value) {
        alert("Hello " + userUp.value + ", your user was created!");
    } else {
        alert("The password do not match."); ;
    }
})


signIn.addEventListener('click', () => {
    cont2.removeChild(userUp) ;
    cont2.removeChild(passwordUp1) ;
    cont2.removeChild(passwordUp2) ;
    cont2.removeChild(btnUp) ;
    funSignIn() ;
    console.log("Click Sign In") ;
    
    btnIn.addEventListener("click", () => {
        if (userIn.value === userUp.value || passwordIn === passwordUp1 || passwordIn === passwordUp2) {
            alert("Hello " + userIn.value + ", Welcome!") ;
        } else {
            alert("You user name and your password do not match with a user register.");
        }
    })
})


signUp.addEventListener ('click', () => {
    cont2.removeChild(userIn) ;
    cont2.removeChild(passwordIn) ;
    cont2.removeChild(btnIn) ;
    funSignUp() ;
    console.log("Click Sign Up") ;
})
