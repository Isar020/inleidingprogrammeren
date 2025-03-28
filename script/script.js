console.log("Ik ben er!");

// selector
const buttonStop = document.querySelector("#stop")

const koptekst = document.querySelector("h1")
const kleinetekst = document.querySelector("p")


const minimaalbonus = 0.2
let bonusnummer = Math.random()


let Mannetje = document.querySelector("#foto")


//zandloper selector
let zandloperframes = document.querySelector("#zandloper")


//Pop up message
window.alert ("Red het mannetje binnen de tijd!")



//functies zandloper plaatjes frames

const seconde1 = setTimeout (frame1, 1000)
function frame1(){
    console.log ("nummer 1")
    zandloperframes.src = "images/zandloper2.png"
}

const seconde2 = setTimeout (frame2, 2000)
function frame2(){
    console.log ("nummer 2")
    zandloperframes.src = "images/zandloper3.png"
}

const seconde3 = setTimeout (frame3, 3000)
function frame3(){
    console.log ("nummer 3")
    zandloperframes.src = "images/zandloper4.png"
}

const seconde4 = setTimeout (frame4, 4000)
function frame4(){
    console.log ("nummer 4")
    zandloperframes.src = "images/zandloper5.png"
}

const seconde5 = setTimeout (frame5, 5000)
function frame5(){
    console.log ("nummer 5")
    zandloperframes.src = "images/zandloper6.png"


    Mannetje.src = "images/afbeeldingmannetje2.png"

    koptekst.textContent = "Helaas!"
    kleinetekst.textContent = "Hij is gevallen!"
}



//Zeldzame bonus (if else)
if (bonusnummer <= minimaalbonus){
    console.log ("Bonusronde!")

    koptekst.textContent = "BONUSRONDE"
}
else {
    console.log ("normale ronde")
}



// functie stop zandloper en reset
function resetzandloper(){
    clearTimeout (seconde1);
    clearTimeout (seconde2);
    clearTimeout (seconde3);
    clearTimeout (seconde4);
    clearTimeout (seconde5);

    zandloperframes.src = "images/zandloper1.png"

    koptekst.textContent = "Gefeliciteerd!"
    kleinetekst.textContent = "Je hebt hem gered!"

    Mannetje.src = "images/afbeeldingmannetje3.png"


    if (bonusnummer <= minimaalbonus){
        
        Mannetje.src = "images/bonusfoto.png"
    
        koptekst.textContent = "Gefeliciteert!"
        kleinetekst.textContent = "Aanschouw hier de bonus foto"
    }
    else {
        console.log ("geen bonus prijs")
    }
}


// eventlisteners
buttonStop.addEventListener("click", resetzandloper)