export default class Employe {
    constructor(nom='inconnu', salaire=0) {
        this.nom = nom;
        this.salaire = salaire
    }

    calculerSalaire() {
        return this.salaire;
    }
}
