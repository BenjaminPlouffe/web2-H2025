import Employe from "./Employe.js";

class Manager extends Employe {
    constructor(nom, salaire, bonus=0) {
        super(nom, salaire);
        this.bonus = bonus;
    }

    calculerSalaire() {
        return super.calculerSalaire() + this.bonus;
    }
}

export {Manager};