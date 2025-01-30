//Benjamin Plouffe
//2025-01-30

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 1 : Déclarer un array avec les nombres suivants ; [64, 13, 6, 28, 46].

const LISTE = [64, 13, 6, 28, 46];

console.log(listeCarre(LISTE));

afficheCube(LISTE);



function listeCarre(_array = []){
const auCarre = elm => Math.pow(elm, 2);
const carre = _array.map(auCarre);
return carre;
}

function afficheCube(_array = []){
    _array.forEach( (element) => console.log(`${Math.pow(element, 3)}`) );
}