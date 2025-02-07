// Série 3-2, Exercice 1

/* 
DANS UN FICHIER JAVASCRIPT UNIQUE:
1. Créez une classe Vehicule avec les attributs marque et modele, ainsi qu'une méthode decrire().
2. Créez une classe Voiture qui hérite de Vehicule et ajoute un attribut nombreDePortes. Redéfinissez decrire() en appelant super.
3. Créez une classe Moto qui hérite de Vehicule et ajoute un attribut puissance. Redéfinissez decrire() en appelant super.
4. Dans une fonction main(), créez un tableau contenant plusieurs instances de Voiture et Moto. Parcourez le tableau et affichez la description de chaque véhicule.
5. Appelez la fonction main() pour exécuter votre script.
*/


// 1. Créez une classe Vehicule avec les attributs marque et modele, ainsi qu'une méthode decrire().
class Vehicule {
    constructor(marque='Ferrari', modele='F40') {
        this.marque = marque;
        this.modele = modele;
    }
    
    decrire() {
        return `Je suis un modèle ${this.modele} de la marque ${this.marque}.`;
    }
}

// 2. Créez une classe Voiture qui hérite de Vehicule et ajoute un attribut nombreDePortes. Redéfinissez decrire() en appelant super.
class Voiture extends Vehicule {
    constructor(marque, modele, nombreDePortes=2) {
        super(marque, modele);
        this.nombreDePortes = nombreDePortes;
    }
    
    decrire() {
        return `${super.decrire()} Et je possède ${this.nombreDePortes} portes.`;
    }
}

// 3. Créez une classe Moto qui hérite de Vehicule et ajoute un attribut puissance. Redéfinissez decrire() en appelant super.
class Moto extends Vehicule {
    constructor(marque='Kawazaki', modele='Z400', puissance=49) {
        super(marque, modele);
        this.puissance = puissance;
    }
    
    decrire() {
        return `${super.decrire()} Et je développe ${this.puissance} chevaux vapeur (hp).`;
    }
}

// 4. Dans une fonction main(), créez un tableau contenant plusieurs instances de Voiture et Moto. 
// Parcourez le tableau et affichez la description de chaque véhicule.
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

// 5. Appelez la fonction main() pour exécuter votre script.
main();