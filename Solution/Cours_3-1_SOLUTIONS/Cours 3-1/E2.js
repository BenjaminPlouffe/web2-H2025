// Auteur   : Maxime Faucher
// Date     : 2025-02-02
// Sujet    : Série 3-1, Exercice 2

// a) Faire une fonction constructeur Produit(nom, prix) qui servira à construire 
// des objets Produit possédant les 3 propriétés suivantes : nom, prix et afficher(), 
// qui est une méthode qui affiche en console les infos de l’objet, de la forme 
// "Le produit {nom du produit} coûte {prix du produit}$". Votre fonction doit avoir 
// des valeurs par défaut pour ses 2 paramètres.
const Produit = function(nom="Inconnu", prix=0) {
    this.nom = nom;
    this.prix = prix;
    this.afficher = function() {
        console.log(`Le produit ${this.nom} coûte ${this.prix}$`);
    };
}

// b) Déclarer un tableau nommé ‘tabProduits’ vide. À l’aide de la méthode .push() et 
// de votre fonction constructeur, ajouter les 4 produits de l’exercice 1 à tabProduits.
const tabProduits = [];
tabProduits.push(new Produit('Ordinateur', 1200));
tabProduits.push(new Produit('Moniteur', 200));
tabProduits.push(new Produit('Clavier', 100));
tabProduits.push(new Produit('Souris', 50));

// c) À l’aide de la méthode .unshift() et de votre fonction constructeur sans argument, 
// ajouter un 5e produit au début de tabProduits.
tabProduits.unshift(new Produit());

// d) Afficher chaque élément tabProduits en console en appelant leur méthode .afficher().
console.log('d) Affichage du tableau');
tabProduits.forEach((element) => element.afficher());

// e) Faire une fonction externe ‘trierParPrix(_tableau = [])’ pour trier avec .sort() les 
// objets du tableau par ordre de prix décroissant. Appeler cette fonction afin d’appliquer 
// ce tri sur votre tableau. Refaire afficher les éléments de tabProduits en console.
console.log('e) Tableau trié par prix décroissants');
const trierParPrix = (_tableau=[]) => {
    _tableau.sort((element1, element2) => element1.prix - element2.prix);
    tabProduits.reverse();
};
trierParPrix(tabProduits);
tabProduits.forEach((element) => element.afficher());
