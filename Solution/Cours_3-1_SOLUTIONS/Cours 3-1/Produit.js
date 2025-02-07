class Produit {
    constructor(nom="Inconnu", prix=0) {
        this.nom = nom;
        this.prix = prix;
    }

    afficher = function() {
        console.log(`Le produit ${this.nom} coûte ${this.prix}$`);
    };
}

export default Produit;