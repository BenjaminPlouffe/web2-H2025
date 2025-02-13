import Ouvrage from "../Ouvrage.js";

class Livre extends Ouvrage {
    constructor(titre='N/D', anneeSortie=0,genre='N/D',dispo=false,auteur="N/D", nbPage=0) {
        super(titre, anneeSortie,genre,dispo);
        this.auteur = auteur;
        this.nbPage = nbPage;
    }

    toString() {
        return super.toString() + " Auteur du livre : " + this.auteur + "Nombre de page du livre : " + this.nbPage;
    }
}

export {Livre};