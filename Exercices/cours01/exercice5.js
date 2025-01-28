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

// E5 Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est différent de zéro. Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’, si ce nombre n’est pas zéro vous devez imprimer le résultat.

let nombre1 = prompt("Entrer le premier nombre : ");
let nombre2 = prompt("Entrer le deuxieme nombre : ");
if (nombre2 == 0) {
    console.log("Division par zéro interdite.");
} else {
   console.log(nombre1/nombre2); 
}