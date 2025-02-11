export default class Ouvrage {
    constructor(titre='N/D', anneeSortie=0,genre='N/D',dispo=false) {
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
        return "Titre de l'ouvrage : " + this.titre + "annee de sortie : " + this.anneeSortie + "genre de l'ouvrage : " + this.genre +  "dispo de l'oeuvre : " + this.dispo;
    }
}
