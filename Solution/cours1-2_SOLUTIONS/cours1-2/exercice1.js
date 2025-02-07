/*
Maxime Faucher
22 janvier 2025
Exercices 1.2 - #1
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

let nombre = Number(prompt("Saisir un nombre : "));
console.log("Le carré de ce nombre est", nombre*nombre);
console.log("Le cube de ce nombre est", nombre*nombre*nombre);

let longueur = Number(prompt("Saisir la longueur du rectangle : "));
let largeur = Number(prompt("Saisir la largeur du rectangle : "));
console.log("La surface du rectangle est", longueur*largeur);
