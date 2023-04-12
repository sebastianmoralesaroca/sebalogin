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
    if (passwordUp1.value === passwordUp2.value) {
        alert("Hola " + userUp.value + ", su usuario ha sido creado!");
    } else if (passwordUp1.value.length < 4) {
        alert("Necesitas un Password")
    } else {
        alert("Los Password No Coinciden") ;
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
        if (userIn.value === userUp.value ) {
            alert(userIn.value) ;
        } else {
            alert("error");
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


/*
function funAutentications () {
    if (userIn === "seba" || passwordIn === "1") {
        alert("hola seba") ;
    } else {
        alert("no eres seba") ;
    }
}
*/
