import Ouvrage from "../ouvrages";

class Film extends Ouvrage {
    constructor(titre='N/D', anneeSortie=0,genre='N/D',dispo=false,realisateur="N/D", duree=0) {
        super(titre, anneeSortie,genre,dispo);
        this.realisateur = realisateur;
        this.duree = duree;
    }

    toString() {
        return super.toString() + "réalisateur du film : " + this.realisateur + "durée du film : " + this.duree;
    }
}

export {Film};