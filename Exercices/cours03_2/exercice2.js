//Benjamin Plouffe
//2025-02-06

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 2 : Gestion des employés

class Employe {
    constructor(nom="N/D",salaireBase=0) {
        this.nom = nom;
        this.salaireBase = salaireBase;
    }
    calulerSalaire() {
        return this.salaireBase;
    }
}

export default (Employe)