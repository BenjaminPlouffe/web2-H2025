/*
Maxime Faucher
26 janvier 2025
Exercices 2.1 - #4
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

// Main --------------
console.log("Bienvenue cher utilisateur.\n");
let input;

do {
    input = promptEntry();
    let revenu;
    // Solution avec switch
    switch (input) {
        case "1":
            revenu = promptRevenu();
            console.log(calculImpotProvincial(revenu));
            break;
        case "2":
            revenu = promptRevenu();
            console.log(calculImpotFederal(revenu));
            break;
        case "0":
            break;
        default:
            console.log("Erreur : entrée non reconnue...");
            break;
    }
    // Solution avec if / else if / ... / else
    // if (input === "1") {
    //     let revenu = promptRevenu();
    //     console.log(calculImpotProvincial(revenu));
    // } else if (input === "2") {
    //     let revenu = promptRevenu();
    //     console.log(calculImpotFederal(revenu));
    // } else if (input === "0") {
    //     console.log("Fermeture du programme en cours.");
    // } else {
    //     console.log("Erreur : entrée non reconnue...");
    // }
} while (input !== "0");
console.log("Fermeture du programme avec succès.");


//Fonctions ----------------------------------
function promptEntry() {
    console.log("\nChoisir une options parmi les suivantes :");
    console.log("1. Calculer votre impôt provincial");
    console.log("2. Calculer votre impôt fédéral");
    console.log("0. Quitter");
    let tmp = prompt("Votre choix : ");
    return tmp;
}

function calculImpotProvincial(_revenu) {
    if (0 <= _revenu && _revenu <= 15000) {
        return 0;
    } else if (_revenu <= 30000) {
        return ((_revenu - 2248) * 0.15).toFixed(2);
    } else if (_revenu <= 50000) {
        return ((_revenu - 5595) * 0.2).toFixed(2);
    } else if (_revenu <= 100000) {
        return ((_revenu - 16151) * 0.24).toFixed(2);
    } else if (100000 < _revenu) {
        return (_revenu * 0.25).toFixed(2);
    } else {
        return "Entrez un nombre positif svp...";
    }
}

function calculImpotFederal(_revenu) {
    if (0 <= _revenu && _revenu <= 15000) {
        return 400;
    } else if (_revenu <= 30000) {
        return ((_revenu - 2278) * 0.1253).toFixed(2);
    } else if (_revenu <= 50000) {
        return ((_revenu - 4939) * 0.17).toFixed(2);
    } else if (_revenu <= 100000) {
        return ((_revenu - 13810) * 0.2171).toFixed(2);
    } else if (100000 < _revenu) {
        return (_revenu * 0.25).toFixed(2);
    } else {
        return "Entrez un nombre positif svp...";
    }
}



function promptRevenu() {
    let tmp = Number(prompt("Entrer votre revenu : "));
    return tmp;
}

//----------------------------------------------
