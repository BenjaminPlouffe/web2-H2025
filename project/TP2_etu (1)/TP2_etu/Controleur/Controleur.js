import { _departements } from "../Modele/Departements.js";
import { Employees } from "../Modele/Employees.js";
import { View } from "../view/View.js";

    const vue = new View();
    const employees = new Employees();
    

const btnAjouter = document.getElementById('btnAjouter');
const employeeFormDiv = document.getElementById('employeeFormDiv');


btnAjouter.addEventListener('click', vue.toggleDisplayForEmployeeFormDiv);