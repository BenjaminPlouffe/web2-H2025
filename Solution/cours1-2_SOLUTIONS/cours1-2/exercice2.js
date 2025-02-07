/*
Maxime Faucher
22 janvier 2025
Exercices 1.2 - #2
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

let nom = prompt("Saisir votre nom : ");
let age = Number(prompt("Saisir votre âge : "));

console.log("Bonjour", nom, "!", "Vous avez approximativement", Math.round(age*365), "jours!");