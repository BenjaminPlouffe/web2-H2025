import { _departements } from "../Modele/Departements.js";
import { Employees } from "../Modele/Employees.js";
import { View } from "../view/View.js";
document.addEventListener('DOMContentLoaded', () => {
    const vue = new View();
    const employees = new Employees();
    

const btnAjouter = document.getElementById('btnAjouter');
const employeeFormDiv = document.getElementById('employeeFormDiv');

//validation bootstrap
(() => {
    'use strict';
  
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        let isValid = true;
        const matricule = document.getElementById('matricule');
        const prenom = document.getElementById('prenom');
        const nom = document.getElementById('nom');
        const salaire = document.getElementById('salaire');
        const departement = document.getElementById('departement');
        const courriel = document.getElementById('courriel');
        const retraite = document.getElementById('retraite');
        const dateRetraite = document.getElementById('dateRetraite');
        const today = new Date();

        
        // condition matricule
        if (matricule.value.length !== 5 || matricule.value.charAt(0) !== matricule.value.charAt(0).toUpperCase() || isNaN(matricule.value.substring(1, 5))) {
            matricule.classList.add('is-invalid');
            isValid = false;
          } else {  
            matricule.classList.remove('is-invalid');
            matricule.classList.add('is-valid');
          }

          //condition prenom 
        if (!prenom.value) {
            prenom.classList.add('is-invalid');
            isValid = false;
          } else {  
            prenom.classList.remove('is-invalid');
            prenom.classList.add('is-valid');
          }
          //condition nom 
          if (!nom.value) {
            nom.classList.add('is-invalid');
            isValid = false;
          } else {  
            nom.classList.remove('is-invalid');
            nom.classList.add('is-valid');
          }
          // condition salaire
          if (isNaN(salaire.value)|| parseInt(salaire.value) < 0||!salaire.value) {
            salaire.classList.add('is-invalid');
            isValid = false;
          } else {  
            salaire.classList.remove('is-invalid');
            salaire.classList.add('is-valid');
          }
          //condition departement 
          if (!departement.value) {
            departement.classList.add('is-invalid');
            isValid = false;
          } else {  
            departement.classList.remove('is-invalid');
            departement.classList.add('is-valid');
          }
          //condition courriel
          if (!courriel.value.includes('@') || !courriel.value.includes('.ca')) {
            courriel.classList.add('is-invalid');
            isValid = false;
          } else {  
            courriel.classList.remove('is-invalid');
            courriel.classList.add('is-valid');
          }

          //condition retraité 
          retraite.classList.add('is-valid');
          
          //condition date retraité
          if (dateRetraite.value !== '' && dateRetraite.value< today) {
            dateRetraite.classList.add('is-invalid');
            isValid = false;
          } else {  
            dateRetraite.classList.remove('is-invalid');
            dateRetraite.classList.add('is-valid');
          } 

        if (isValid && form.checkValidity()) {
            event.preventDefault();
            vue.updateTable(employees.submitProduct(event));
            vue.closeForm(event);
            alert('Formulaire soumis avec succès!');
            form.classList.add('was-validated');
            /*     vue.resetFilterPrice(); */
          }
    });
  })();

//affichage du form 
btnAjouter.addEventListener('click', vue.toggleDisplayForEmployeeFormDiv);
employeeFormDiv.addEventListener('reset', vue.closeForm);

function mainModifier(id){
vue.toggleDisplayForModifier(id,employees.list)
}


// options département
const departement = document.getElementById('departement');
  _departements.forEach((departementInd) => {
    const option = document.createElement('option');
    option.value = departementInd.id;
    option.textContent = departementInd.nom;
    departement.appendChild(option);
  });
//option retraité
const retraite = document.getElementById('retraite');
retraite.addEventListener('change', vue.toggleRetraite);




});