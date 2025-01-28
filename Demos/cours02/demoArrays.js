//Benjamin Plouffe
// 28-01-2025
// Manipulations de tableaux (Arrays) en JS

import ps from 'prompt-sync';
const prompt = ps();

// Déclaration de tableau
const fruits = [];

// Taille
console.log(fruits.length);

// Ajouter des éléments
// Via indiçage
fruits[0] = "fraise";
//Via méthode .push() qui ajoute a la fin
fruits.push("orange");
//Via méthode .unshift() qui ajoute au debut
fruits.unshift("banane");
afficher(fruits);

// Retiré , supprimer ou modifier des éléments
//avec splice()
fruits.splice(1,1,'framboise','bleuet');
// Ou avec .pop() qui retourne le dernier element
afficher(fruits.pop());
afficher(fruits);

// Recherche d'élément
// Avec indexOf() qui retourne la position (indice) dans le tableau si trouvé, -1 sinon
let indiceBleuetde0 = fruits.indexOf('banane');
let indiceBleuetde1 = fruits.indexOf('banane',1);
console.log(indiceBleuetde0,indiceBleuetde1);
// similairement il existe lastIndexOf() qui trouve la dernier occurence
// Avec .find() qui utilise une fonction pour tester le critère de recherche
// Cherchons un fruit qui commence par 'b'
let fruitCommenceParB = fruits.find(trouverLettreB); // il existe aussi findLast()
let indexPremierFruitB = fruits.findIndex(trouverLettreB);
console.log(fruitCommenceParB,indexPremierFruitB);

// Parcourir un tableau
// Boucle "classique"
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
// For of (lecture seule)
for (const fruit of fruits) {
    console.log(fruit);
}
// Méthode .foreach
fruits.forEach(enMajuscule);
afficher(fruits);
fruits.forEach(enMinuscule);
afficher(fruits);


// Fonction de rappel définie à l'externe
function enMajuscule(elm,i,arr){
    arr[i] = elm.toUpperCase();
}

function enMinuscule(elm,i,arr){
    arr[i] = elm.toLowerCase();
}

function trouverLettreB(element){
    return element.substring(0,1).toLowerCase() === 'b';
}

// Fonction pour afficher le tableau
function afficher(_tableau = []){
    console.log(_tableau);
}
