//Benjamin Plouffe
//remise 2025-02-14

import promptSync from 'prompt-sync'
const prompt = promptSync();

// Début du programme du menu principale

import Ouvrage from "./Ouvrage.js";
import { Film } from "./ouvrages/Film.js";
import { Livre } from "./ouvrages/Livre.js"; 

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

const affichage = (_tableau=[]) => {
    _tableau.forEach((element, index, tableau) => {
        console.log((index + 1) + " " + element);
    });
};
let inputPrincipale;
let inputAffichage;
let inputTrie;
let inputAjout;


do {
    inputPrincipale = choixMenuPrincipale();
    switch (inputPrincipale) {
        case "1":
        inputAffichage = choixMenuAffichage();
        switch (inputAffichage) {
            case "1":  
            if (listeOuvrage.length === 0) {
            console.log("La liste est vide");
            } else {
            affichage(listeOuvrage);
            }
                break;
            case "2":
            let genre = prompt("Quel est le genre que vous recherchez? :");
            affichage(filter(genre,listeOuvrage));
                break;
            case "3":   
            inputTrie = choixMenuTrie();
            switch (inputTrie) {
                case  "1":
                    affichage(trierNom(listeOuvrage));
                    break;
                case  "2":
                    affichage(trierAnnee(listeOuvrage));
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
                    let titre = prompt("Quel est le titre du livre?");
                    let anneeSortie = prompt("En quel année le livre est-il sortie?");
                    let genre = prompt("Quel est le genre du livre?");
                    let dispo = true;
                    let auteur = prompt("Quel est l'auteur du livre?");
                    let nbPage = prompt("Combien de page le livre contien?");
                    ajouterLivre(listeOuvrage,titre,anneeSortie,genre,dispo,auteur,nbPage);
                    break;
                case  "2":
                    let titreFilm = prompt("Quel est le titre du film?");
                    let anneeSortieFilm = prompt("En quel année le film est-il sortie?");
                    let genreFilm = prompt("Quel est le genre du film?");
                    let dispoFilm = true;
                    let realisateur = prompt("Quel est le réaliseur du film?");
                    let duree = prompt("Quel est la durée du film?");
                    ajouterFilm(listeOuvrage,titreFilm,anneeSortieFilm,genreFilm,dispoFilm,realisateur,duree);
                    break;
                default:
                    console.log("Choix invalide");
                    break;
            }
            break;
        case "3":
            modifier(listeOuvrage)
            break;
        case "4":
            supprimer(listeOuvrage)
            break;
        case "5":
            emprunt(listeOuvrage)
            break;
        case "6":
            statistique(listeOuvrage)
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

function filter(_string, _array) {
    return _array.filter((e) => e.genre.toLowerCase().match(_string.toLowerCase()));
  }

function trierNom(_tableau){
   return _tableau.sort( (element1, element2) => element1.titre.localeCompare(element2.titre));
};

function trierAnnee(_tableau){
    return _tableau.sort( (element1, element2) => element1.anneeSortie - element2.anneeSortie);
};

function ajouterLivre(_tableau,titre,anneeSortie,genre,dispo,auteur,nbPage) {
    console.log("Votre livre a été ajouté a la liste.");
    return _tableau.push(new Livre(titre,anneeSortie,genre,dispo,auteur,nbPage));
};

function ajouterFilm(_tableau,titreFilm,anneeSortieFilm,genreFilm,dispoFilm,realisateur,duree){
console.log("Votre film a été ajouté a la liste.");
return _tableau.push(new Film(titreFilm,anneeSortieFilm,genreFilm,dispoFilm,realisateur,duree));
};

function supprimer(_tableau){
    affichage(_tableau);
    let ouvrageSupprimer = parseInt(prompt("Saisissez le numéro de l'ouvrage que vous voulez Supprimé parmis les "+ _tableau.length + " ouvrages. :" ));
    if (ouvrageSupprimer > 0 && ouvrageSupprimer <= _tableau.length) {
    _tableau.splice((ouvrageSupprimer-1), 1);
    } else{
    console.log("Choix invalide");
} 
}

function modifier(_tableau){
    affichage(_tableau);
    let ouvrageModifier = parseInt(prompt("Saisissez le numéro de l'ouvrage que vous voulez modifiez parmis les "+ _tableau.length + " ouvrages. :" ));
    if (ouvrageModifier > 0 && ouvrageModifier <= _tableau.length) { 
        if (_tableau[ouvrageModifier-1] instanceof Livre) {
            let titre = prompt("Quel est le titre du livre?");
                    let anneeSortie = prompt("En quel année le livre est-il sortie?");
                    let genre = prompt("Quel est le genre du livre?");
                    let dispo = true;
                    let auteur = prompt("Quel est l'auteur du livre?");
                    let nbPage = prompt("Combien de page le livre contien?");
                    _tableau.splice((ouvrageModifier-1), 1,new Livre(titre,anneeSortie,genre,dispo,auteur,nbPage));
        }else{
            let titreFilm = prompt("Quel est le titre du film?");
            let anneeSortieFilm = prompt("En quel année le film est-il sortie?");
            let genreFilm = prompt("Quel est le genre du film?");
            let dispoFilm = true;
            let realisateur = prompt("Quel est le réaliseur du film?");
            let duree = prompt("Quel est la durée du film?");
            _tableau.splice((ouvrageModifier-1), 1, new Film(titreFilm,anneeSortieFilm,genreFilm,dispoFilm,realisateur,duree));
        }
    } else{
        console.log("Choix invalide");
    } 
};

function emprunt(_tableau){
affichage(_tableau);
let ouvrageEmprunt = parseInt(prompt("Saisissez le numéro de l'ouvrage que vous voulez modifiez parmis les "+ _tableau.length + " ouvrages. :" ));
if (ouvrageEmprunt > 0 && ouvrageEmprunt <= _tableau.length) {
    if (_tableau[ouvrageEmprunt-1]===true) {
        _tableau[ouvrageEmprunt-1].disponibilite(false)
    } else{
        _tableau[ouvrageEmprunt-1].disponibilite(true)
    } 
    } else{
    console.log("Choix invalide");
} 
};

function statistique(_tableau) {
    console.log("Nombre total d'ouvrages : " + _tableau.length);
    const tableau1 = _tableau.filter(e => e instanceof Livre); // tableau des managers
    const tableau2 = _tableau.filter(e => e instanceof Film);
    console.log("Ouvrages par type : \n- Livres : " + tableau1.length + "\n- Films : " + tableau2.length);
    const occurrences = {};
    _tableau.forEach(item => {
    occurrences[item.genre] = (occurrences[item.genre] || 0) + 1;
    });
    console.log(occurrences);
};
