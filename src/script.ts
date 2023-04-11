const contPrincipal = document.getElementById('contPrincipal') ;
const cont1 = document.getElementById('cont1') ;
const cont2 = document.getElementById('cont2') ;
const signIn = document.getElementById('signIn') ;
const signUp = document.getElementById('signUp') ;


function funSignIn () {
    const userIn = document.createElement('input') ;
    userIn.id = 'userIn' ;
    userIn.type = 'text' ;
    userIn.placeholder = "User Name" ;
    cont2.appendChild( userIn ) ;

    const passwordIn = document.createElement('input') ;
    passwordIn.id = 'passwordIn' ;
    passwordIn.type = 'password' ;
    passwordIn.placeholder = "Password" ;
    cont2.appendChild( passwordIn ) ;

    const btnIn = document.createElement('button') ;
    btnIn.id = 'btnIn' ;
    btnIn.type = 'submit' ;
    btnIn.innerHTML = "SIGN IN" ;
    cont2.appendChild(btnIn) ;

    btnIn.addEventListener ( 'click', () => {
        if (userIn.value === "seba" || passwordIn.value === 1) {
            alert("hola seba !") ;
        } else {
            alert("tu no eres seba !") ;
        }
    })
}


function funSignUp () {
    const userUp = document.createElement('input') ;
    userUp.id = 'userUp' ;
    userUp.type = 'text' ;
    userUp.placeholder = "Create Name User" ;
    cont2?.appendChild(userUp) ;

    const passwordUp1 = document.createElement('input') ;
    passwordUp1.id = 'passwordUp1' ;
    passwordUp1.type = 'password' ;
    passwordUp1.placeholder = "Create Password"
    cont2?.appendChild(passwordUp1) ;

    const passwordUp2 = document.createElement('input') ;
    passwordUp2.id = 'passwordUp2' ;
    passwordUp2.type = 'password' ;
    passwordUp2.placeholder = "Repeat Password" ;
    cont2.appendChild(passwordUp2) ;

    const btnUp = document.createElement('button') ;
    btnUp.id = 'btnUp' ;
    btnUp.type = 'submit' ;
    btnUp.innerHTML = "SIGN UP" ;
    cont2?.appendChild(btnUp) ;

}



funSignUp() ;


signIn.addEventListener('click', () => {
    cont2.removeChild(userUp) ;
    cont2.removeChild(passwordUp1) ;
    cont2.removeChild(passwordUp2) ;
    cont2.removeChild(btnUp) ;
    
    funSignIn() ;
    console.log("Click Sign In") ;
})


signUp.addEventListener ('click', () => {
    cont2.removeChild(userIn) ;
    cont2.removeChild(passwordIn) ;
    cont2.removeChild(btnIn) ;
    
    funSignUp() ;
    console.log("Click Sign Up") ;
})


/*
function funAutentications () {
    if (userIn === "seba" || passwordIn === "1") {
        alert("hola seba") ;
    } else {
        alert("no eres seba") ;
    }
}
*/