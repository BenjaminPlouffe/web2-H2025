import Employe from "./Employe.js";

export default class Developpeur extends Employe {
    constructor(nom, salaire, technologie='JavaScript') {
        super(nom, salaire);
        this.technologie = technologie;
    }
}

