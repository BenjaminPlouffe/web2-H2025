//Benjamin Plouffe
//2025-01-30

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 1 : Déclarer un array avec les nombres suivants ; [64, 13, 6, 28, 46].

const LISTE = [64, 13, 6, 28, 46];

console.log(listeCarre(LISTE));

afficheCube(LISTE);

console.log(trieMin(LISTE));

console.log(afficheCube(trieMax(LISTE)));

console.log(dernier(LISTE));




function listeCarre(_array1 = []){
const auCarre = elm => Math.pow(elm, 2);
const carre = _array1.map(auCarre);
return carre;
}

function afficheCube(_array2 = []){
    _array2.forEach( (element) => console.log(`${Math.pow(element, 3)}`) );

}

function trieMin(_array3 =  []){
    const trieMin = _array3.filter( element => element <= 40 );
    return trieMin;
}

function trieMax(_array4 =  []){
    const trieMax = _array4.filter( element => Math.pow(element, 3) >= 10000 );
    return trieMax;
}

function dernier(_array5 =  []){
    const triePair = _array5.filter( element => element%2 === 0 );
    const map = triePair.map(element => element/2);
    const trieImpair = map.filter( element => element%2 === 1 );
    return trieImpair;
}