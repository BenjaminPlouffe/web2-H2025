import { Employee } from "./Employee.js";

export class Employees{
    constructor(list = []){
        this.list
    }

    submitProduct(evt) {
        const formData = new FormData(evt.target);
        this.list = addProduct(this.list, formData);
        return this.list;
      }
      getProducts() {
        return this.list;
      }
}


function addProduct(_List = [], _formData = new FormData()) {
    const matricule = _formData.get('matricule'); 
    const prenom = _formData.get('prenom'); 
    const nom = _formData.get('nom'); 
    const salaire = _formData.get('salaire'); 
    const departement = _formData.get('departement'); 
    const courriel = _formData.get('courriel'); 
    const retraite = _formData.get('retraite'); 
    const dateDeRetraite = _formData.get('dateRetraite'); 
    
    _List.push(new Employee(matricule, prenom, nom,salaire,departement,courriel,retraite,dateDeRetraite));
    return _List;
  }