/*
Maxime Faucher
22 janvier 2025
Exercices 1.2 - #3
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

// Saisie des 2 nombres
let nombre1 = Number(prompt("Saisir le premier nombre : "));
let nombre2 = Number(prompt("Saisir le deuxième nombre : "));
let plusGrand;

// Comparaisons
if (nombre1 > nombre2) {
    plusGrand = nombre1;
} else {
    plusGrand = nombre2;
}

// Affichage
console.log("Le plus grand nombre est", plusGrand);
