export default class Ouvrage {
    constructor(titre='N/D', anneeSortie=0,genre='N/D',dispo=true) {
        this.titre = titre;
        this.anneeSortie = anneeSortie
        this.genre = genre
        this.dispo = dispo
    }

    disponibilite(etat) {
        if (etat === true){
            this.dispo = true
        } else {
            this.dispo = false
        }
        return this.dispo;
    }

    toString(){
        return "Titre de l'ouvrage : " + this.titre + " Annee de sortie : " + this.anneeSortie + " Genre de l'ouvrage : " + this.genre +  " Dispo de l'oeuvre : " + this.dispo;
    }
}
