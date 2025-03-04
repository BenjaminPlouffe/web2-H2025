// Auteur   : Maxime Faucher
// Date     : 2025-03-01
// Sujet    : Examen intra formatif - RasPiBot

// On récupère les descriptions des produits (partie 1)
import {getRasDescription, getArduinoDescription, getMicrobitDescription} from "./descriptions.js";

document.addEventListener('DOMContentLoaded', () => {

    //Partie 1 ---------------------------------------------------------------------------
    const btnPreviousChoice = document.getElementById('btnPreviousChoice');
    const btnNextChoice = document.getElementById('btnNextChoice');
    btnNextChoice.addEventListener('click', nextChoice);
    btnPreviousChoice.addEventListener('click', previousChoice);

    //Partie 2 ---------------------------------------------------------------------------
    const selectComputerType = document.getElementById('selectComputerType');
    selectComputerType.addEventListener('change', toggleDisplayForRamTypeIfRaspberryPiIsSelected);

    const form = document.getElementById('form');
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        showBillingInConsoleLog();
    });

});


// Fonctions partie 1 -------------------------------------------------------------------
function nextChoice() { // si on clique sur le bouton "Choix suivant"
    const divDataChoice = document.querySelector('[data-choice]');
    divDataChoice.dataset.choice++;
    if(divDataChoice.dataset.choice > 3){divDataChoice.dataset.choice = 1;}
    choiceUpdate(Number(divDataChoice.dataset.choice));
}

function previousChoice() { // si on clique sur le bouton "Choix précédent"
    const divDataChoice = document.querySelector('[data-choice]');
    divDataChoice.dataset.choice--;
    if(divDataChoice.dataset.choice < 1){divDataChoice.dataset.choice = 3;}
    choiceUpdate(Number(divDataChoice.dataset.choice));
}

function choiceUpdate(_newChoice = 0){
    // On récupère les éléments du DOM à modifier
    const title = document.getElementById('title');
    const image = document.getElementById('image');
    const logo = document.getElementById('logo');
    const divForm = document.getElementById('divForm');
    const divDescription = document.getElementById('divDescription');

    if(_newChoice === 1){ // Raspberry Pi
        title.classList.replace('couleurArduino', 'couleurPi');
        title.classList.replace('couleurMicrobit', 'couleurPi');
        title.innerText = "Raspberry Pi";
        image.src = "./img/raspberryPi.jpg";
        logo.src = "./img/piLogo.png";
        divForm.classList.replace('bgArduino', 'bgPi');
        divForm.classList.replace('bgMicrobit', 'bgPi');
        divDescription.classList.replace('textArduino', 'textPi');
        divDescription.classList.replace('textMicrobit', 'textPi');
        updateTextForDivDescription(getRasDescription());
    }

    if(_newChoice === 2){ // Microbit
        title.classList.replace('couleurArduino', 'couleurMicrobit');
        title.classList.replace('couleurPi', 'couleurMicrobit');
        title.innerText = "Microbit";
        image.src = "./img/microbit.jpg";
        logo.src = "./img/microbitLogo.png";
        divForm.classList.replace('bgArduino', 'bgMicrobit');
        divForm.classList.replace('bgPi', 'bgMicrobit');
        divDescription.classList.replace('textArduino', 'textMicrobit');
        divDescription.classList.replace('textPi', 'textMicrobit');
        updateTextForDivDescription(getMicrobitDescription());
    }

    else if(_newChoice === 3){ // Arduino
        title.classList.replace('couleurPi', 'couleurArduino');
        title.classList.replace('couleurMicrobit', 'couleurArduino');
        title.innerText = "Arduino";
        image.src = "./img/arduino.jpg";
        logo.src = "./img/arduinoLogo.png";
        divForm.classList.replace('bgPi', 'bgArduino');
        divForm.classList.replace('bgMicrobit', 'bgArduino');
        divDescription.classList.replace('textPi', 'textArduino');
        divDescription.classList.replace('textMicrobit', 'textArduino');
        updateTextForDivDescription(getArduinoDescription());
    }
    
}

function updateTextForDivDescription(_newDescription = []) {
    // On récupère l'élément du DOM à modifier
    const divDescription = document.getElementById('divDescription');
    divDescription.replaceChildren(); // On efface le contenu actuel
    // On ajoute un <p> pour chaque élément du tableau _newDescription (qui provient de descriptions.js)
    _newDescription.forEach((description) => {
        const newP = document.createElement('p');
        newP.innerText = description;
        divDescription.append(newP);
    });
}


// Fonctions partie 2 -------------------------------------------------------------------
function toggleDisplayForRamTypeIfRaspberryPiIsSelected(){
    // Pour alterner l'affichage du select pour la RAM si Raspberry Pi est sélectionné
    const selectComputerType = document.getElementById('selectComputerType');
    const divForRaspberryRam = document.getElementById('divForRaspberryRam');
    
    if(selectComputerType.selectedOptions[0].innerText === "Raspberry Pi"){
        divForRaspberryRam.classList.remove('d-none');
    }
    else{
        divForRaspberryRam.classList.add('d-none');
    }

}

function showBillingInConsoleLog(){
    // Pour afficher la facture dans la console
    const selectedComputerType = document.getElementById('selectComputerType').selectedOptions[0];
    const computerPrice = Number(selectedComputerType.value);
    const quantity = Number(document.getElementById('quantity').value);
    
    if(Number.isNaN(computerPrice)){
        console.clear();
        const selectedRamType = document.getElementById('selectRamType').selectedOptions[0];
        const ramPrice = Number(selectedRamType.value);
        console.log("\nDétails de la facture -------------------");
        console.log(quantity + " " + selectedComputerType.innerText + " " + selectedRamType.innerText);
        let totalPriceCAD = quantity*ramPrice;
        console.log("Prix total : " + totalPriceCAD.toFixed(2) + "$");
        let totalPriceCADWithTaxes = totalPriceCAD*1.15;
        console.log("Prix avec taxe de 15% : " + totalPriceCADWithTaxes.toFixed(2) + "$ CAD");
        let conversionUSD = totalPriceCADWithTaxes*0.8;
        console.log("Conversion en USD : " + conversionUSD.toFixed(2) + "$ USD");
        console.log("-----------------------------------------");
    }
    else{
        console.clear();
        console.log("\nDétails de la facture -------------------");
        console.log(quantity + " " + selectedComputerType.innerText);
        let totalPriceCAD = quantity*computerPrice;
        console.log("Prix total : " + totalPriceCAD.toFixed(2) + "$");
        let totalPriceCADWithTaxes = totalPriceCAD*1.15;
        console.log("Prix avec taxe de 15% : " + totalPriceCADWithTaxes.toFixed(2) + "$ CAD");
        let conversionUSD = totalPriceCADWithTaxes*0.8;
        console.log("Conversion en USD : " + conversionUSD.toFixed(2) + "$ USD");
        console.log("-----------------------------------------");
    }
    
}