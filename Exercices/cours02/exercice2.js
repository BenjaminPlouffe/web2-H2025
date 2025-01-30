//Benjamin Plouffe
//2025-01-28

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 2 : Faire un programme qui convertit une température en degrés Celsius ou en Fahrenheit autant de fois que l’utilisateur le souhaite.  L’utilisateur doit pouvoir choisir entre ; 


let choix = prompt("Quitté le programme : 0\nConvertir de Celsius à Fahrenheit : 1\nConvertir de Fahrenheit à Celsius : 2");
choixInt = parseInt(choix);
let celsius
let fahrenheit

switch (choixInt) {
    case 0:
        console.log("Vous quitté le programme");
        break;
    case 1:
        celsius = parseInt(prompt("Entrez le nombre de celsius"))
        
        fahrenheit = (celsius * 1.8) + 32
        console.log(fahrenheit,"°F");
        break;
    case 2:
        fahrenheit = parseInt(prompt("Entrez le nombre de fahrenheit"))
        celsius = (fahrenheit- 32)/1.8 
        console.log(celsius,"°F");
        break;
    default:
        console.log("Vous devez écrire une valeur entre 0 et 2");
        break;
}