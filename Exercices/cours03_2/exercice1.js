//Benjamin Plouffe
//2025-02-06

import ps from 'prompt-sync';
const prompt = ps();

//Exercice 1 : Gestion des véhicules

class Vehicule {
    constructor(marque="N/D",modele="N/D") {
        this.marque = marque;
        this.modele = modele;
    }
    decrire() {
        return `Ce véhicule est de marque ${this.marque} et de modèle ${this.modele}.`;
    }
}

class Voiture extends Vehicule {
    constructor(marque,modele,nombreDePortes = 4) {
        super(marque,modele);
        this.nombreDePortes = nombreDePortes;
    }

    decrire() {
        return super.decrire() + `C'est une voiture avec ${this.nombreDePortes} portes.`;
    }
}

class Moto extends Vehicule {
    constructor(marque,modele,puissance = 0) {
        super(marque,modele);
        this.puissance = puissance;
    }

    decrire() {
        return super.decrire() + `C'est une moto avec une puissance de ${this.puissance}.`;
    }
}

const main = () => {

    const vehicules = [
        new Voiture('Mazda', 'CX-5', 5),
        new Moto('Ducati', '848 Evo', 140),
        new Moto('BMW', 'S1000RR', 220),
        new Voiture('Volvo', 'XC70', 5),
        new Moto('KTM', 'S1290', 160),
        new Voiture('Nissan', 'Leaf', 4),
        new Moto('Suzuki', 'GSX-RR', 218),
        new Voiture('BMW', 'X1', 5),
        new Voiture(),
        new Moto(),
    ];

    vehicules.forEach(elm => console.log(elm.decrire()));
}

main();

