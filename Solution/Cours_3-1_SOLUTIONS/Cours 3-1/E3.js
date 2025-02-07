// Auteur   : Maxime Faucher
// Date     : 2025-02-02
// Sujet    : Série 3-1, Exercice 3

// a)
import Produit from "./Produit.js";

// b)
// Liste des noms de produits
const nomsProduits = [
    "Ordinateur", "Téléphone", "Tablette", "Casque", "Télévision",
    "Imprimante", "Clavier", "Souris", "Écran", "Console de jeu",
    "Appareil photo", "Enceinte Bluetooth", "Montre connectée", "Drone", "Routeur WiFi"
];
// Fonction pour générer un prix aléatoire entre 100$ et 200$
function prixAleatoire() {
    return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
}
// Tableau de produits
const produits = nomsProduits.map( (elm) => new Produit(elm, prixAleatoire()) );

// c)
console.log("c)");
produits.forEach((e) => e.afficher());

// d) Produits dont le prix est dans [125, 175]
console.log("d) Produits dont le prix est dans [125, 175]");
produits.filter((elm) => elm.prix >= 125 && elm.prix <= 175).forEach((elm) => elm.afficher());
