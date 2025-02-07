/*
Maxime Faucher
22 janvier 2025
Exercices 1.2 - #5
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

// Saisie des 2 nombres
let nombre1 = Number(prompt("Saisir le premier nombre : "));
let nombre2 = Number(prompt("Saisir le deuxième nombre : "));

if(nombre2 !== 0) {
    console.log(nombre1 + "/" + nombre2 + " =", nombre1/nombre2);
}
else {
    console.log("Division par zéro interdite.");
}