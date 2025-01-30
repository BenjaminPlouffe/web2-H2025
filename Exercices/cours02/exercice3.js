//Benjamin Plouffe
//2025-01-28

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 3 : Faire un programme qui laisse le choix à l’utilisateur de 



const liste = [];
let minimal = 1001;
let maximal = 0;
for (let index = 1; index > 0; index++) {
    let choix = prompt("Quitté le programme : 0\nAjouter 10 nombres aléatoires entre 1 et 1000 : 1\nAfficher la liste : 2\nValeur minimale de la liste : 3\nValeur maximale de la liste : 4\nSupprimer la liste : 5\nSupprimer nombre x d'élément de la liste : 6");
    choixInt = parseInt(choix);
switch (choixInt) {
    case 0:
        console.log("Vous quitté le programme");
        index = -1;
        break;
    case 1:
        for (let index = 0; index < 10; index++) {
            let number = Math.floor(Math.random()*1001);
            liste.push(number);
        }
        break;
    case 2:
        console.log(liste);
        break;
    case 3:
        for (let index = 0; index < liste.length; index++) {
            if (liste[index] < minimal) {
                minimal = liste[index];
            }
        }
        console.log(minimal);
        break;    
    case 4:
        for (let index = 0; index < liste.length; index++) {
            if (liste[index] > maximal) {
                maximal = liste[index];
            }
        }
        console.log(maximal);
        break;    
    case 5:
        liste.splice(0,liste.length);
        break;    
    case 6:
    nombreSaisie = parseInt(prompt("combien d'élément voulez vous supprimé"));
        for (let index = 0; index < nombreSaisie; index++) {
        position = Math.floor(Math.random()*liste.length);
        liste.splice(position,1);
        }
        break;    
    default:
        console.log("Vous devez écrire une valeur entre 0 et 6");
        break;
    }
}