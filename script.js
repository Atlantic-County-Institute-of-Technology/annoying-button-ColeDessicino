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
        textred.innerHTML = "I asked you to stop.";
    }
    else if( clicksred == 3 ) {
        textred.innerHTML = "I said stop.";
    }
    else if( clicksred == 4 ) {
        textred.innerHTML = "I SAID STOP!!";
    }
    else if( clicksred == 5 ) {
        textred.innerHTML = "STOP!!";
    }
    else if( clicksred == 6 ) {
        textred.innerHTML = "Fine I will just ignore you.";
    }
    else if( clicksred == 10 ) {
        textred.innerHTML = "I will find you";
    }
    else if( clicksred == 11 ) {
        textred.innerHTML = "Try and catch me now.";
    }
}


let clicksblue = 0;

button2.addEventListener("click", annoyblue);

function annoyblue() {
    clicksblue++;
    if( clicksblue == 1 ) {
        textblue.innerHTML = "Not me, red.";
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



