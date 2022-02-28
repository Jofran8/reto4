'use strict';
const documentReady = () => {
    
    const phrases = ["😘 Welcome ", "👽 Have a good time ", "😎 You're the best, welcome "];

    const random = Math.floor(Math.random() * phrases.length);
    
    let name = prompt("Hi, welcome to the Book Store, enter your name: ")
    try { 
        while(!/^[a-zA-Z]+$/.test(name)) { 
            name= prompt("Please re-enter your name, letters only.");
        }
        alert(phrases[random]);
    }catch(e){
    alert(e) 
    }
}
document.addEventListener('DOMContentLoaded', documentReady);