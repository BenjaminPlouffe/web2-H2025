// Auteur   : Maxime Faucher
// Date     : 2025-02-02
// Sujet    : Série 3-1, Exercice 1

// a) Déclaration du tableau de produits
const tabProduits = [
    {nom:"Ordinateur", "prix":1200},
    {nom:"Clavier", "prix":100},
    {nom:"Moniteur", "prix":400},
    {nom:"Souris", "prix":50}
];

// b) On change le prix du moniteur pour 200
tabProduits[1].prix = 200;
console.log('b)', tabProduits[1]['prix']);


// c) Calcul du prix total de tous les produits du tableau
let sommePrix = tabProduits.reduce( (somme, element) => somme + element.prix, 0 );
console.log("c) Le prix total est", sommePrix);

// d) Fonction externe ‘afficherProduits(_tableau = [])’ qui utilise .forEach() pour 
// parcourir les objets du tableau et qui utilise une boucle for… in pour afficher 
// toutes les propriétés (sous la forme ‘nom de la clé’: valeur) de chacun des objets 
// en console. Appeler cette fonction.
const afficherProduits = (_tableau=[]) => {
    console.log(`\nTableau de ${_tableau.length} objets :`);
    _tableau.forEach((element, index, tableau) => {
        console.log(`Objet ${index + 1}`);
        for(const propriete in element) {
            console.log(`${propriete}: ${element[propriete]}`);
        }
    });
    console.log("");
};
console.log("d)");
afficherProduits(tabProduits);

// Fonction externe ‘trierParNom(_tableau = [])’ pour trier avec .sort() les objets 
// du tableau par ordre alphabétique de nom. Appeler cette fonction puis refaire un 
// appel à afficherProduits() pour illustrer le nouvel ordre.
const trierParNom = (_tableau=[]) => {
    _tableau.sort( (element1, element2) => element1.nom.localeCompare(element2.nom));
};

console.log("e) Tri des objets du tableau par nom...");
trierParNom(tabProduits);
afficherProduits(tabProduits);
