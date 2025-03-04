const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
let textred = document.getElementById("textred");
let textblue = document.getElementById("textblue");

let clicksred = 0;

button1.addEventListener("click", annoyred);

function annoyred() {
    clicksred++;
    if( clicksred == 1 ) {
        textred.innerHTML = "How about you click blue.";
    }
    else if( clicksred == 2 ) {
        textred.innerHTML = "Please stop.";
    }
    else if( clicksred == 3 ) {
        textred.innerHTML = "You are being rude.";
    }
    else if( clicksred == 4 ) {
        textred.innerHTML = "I will call the police.";
    }
    else if( clicksred == 5 ) {
        textred.innerHTML = "STOP!!";
    }
    else if( clicksred == 6 ) {
        textred.innerHTML = "Try and catch me now.";
        button1.classList.add("move1");
    }
    else if( clicksred == 7 ) {
        textred.innerHTML = "I won't let you win that easy.";
        button1.classList.remove("move1");
        button1.classList.add("move2");
    }
    else if( clicksred == 8 ) {
        textred.innerHTML = "Why are you doing this?";
        button1.classList.remove("move2");
        button1.classList.add("move3");
    }
    else if( clicksred == 9 ) {
        textred.innerHTML = "Around we go.";
        button1.classList.remove("move3");
        button1.classList.add("spin1");
    }
}


let clicksblue = 0;

button2.addEventListener("click", annoyblue);

function annoyblue() {
    clicksblue++;
    if( clicksblue == 1 ) {
        textblue.innerHTML = "You should click red.";
    }
    else if( clicksblue == 2 ) {
        textblue.innerHTML = "I asked you to stop.";
    }
    else if( clicksblue == 3 ) {
        textblue.innerHTML = "I said stop.";
    }
    else if( clicksblue == 4 ) {
        textblue.innerHTML = "I SAID STOP!!";
    }
    else if( clicksblue == 5 ) {
        textblue.innerHTML = "STOP!!";
    }
    else if( clicksblue == 6 ) {
        textblue.innerHTML = "Fine I will just ignore you.";
    }
    else if( clicksblue == 10 ) {
        textblue.innerHTML = "I will find you";
    }
    else if( clicksblue == 11 ) {
        textblue.innerHTML = "Try and catch me now.";
    }
}



