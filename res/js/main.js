const info = document.getElementById("info");
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

const cookieClickMultiplier = document.getElementById("cookieClickMultiplier");
const autoClickerButton = document.getElementById("autoClickerButton");

let numberOfCookies = 0;
let cookieIncrease = 1;

let multiplierPrice = 50;
let multiplierOwned = 0;

let autoClickerPrice = 100;
let autoClickerOwned = 0;

function updateCounter(){
    counter.textContent = numberOfCookies;
}

function showInfo(text){
    info.style.display = "block";
    info.textContent = text;
}

cookie.onclick = () => {
    numberOfCookies += cookieIncrease;
    updateCounter();
}

cookieClickMultiplier.onclick = () => {
    if(numberOfCookies >= multiplierPrice){
        numberOfCookies -= multiplierPrice;
        multiplierOwned++;
        cookieIncrease++;
        multiplierPrice = Math.floor(multiplierPrice * 1.5);
        cookieClickMultiplier.textContent =
        `Klikání x${cookieIncrease} | Cena: ${multiplierPrice}`;
        updateCounter();
        showInfo(`Upgrade koupen! Máš ${multiplierOwned}x klikací upgrade.`);
    }
}

autoClickerButton.onclick = () => {
    if(numberOfCookies >= autoClickerPrice){
        numberOfCookies -= autoClickerPrice;
        autoClickerOwned++;
        autoClickerPrice = Math.floor(autoClickerPrice * 1.7);
        autoClickerButton.textContent =
        `AutoClicker (${autoClickerOwned}) | Cena: ${autoClickerPrice}`;
        updateCounter();
        showInfo(`AutoClicker zakoupen! Máš ${autoClickerOwned}.`);
    }
}

setInterval(()=>{
    if(autoClickerOwned > 0){
        numberOfCookies += autoClickerOwned;
        updateCounter();
    }
},1000);
