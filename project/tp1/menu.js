//Benjamin Plouffe
//remise 2025-02-14

import promptSync from 'prompt-sync'
const prompt = promptSync();

// Début du programme du menu principale

import Ouvrage from "./Ouvrage.js";
import Film from "./ouvrages/Film.js";
import Livre from "./ouvrages/Livre.js"; 

// Tableau d'ouvrages (base de données initiale OBLIGATIORE)
const listeOuvrage = [
    new Livre("Les Misérables", 1862, "Roman", true, "Victor Hugo", 2598),
    new Film("Inception", 2010, "Science-fiction", true, "Christopher Nolan", 148),
    new Film("La liste de Schindler", 1993, "Drame", true, "Steven Spielberg", 189),
    new Livre("1984", 1949, "Science-fiction", false, "George Orwell", 376),
    new Livre("Le Petit Prince", 1943, "Conte", true, "Antoine de Saint-Exupéry", 93),
    new Film("Titanic", 1997, "Drame", true, "James Cameron", 195),
    new Livre("Le meilleur des mondes", 1932, "Science-fiction", false, "Aldous Huxley", 285),
    new Livre("Le Seigneur des Anneaux", 1954, "Fantastique", true, "J.R.R. Tolkien", 423),
    new Film("Big Fish", 2003, "Fantastique", true, "Tim Burton", 125),
    new Livre("M. Tompkins au pays des merveilles", 1992, "Recueil de nouvelles", true, "George Gamow", 256),
    new Livre("Le Vieil Homme et la Mer", 1952, "Nouvelle", true, "Ernest Hemingway", 127),
    new Film("The Big Lebowski", 1998, "Comédie", false, "Joel et Ethan Coen", 117),
    new Livre("Gatsby le Magnifique", 1925, "Roman", true, "F. Scott Fitzgerald", 180),
    new Film("Star Wars : Episode IV - Un nouvel espoir", 1977, "Science-fiction", false, "George Lucas", 121),
];


do {
    inputPrincipale = choixMenuPrincipale();
    switch (inputPrincipale) {
        case "1":
        inputAffichage = choixMenuAffichage();
        switch (inputAffichage) {
            case "1":            
            affichage(listeOuvrage)    
                break;
            case "2":                
                break;
            case "3":   
            inputTrie = choixMenuTrie();
            switch (inputTrie) {
                case  "1":
                    break;
                case  "2":
                    break;
                default:
                    console.log("Choix invalide");
                    break;
            }             
                break;
            default:
            console.log("Choix invalide");
                break;
        }
            break;
        case "2":
            inputAjout = choixMenuAjout();
            switch (inputAjout) {
                case  "1":
                    break;
                case  "2":
                    break;
                default:
                    console.log("Choix invalide");
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
            console.log("Choix invalide");
            break;
    }
} while (inputPrincipale !== "7");
console.log("Fermeture du programme avec succès.");


// section menus
function choixMenuPrincipale() {
    console.log("\nChoisir une options parmi les suivantes :");
    console.log("1. Afficher les ouvrages");
    console.log("2. Ajouter un ouvrage");
    console.log("3. Modifier un ouvrage");
    console.log("4. Supprimer un ouvrage");
    console.log("5. Emprunt/Retour d'un ouvrage");
    console.log("6. Afficher des statistiques");
    console.log("7. Quitter");
    let tmp = prompt("Votre choix : ");
    return tmp;
}

function choixMenuAffichage() {
    console.log("\nChoisir une options parmi les suivantes :");
    console.log("1. Tous les ouvrages");
    console.log("2. Filtrer les ouvrages");
    console.log("3. Trier les ouvrages");
    let tmp = prompt("Votre choix : ");
    return tmp;
}

function choixMenuTrie() {
    console.log("\nChoisir une options parmi les suivantes :");
    console.log("1. Triée par Titre");
    console.log("2. Triée par Année");
    let tmp = prompt("Votre choix : ");
    return tmp;
}

function choixMenuAjout() {
    console.log("\nChoisir une options parmi les suivantes :");
    console.log("1. Ajouter un livre");
    console.log("2. Ajouter un film");
    let tmp = prompt("Votre choix : ");
    return tmp;
}

//section affichage

const affichage = (_tableau=[]) => {
    _tableau.forEach((element, index, tableau) => {
    console.log((index + 1) + toString(element));
    });
}