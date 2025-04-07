export class View {

  toggleDisplayForModifier(list){
    resetForm(employeeFormDiv);
    const divFormAddProduct = document.getElementById('employeeFormDiv');
    divFormAddProduct.classList.remove('d-none');
    const matricule = document.getElementById('matricule');
    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const salaire = document.getElementById('salaire');
    const departement = document.getElementById('departement');
    const courriel = document.getElementById('courriel');
    const retraite = document.getElementById('retraite');
    const dateRetraite = document.getElementById('dateRetraite');
    matricule.value = list[id-1].matricule;
    prenom.value = list[id-1].prenom;
    nom.value = list[id-1].nom;
    salaire.value = list[id-1].salaire;
    departement.value = list[id-1].departement;
    courriel.value = list[id-1].courriel;
    retraite.value = list[id-1].retraite;
    dateRetraite.value = list[id-1].dateRetraite;


  }
  toggleDisplayForEmployeeFormDiv() {
    resetForm(employeeFormDiv);
    const divFormAddProduct = document.getElementById('employeeFormDiv');
    divFormAddProduct.classList.toggle('d-none');
  }

  closeForm(evt){
    const divFormAddProduct = document.getElementById('employeeFormDiv');
    divFormAddProduct.classList.add('d-none');
    resetForm(employeeFormDiv)
  }

  updateTable(_empoyee = []) {
    const table = document.querySelector('#employeeTable');
    let tableDatas;
    resetTableDatas(table);
    _empoyee.forEach(employee => {
      tableDatas = [employee.matricule, employee.nom + ", " + employee.prenom,employee.salaire,employee.departement,employee.courriel,employee.dateDeRetraite]  
      appendTableDatas(table, tableDatas);
    });
  }

  toggleRetraite(){
    const dateRetraite = document.getElementById('dateRetraite');
    dateRetraite.value = '';
    const divDateRetraite = document.getElementById('divDateRetraite');
    divDateRetraite.classList.toggle('d-none');
    dateRetraite.classList.remove('is-invalid');
    dateRetraite.classList.remove('is-valid');
  }


/*   resetFilterPrice() {
    const filterPrice = document.getElementById('numberFilterPrice');
    filterPrice.value = "";
  } */
}
let idModifieur = 0;
function appendTableDatas(table = new HTMLElement(), tableDatas = []) {
  const tbody = table.querySelector('tbody');
  const tr = document.createElement('tr');
  tbody.append(tr);
  let td;
  tableDatas.forEach(data => {
    td = document.createElement('td');
    td.innerText = data;
    tr.append(td);
  });
  let td1 = document.createElement('td');
  tr.append(td1);
  let modifier;
  
  modifier = document.createElement('button');
  modifier.classList.add('btn', 'btn-primary','btn-warning','js-modifier','modifier');
  modifier.id = ++idModifieur;
  modifier.innerText = "Modifier";
  modifier.addEventListener('click', function() {
    mainModifier(idModifieur);
  });
  td1.append(modifier);
}
function resetTableDatas(_table = new HTMLElement()) {
  const tbody = _table.querySelector('tbody');
  const nouveauTbody = document.createElement('tbody');
  _table.replaceChild(nouveauTbody, tbody);
}

function resetForm(parentDivOfForm = new HTMLElement()) {
  const form = parentDivOfForm.querySelector('form');
  const matricule = document.getElementById('matricule');
  const prenom = document.getElementById('prenom');
  const nom = document.getElementById('nom');
  const salaire = document.getElementById('salaire');
  const departement = document.getElementById('departement');
  const courriel = document.getElementById('courriel');
  const retraite = document.getElementById('retraite');
  const dateRetraite = document.getElementById('dateRetraite');
  form.classList.remove('was-validated');
  matricule.classList.remove('is-valid');
  prenom.classList.remove('is-valid');
  nom.classList.remove('is-valid');
  salaire.classList.remove('is-valid');
  departement.classList.remove('is-valid');
  courriel.classList.remove('is-valid');
  retraite.classList.remove('is-valid');
  dateRetraite.classList.remove('is-valid');
  matricule.classList.remove('is-invalid');
  prenom.classList.remove('is-invalid');
  nom.classList.remove('is-invalid');
  salaire.classList.remove('is-invalid');
  courriel.classList.remove('is-invalid');
  retraite.classList.remove('is-invalid');
  dateRetraite.classList.remove('is-invalid');
  form.reset();
}
