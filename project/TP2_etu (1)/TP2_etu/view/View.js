export class View {


  toggleDisplayForEmployeeFormDiv() {
    const divFormAddProduct = document.getElementById('employeeFormDiv');
    divFormAddProduct.classList.remove('d-none');
    const divFormDeleteProduct = document.getElementById('employeeFormDiv');
    hideAndResetForm(divFormDeleteProduct);
  }

  toggleDisplayForDivFormDeleteProduct() {
    //On doit chercher le div à 'afficher' en question
    const divFormDeleteProduct = document.getElementById('divFormDeleteProduct');
    //On doit enlever la classe 'd-none' pour afficher le div en question
    divFormDeleteProduct.classList.remove('d-none');
    //On doit chercher le div à 'cacher' (au cas où il était lui-même 'visible')
    const divFormAddProduct = document.getElementById('divFormAddProduct');
    //On doit 'cacher' ce div et 'reset' son formulaire associé (function hideAndResetForm).
    hideAndResetForm(divFormAddProduct);
  }

  closeForm(evt) {
    //On doit 'cacher' le div assocé à l'événement et 'reset' son formulaire (function hideAndResetForm) => Utiliser les propriétés target 
    // et parentElement ; même si elles sont non reconnues par intellisense, elles fonctionnent
    hideAndResetForm(evt.target.parentElement);
  }

  resetFilterPrice() {
    //On doit chercher l'input associé au filtre.
    const filterPrice = document.getElementById('numberFilterPrice');
    //On doit mettre la valeur de ce input à ""
    filterPrice.value = "";
  }

  updateProductsTable(_products = []) {
    //On doit chercher la table html où on y insérera les produits
    const table = document.querySelector('#productsTable');
    //On doit déclarer une variable (let) pour structurer les entrées de la table (les 'tableDatas')
    let tableDatas;
    //On doit réinitialiser les entrées de la table avant de la reconstruire (function resetTableDatas)
    resetTableDatas(table);
    //On doit faire une boucle sur chaque produit de la liste _products faisant les actions spécifiées dans les commentaires suivants
    _products.forEach(produit => {
      //On doit affecter la variable pour les entrées de la table à [product.name, product.price, product.quantity]
      tableDatas = [produit.name, produit.price, produit.quantity]
      //On doit append ces entrées de table (function appendTableDatas)
      appendTableDatas(table, tableDatas);
    });
    
  }
}

//Fonctions -----------------------------------------------------------------------------------------------------------------
function resetTableDatas(_table = new HTMLElement()) {
  //On doit chercher le 'tbody' de cette table (querySelector)
  const tbody = _table.querySelector('tbody');
  //On doit créer une nouvelle balise 'tbody'
  const nouveauTbody = document.createElement('tbody');
  //On doit remplacer le 'tbody' existant par le nouveau 'tbody' vide (méthode replaceChild)
  _table.replaceChild(nouveauTbody, tbody);
}

function appendTableDatas(table = new HTMLElement(), tableDatas = []) {
  //On doit chercher le 'tbody' de cette table (querySelector)
  const tbody = table.querySelector('tbody');
  //On doit créer une nouvelle balise 'tr'
  const tr = document.createElement('tr');
  //On doit append le 'tr' au 'tbody'
  tbody.append(tr);
  //On doit déclarer une variable (let) qui sera affectée à chaque data de la tableDatas.
  let td;
  //On doit faire une boucle sur chaque data de la tableDatas faisant les actions spécifiées dans les commentaires suivants
  tableDatas.forEach(data => {
    //On doit affecter la variable définie précédemment à une balise 'td' nouvellement créée
    td = document.createElement('td');
    //On doit affecter le innerText de la variable au data de la tableDatas
    td.innerText = data;
    //On doit append la nouvelle balise à la balise 'tr'
    tr.append(td);
  });
  
}

function hideAndResetForm(parentDivOfForm = new HTMLElement()) {
  //On doit ajouter la classe 'd-none' au div en paramètre
  parentDivOfForm.classList.add('d-none');
  //On doit chercher son 'form' qu'il contient (querySelector)
  const form = parentDivOfForm.querySelector('form');
  //On doit 'reset' le form (avec la méthode reset() => méthode non reconnue dans l'intellisense mais fonctionnelle)
  form.reset();
}
