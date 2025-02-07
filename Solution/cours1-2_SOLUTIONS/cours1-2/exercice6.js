/*
Maxime Faucher
22 janvier 2025
Exercices 1.2 - #6
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

// Saisie de la note
let note = Number(prompt("Saisir la note : "));
let lettre;

if(note >= 90){
    lettre = "A";
} else if(note >= 80){
    lettre = "B";
} else if(note >= 70){
    lettre = "C";
} else if(note >= 60){
    lettre = "D";
} else {
    lettre = "E";
}

console.log("La note", note, "correspond à la lettre", lettre);
