//Benjamin Plouffe
//2025-01-28

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 1 : Déclarer un array avec 5 noms de fruit (string). Ajouter un nombre au début et à la fin de l’array.

const fruits = ["orange","banane","bleuet","fraise","framboise"];
//Ajouter un nombre a la fin
fruits.push(1);
// Ajouter un nombre au début 
fruits.unshift(2);
afficher(fruits);
afficherBoucle(fruits);
afficherForEach(fruits);
afficherPair(fruits);
afficherReverse(fruits)

// FONCTIONS EXTERNES
function afficher(_tableau){
    console.log(_tableau);
}

function afficherBoucle(_tableau){
    for (let boucle = 0; boucle < fruits.length; boucle++) {
        console.log(fruits[boucle]);
    }
}

// normalement on veut appelé le foreach dans les fonction en haut avec un fruits.forEach
function afficherForEach(_tableau){
    _tableau.forEach(element => {
        console.log(element);
    });
};

function afficherPair(_tableau){
    for (let pair = 0; pair < _tableau.length; pair = pair+2) {
        console.log(_tableau[pair]);
        
    }
}

function afficherReverse(_tableau){
   const reversed = _tableau.reverse();
   console.log(reversed); 
}