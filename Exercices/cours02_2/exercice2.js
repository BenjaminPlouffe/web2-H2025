//Benjamin Plouffe
//2025-01-30

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 2 : À partir de la liste de type de fruits disponibles ci-dessous, faite un programme qui permet 

const fruitsDisponibles = ["Abricot", "Airelle", "Amande", "Ananas", "Avocat", "Banane",
 "Cassis", "Cerise", "Châtaigne", "Citron", "Clémentine", "Coing", "Datte", "Figue fraîche",
"Fraise", "Fraise des bois", "Framboise", "Fruit de la passion", "Grenade", "Groseille",
"Groseille à maquereau", "Kaki", "Kiwi", "Kumquat", "Litchi", "Mandarine", "Mangue", "Marron",
"Melon", "Mirabelle", "Mûre", "Myrtille", "Nectarine", "Noisette", "Noix", "Orange",
"Orange sanguine", "Pamplemousse", "Papaye", "Pastèque", "Pêche", "Poire", "Pomme",
"Prune", "Quetsche", "Raisin", "Reine-claude", "Tomate", "Tomate charnue", "Tomate Peretti",
];

const OPTIONS_MENU_PRINCIPALE = ["Afficher tous les fruits", "Filtrer la liste","Trier la liste",
 "Ajouter à la commande", "Retirer de la commande","Afficher la commande", "Quitter"];
const OPTIONS_MENU_FILTRER = ["par taille du nom", "Par sous-chaine"];
const OPTIONS_MENU_TRIER = ["Nombre de caractères du nom (croissant)", "Ordre alphabétique (inverse)"];

let choix = "";

do {
    // affiche les options (menu principal)
    console.log("MENU PRINCIPAL");
    OPTIONS_MENU_PRINCIPALE.forEach( (element,index) => console.log(`${index + 1}. ${element}`));
    choix = prompt("Votre choix : ").trim();
    console.log(choix);

    switch (choix) {
        case "1":
            //Action / appel de fonction pour affichage de la liste complete
            console.log(fruitsDisponibles);
            break;
        case "2":
            console.log("MENU TRIE");
            OPTIONS_MENU_FILTRER.forEach( (element,index) => console.log(`${index + 1}. ${element}`));
            choix = prompt("Votre choix : ").trim();
            console.log(choix);
            switch (choix) {
                case "1":
                    console.log(trieMax(fruitsDisponibles));
                    break;
                case "2":
                    console.log(fruitsDisponibles.filter( element => element.includes("oi")));
                    break;
                default:
                    console.log("Choix invalide.");
                    break;
                }
            break;
        case "3":
        
            break;
        case "4":
        
            break;
        case "5":
        
            break;
        case "6":
        
            break;
        case "7":
            break;
        default:
            console.log("Choix invalide.");
            break;
    }
    
} while (choix != "7");

function trieMax(_array4 =  []){
    const trieMax = _array4.filter( element => element.length >= 5 );
    return trieMax;
}
function map(_array1 = []){
    const carre = _array1.map(element => element);
    return carre;
    }