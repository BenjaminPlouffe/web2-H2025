//Benjamin Plouffe
//2025-01-28

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 4 : Faire un programme qui calcule l’impôt de l’utilisateur autant de fois qu’il le souhaite.  L’utilisateur doit pouvoir choisir entre ;  


revenu = parseInt(prompt("Quel est votre revenue imposable"))
for (let index = 1; index > 0; index++) {
    let choix = prompt("Quitté le programme : 0\nImpôt provincial : 1\nImpôt fédéral : 2");
    choixInt = parseInt(choix);
switch (choixInt) {
    case 0:
        console.log("Vous quitté le programme");
        index = -1;
        break;
    case 1:
        if (revenu <= 15000) {
            console.log(0,"$");
        } else
        if (revenu <= 30000) {
            console.log((revenu-2248)*0.15,"$");
        } else
        if (revenu <= 50000) {
            console.log((revenu-5595)* 0.20,"$"); 
        } else
        if (revenu <= 100000) {
            console.log((revenu-16151)*0.24,"$") 
        } else {
            console.log(revenu*0.25,"$")
        } 
        break;
    case 2:
        if (revenu <= 15000) {
            console.log(400,"$");
        } else
        if (revenu <= 30000) {
            console.log((revenu-2278) * 0.1253,"$");
        } else
        if (revenu <= 50000) {
            console.log((revenu-4939) * 0.17,"$"); 
        } else
        if (revenu <= 100000) {
            console.log((revenu-13810)*0.2171,"$") 
        } else {
            console.log(revenu*0.25,"$")
        } 
        break;
    default:
        console.log("Vous devez écrire une valeur entre 0 et 3");
        break;
    }
}