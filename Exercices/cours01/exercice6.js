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

// E6

let note = prompt("Entrez une note : ");

if (note<60) {
    console.log('E');
} else if (note>=60 && note<70) {
    console.log('D');
} else if (note>=70 && note<80) {
    console.log('C');
} else if (note>=80 && note<90) {
    console.log('B');
} else if (note>=90 && note<100) {
    console.log('A');
} else{
    console.log("Entrez une note entre 0 et 100");
}