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

export default Employee;