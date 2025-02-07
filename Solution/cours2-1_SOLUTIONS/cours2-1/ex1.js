/*
Maxime Faucher
26 janvier 2025
Exercices 2.1 - #1
*/

import promptSync from 'prompt-sync' // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();

const fruits = ["pomme", "orange", "banane", "raisin", "fraise"];

printArrayLoop(fruits);
printArrayForEach(fruits);
printAtEvenIndex(fruits);
printReverse(fruits);
// Remarquez que .reverse() modifie l'array original (qui est maintenant inversé!)
printArrayLoop(fruits);

function printArrayLoop(_array = []){
    console.log("---------------- printArrayLoop ----------------");
    for(let i = 0; i < _array.length; i++){
        console.log(_array[i]);
    }
    console.log("\n");
}

function printArrayForEach(_array = []){
    console.log("---------------- printArrayForEach ----------------");
    _array.forEach(element => {
        console.log(element);
    });
    console.log("\n");
}

function printAtEvenIndex(_array = []){
    console.log("---------------- printAtEvenIndex ----------------");
    for(let i = 0; i < _array.length; i+=2){
        console.log(_array[i]);
    }
    console.log("\n");
}

function printReverse(_array = []){
    console.log("---------------- printReverse ----------------");
    _array.reverse().forEach(element => {
        console.log(element);
    });
    console.log("\n");
}

