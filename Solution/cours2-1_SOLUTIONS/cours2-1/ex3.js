/*
Maxime Faucher
26 janvier 2025
Exercices 2.1 - #3
*/

import promptSync from "prompt-sync"; // À commenter si vous travaillez avec un navigateur
const prompt = promptSync();
//const prompt = require('prompt-sync')();


//Main --------------
function main() {
    console.log(
        "Bienvenue dans le programme de gestion d'une liste de nombres aléatoires.\n"
    );
    let input = "";
    const randomNumbers = [];

    do {
        // On saisit le choix de l'utilisateur
        input = choisirOption().trim(); // pour retirer les caractères blancs

        if (input === "1") { // ajouter 10 nombres aléatoires
            add10RandomNumbersToArray(randomNumbers);
        } else if (input === "2") { // Afficher la liste
            printArray(randomNumbers);
        } else if (input === "3") { // Trouver l'indice du plus petit (et sa valeur)
            let minIndex = minIndexSearch(randomNumbers);
            console.log("La valeur minimale est", randomNumbers[minIndex], "et se trouve à l'index", minIndex);
        } else if (input === "4") { // Trouver l'indice du plus grand (et sa valeur)
            let maxIndex = maxIndexSearch(randomNumbers);
            console.log("La valeur maximale est" ,randomNumbers[maxIndex], "et se trouve à l'index", maxIndex);
        } else if (input === "5") { // Vider la liste
            randomNumbers.splice(0, randomNumbers.length);
        } else if (input === "6") { // Supprimer un nombre aléatoire d'éléments (à partir du début)
            let deleteCount = Number(prompt("Entrer le nombre d'élément à supprimer aléatoirement : "));
            deleteNAtRandom(randomNumbers, deleteCount);
        } else if (input === "0") { // Quitter
            console.log("Fermeture du programme en cours.");
        } else { // Choix invalide
            console.log(
                "Erreur : entrée non reconnue..."
            );
        }
    } while (input !== "0");
    console.log("Fermeture du programme avec succès.");
}

//Fonctions externes -------------------------------

// Pour afficher les options et retourner le choix
function choisirOption() {
    console.log("\nOPTIONS DISPONIBLES :");
    console.log("1. Ajouter 10 nombres aléatoires à la liste");
    console.log("2. Afficher la liste");
    console.log("3. Trouver l'index du nombre le plus petit");
    console.log("4. Trouver l'index du nombre le plus grand");
    console.log("5. Vider la liste");
    console.log("6. Supprimer un nombre aléatoire");
    console.log("0. Quitter");
    console.log("(Toute autre entrée ne sera pas reconnue.)");
    return prompt("Votre choix : "); 
}

// Ajouter 10 nombres aléatoires à la liste
function add10RandomNumbersToArray(_array = []) {
    for (let i = 0; i < 10; i++) {
        _array.push(Math.floor(Math.random() * 1000 + 1));
    }
}

// Afficher la liste
function printArray(_array = []) {
    console.log("[", _array.join(", "), "]");
}

// Trouver l'indice du plus petit nombre
function minIndexSearch(_array = []) {
    if (_array.length === 0) {
        return null;
    }
    
    let min = Number.MAX_VALUE;
    let minIndex = 0;
    for (let i = 0; i < _array.length; i++) {
        if (min > _array[i]) {
            min = _array[i];
            minIndex = i;
        }
    }
    return minIndex;
}

// Trouver l'indice du plus grand nombre
function maxIndexSearch(_array = []) {
    if (_array.length === 0) {
        return null;
    }

    let max = Number.MIN_VALUE;
    let maxIndex = 0;
    for (let i = 0; i < _array.length; i++) {
        if (max < _array[i]) {
            max = _array[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

// Supprimer un élément aléatoirement
function deleteAtRandom(_array = []) {
    let randomIndex = Math.round(Math.random() * (_array.length - 1));
    _array.splice(randomIndex, 1);
}

// Supprimer n éléments aléatoirement
function deleteNAtRandom(_array = [], n = 1) {
    for (let i = 0; i < n; i++) {
        deleteAtRandom(_array);
    }
}

//---------------------------------------

main();
