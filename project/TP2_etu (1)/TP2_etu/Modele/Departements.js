// Tableau des départements (à importer dans le modèle)
class Employee {

constructor(matricule ='N/D',prenom='N/D',nom='N/D',salaire=0,departement='N/D',retraite = false,dateDeRetraite = 0) {
    this.matricule = matricule;
    this.prenom = prenom;
    this.nom = nom;
    this.salaire = salaire;
    this.departement = departement;
    this.retraite = retraite;
    this.dateDeRetraite =dateDeRetraite;
    
}

}

class Employees{
    constructor(list = []){
        this.list = list;
    }
}



const _departements = [
    { id: 1, nom: 'Comptabilité' },
    { id: 2, nom: 'Finances' },
    { id: 3, nom: 'Informatique' },
    { id: 4, nom: 'Marketing' },
    { id: 5, nom: 'Ressources humaines' },
];

export default _departements + Employee;