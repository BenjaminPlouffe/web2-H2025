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

// E3 Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».

let nombre1 = prompt("Entrer le premier nombre : ");
let nombre2 = prompt("Entrer le deuxieme nombre : ");
if (nombre1> 9 && nombre2 > 9) {
    console.log("BONJOUR");
} else{
    console.log("BONSOIR");
}