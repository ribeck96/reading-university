import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { auth } from "./firebase.js";


const authMessage = document.getElementById("authMessage");


function register(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    createUserWithEmailAndPassword(auth, email, password)

        .then(function(){

            authMessage.textContent =
                "Account created successfully!";

        })

        .catch(function(error){

            authMessage.textContent =
                error.message;

        });

}


function login(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    signInWithEmailAndPassword(auth, email, password)

        .then(function(){

            authMessage.textContent =
                "Login successful!";

        })

        .catch(function(error){

            authMessage.textContent =
                error.message;

        });

}
window.login = login;
window.register = register;
