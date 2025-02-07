/*
Maxime Faucher
26 janvier 2025
Exercices 2.1 - #2
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

console.log("Bienvenue cher utilisateur.\n");
let input = "";

do{
    input = promptEntry();
    
    if(input === "1"){
        let temperature = promptTemperature();
        console.log(conversionCelsiusAFharenheit(temperature) + "F");

    } else if(input === "2"){
        let temperature = promptTemperature();
        console.log(conversionFharenheitACelsius(temperature) + "C");

    } else if(input === "0"){
        console.log("Fermeture du programme en cours.");
    }
    else{console.log("Erreur : entrée non reconnue.");}
} while (input !== "0");
console.log("Fermeture du programme avec succès.");



//Fonctions ---------------------------
function conversionCelsiusAFharenheit(_dgCelsius){
    return (_dgCelsius*9/5 + 32).toFixed(1);
}

function conversionFharenheitACelsius(_dgFha){
    return ((_dgFha-32)*5/9).toFixed(1);
}

function promptEntry(){
    console.log("\nBienvenue dans le programme de conversion de température.");
    console.log("1. Celsius à Fahrenheit");    
    console.log("2. Fahrenheit à Celsius");    
    console.log("0. Quitter");    
    console.log("(Toute autre entrée ne sera pas reconnue.)");    
    let tmp = prompt("Votre choix : ");
    return tmp;
}

function promptTemperature(){
    let tmp = Number(prompt("Entrer la température à convertir : "));
    return tmp;
}
//---------------------------------