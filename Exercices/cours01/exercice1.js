/* 
Auteur  : Benjamin Plouffe
Date    : 2025-01-23
Sujet   : Exercice 1 de la série 1.2
*/ 

//si "type": "commonjs" qui est dans package.json (ou si pas de type)
// const prompt = require('prompt-sync')();

//si "type": "commonjs" qui est dans package.json
import promptsync from 'prompt-sync'
const prompt = promptsync();


/*1. A) Lire un nombre et afficher le carré et le cube de ce nombre.
B) Calculer la surface d’un rectangle dont la longueur et la largeur sont lues à l’écran. */

// partie A
let nombre = prompt("Entrer un nombre : ")
console.log("Le carré de ce nombre est", nombre*nombre);
console.log("Le cube de ce nombre est", nombre*nombre*nombre);

//partie B

let largeur = prompt("Entrer la largeur du rectangle : ")
let longueur = prompt("Entrer la longueur du rectangle : ")
console.log("L'air du rectangle est de :",largeur*longueur );

