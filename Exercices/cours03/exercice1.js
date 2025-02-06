//Benjamin Plouffe
//2025-02-04

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 1 : Objets JavaScript

function Produit(_nom='Inconnu', _prix=0) {
    this.nom = _nom;
    this.prix = _prix;
}

const produit1 = new Produit("Ordinateur", 1200);
const produit2 = new Produit("Clavier", 100);
const produit3 = new Produit("Moniteur", 400);
const produit4 = new Produit("Souris", 50);


// a
const tabProduits =[produit1,produit2,produit3,produit4,] 

// b
delete produit2.prix;
produit2.prix = 200;
console.log(produit2);

// c
let sommeProduitsTotal =tabProduits.reduce((sommeProduits, element) => parseInt(sommeProduits) + parseInt(element.prix), 0);
console.log(sommeProduitsTotal);

// d

afficherProduits(tabProduits)

function afficherProduits(_tableau=[]){
    _tableau.forEach((element, index, tableau) => {
        for(const propriete in element) {
            console.log(element[propriete]);
        }
    });
}

function trierParNom(_tableau=[]){
    _tableau.sort( (element1, element2) => element1.nom.localeCompare(element2.nom));
}
trierParNom(tabProduits)
afficherProduits(tabProduits)