import { Product } from "./Product.js";

export class Products {
  constructor() {
    this.productsList = [
      new Product("Pomme",1,15),
      new Product("Orange",2,12),
      new Product("pomme",5,3),
    ]; // mettre des valeurs initiales ici
  }

  getProducts() {
    return this.productsList;
  }

  submitProduct(evt) {
    //On doit transformer le formulaire soumis en FormData (new FormData(evt.target)) et l'affecter à une constante
    const formData = new FormData(evt.target);
    //On doit ajouter les informations de ce formData à notre liste de produits (function addProduct) et réaffecter la liste de produits aux résultats
    this.product = addProduct(this.productsList, formData);
    //On doit retourner la nouvelle liste de produits au controller
    return this.productsList;
  }

  removeSubmitedProduct(evt) {
    //On doit transformer le formulaire soumis en FormData (new FormData(evt.target)) et l'affecter à une constante
    const formData = new FormData(evt.target);
    //On doit retirer les informations de ce formData à notre liste de produits (function removeProduct) et réaffecter la liste de produits aux résultats
    this.product = removeProduct(this.productsList, formData);
    //On doit retourner la nouvelle liste de produits au controller
    return this.productsList;
  }

  getFilteredProductsList(evt) {
    //On doit chercher la valeur de l'input utilisant ce listener (evt.target.value) et affecter cette valeur à une constante 'priceCutOff'
    const prixMax = evt.target.value;
    //On doit vérifier si la valeur de l'input === "", alors on ne filtre pas (on retourne la liste de produits telle qu'elle), sinon on retourne une nouvelle liste filtrée
    if (prixMax ) {
      return this.getProducts();
    }
    else{
      return this.productsList.filter(produit => produit.price < parseInt(prixMax)); // produits filtrés
    }


    this.productsList.filter((product) => product.price < priceCutOff); //pour filtrer les produits dont le prix est inférieur à la valeur de l'input
    
  }
}

//Fonctions -----------------------------------------------------------------------------------------------------------------

//Teste si une liste est vide
function isEmpty(_liste = []) {
  if (_liste.length <= 0) {
    return true;
  } else {
    return false;
  }
}

//Ajouter un produit à la liste de produits
function addProduct(_productsList = [], _formData = new FormData()) {
  const name = _formData.get('name'); //On doit extraire le nom du produit du formData (get("name"))
  const price = parseInt(_formData.get('price')); //On doit extraire le prix du produit du formData (get("price")) => Il faut convertir cette donnée en nombre
  const quantity = parseInt(_formData.get('quantity')); //On doit extraire la quantité du produit du formData (get("quantity")) => Il faut convertir cette donnée en nombre
  const index = _productsList.findIndex((product) => product.name.toLowerCase() === name.toLowerCase()); // on cherche si le produit existe deja

  if (isEmpty(_productsList) || index === -1) { // si liste vide ou produit inexistant, on AJOUTE
    _productsList.push(new Product(name, price, quantity));
  } else { // produit deja EXISTANT, on modifie la quantité
    _productsList[index].quantity += quantity;
  }

  return _productsList;
}

//Supprimer un produit de la liste de produits (ou diminuer la quantité)
function removeProduct(_productsList = [], _formData = new FormData()) {
  const name = _formData.get('name'); //On doit extraire le nom du produit du formData (get("name"))
  const quantity = parseInt(_formData.get('quantity')); //On doit extraire la quantité du produit du formData (get("quantity")) => Il faut convertir cette donnée en nombre
  const index = _productsList.findIndex((product) => product.name.toLowerCase() === name.toLowerCase());

  if (index !== -1) { // si produit EXISTANT , on ajuste la quantité
    if (_productsList[index].quantity > quantity) { // le produit vas rester avec une quantité > 0
      _productsList[index].quantity -= quantity;
    } else { // le produit est supprimé
      _productsList.splice(index, 1);
    }
  }

  return _productsList;
}
