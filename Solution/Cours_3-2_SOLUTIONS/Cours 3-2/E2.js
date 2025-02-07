// Série 3-2, Exercice 2

/* 
DANS PLUSIEURS FICHIERS JAVASCRIPT
(les classes dans des fichiers séparés de celui du programme principal):

1. Créez une classe Employe avec les attributs nom et salaireBase. 
   Ajoutez une méthode calculerSalaire() qui retourne le salaire.
2. Créez une classe Manager qui hérite de Employe et ajoute un bonus. 
   Redéfinissez calculerSalaire() en utilisant super.
3. Créez une classe Developpeur qui hérite de Employe et ajoute un attribut technologie (texte).
4. Dans un fichier E2.js, importez correctement vos classes, puis créez un tableau contenant 
   plusieurs Manager et Developpeur. Afficher le salaire moyen par catégorie d'employés ainsi que la 
   liste de tous les employés du tableau triés par salaire calculé en ordre décroissant.

*/

import { Manager } from "./Manager.js";
import Developpeur from "./Developpeur.js";

const employes = [
    new Manager('Marie-Ève', 125000, 10000),
    new Manager('Shany', 115000, 5000),
    new Developpeur('Tim', 125000, 'C++'),
    new Manager('Justin', 250000, 50000),
    new Developpeur('Steve', 225000, 'Cobol'),
    new Manager('Geneviève', 80000, 20000),
    new Developpeur('David', 90000, 'PHP'),
    new Developpeur('Bob', 300000, 'Fortran'),
];

// Salaires moyens par catégories
const calculerMoyenne = (total, element) => total + element.calculerSalaire(); // fonction réutilisable pour les 2 catégories
const managers = employes.filter(e => e instanceof Manager); // tableau des managers
const developpeurs = employes.filter(e => e instanceof Developpeur); // tableau des devs
let salaireMoyenManagers = managers.reduce(calculerMoyenne, 0) / managers.length;
let salaireMoyenDevs = developpeurs.reduce(calculerMoyenne, 0) / developpeurs.length;
console.log("\SALAIRES MOYENS PAR CATÉGORIE");
console.log("Managers :", salaireMoyenManagers);
console.log("Développeurs :", salaireMoyenDevs);


// Liste complète par salaire décroissant
console.log("\nLISTE DES EMPLOYÉS - SALAIRE DÉCROISSANT");
employes.sort((e1, e2) => e1.calculerSalaire() - e2.calculerSalaire()).reverse().forEach(e => console.log(e));