import { Products } from "../Models/Products.js";
import { View } from "../Views/View.js";

document.addEventListener('DOMContentLoaded', () => {

    // Instanciations du modèle et de la vue
    const produits = new Products();
    const vue = new View();

    // Chargement initial
    vue.updateProductsTable(produits.getProducts());

    // Élméments pertinents
    const divFormAddProduct = document.getElementById('divFormAddProduct');
    const formAddProduct = divFormAddProduct.querySelector('form');
    const divFormDeleteProduct = document.getElementById('divFormDeleteProduct');
    const formDeleteProduct = divFormDeleteProduct.querySelector('form');
    const btnGetFormAddProduct = document.getElementById('btnGetFormAddProduct');
    const btnGetFormDeleteProduct = document.getElementById('btnGetFormDeleteProduct');
    const inputNumberFilterPrice = document.getElementById('numberFilterPrice');

    //Ajouter l'event listener pour le 'click' du bouton pour faire apparaître le formulaire d'ajout de produit (le listener est vue.toggleDisplayForDivFormAddProduct)
    btnGetFormAddProduct.addEventListener('click', vue.toggleDisplayForDivFormAddProduct);
    //Ajouter l'event listener pour le 'click' du bouton pour faire apparaître le formulaire de suppression de produit (le listener est vue.toggleDisplayForDivFormDeleteProduct)
    btnGetFormDeleteProduct.addEventListener('click', vue.toggleDisplayForDivFormDeleteProduct);
    //Ajouter l'event listener pour le 'reset' du formulaire d'ajout de produit permettant de le fermer (le listener est vue.closeForm)
    formAddProduct.addEventListener('reset', vue.closeForm);
    //Ajouter l'event listener pour le 'reset' du formulaire de suppression de produit permettant de le fermer (le listener est vue.closeForm)
    formDeleteProduct.addEventListener('reset', vue.closeForm);
    //Ajouter l'event listener pour le 'submit' du formulaire d'ajout de produit permettant de faire les actions spécifiées dans les commentaires suivants (le listener est anonyme avec un paramètre evt)
    formAddProduct.addEventListener('submit', evt => {
        //On doit prévenir le comportement par défaut du submit
        evt.preventDefault();
        //On doit soumettre le produit associé à l'événement (produits.submitProduct(evt)) => la fonction submitProduct doit retourner la liste de produits qui doit elle-même être passée en paramètre de pour l'affichage de la table de produits (vue.updateProductsTable())
        vue.updateProductsTable(produits.submitProduct(evt));
        //On doit fermer le formulaire associé à l'événement après l'envoie
        vue.closeForm(evt);
        //On doit reset le filtre de la table s'il y avait un filtre appliqué.
        vue.resetFilterPrice();
    });

    //Ajouter l'event listener pour le 'submit' du formulaire de suppression de produit permettant de faire les actions spécifiées dans les commentaires suivants (le listener est anonyme avec un paramètre evt)
    formDeleteProduct.addEventListener('submit', evt => {
        //On doit prévenir le comportement par défaut du submit
        evt.preventDefault();
        //On doit soumettre le produit associé à l'événement (produits.removeSubmitedProduct(evt)) => la fonction removeSubmitedProduct doit retourner la liste de produits qui doit elle-même être passée en paramètre de pour l'affichage de la table de produits (vue.updateProductsTable())
        vue.updateProductsTable(produits.removeSubmitedProduct(evt));
        //On doit fermer le formulaire associé à l'événement après l'envoie
        vue.closeForm(evt);
        //On doit reset le filtre de la table s'il y avait un filtre appliqué.
        vue.resetFilterPrice();
    });

    //Ajouter l'event listener pour le 'input' du input du filtre de la table de produits permettant de faire les actions spécifiées dans les commentaires suivants (le listener est anonyme avec un paramètre evt)
    //On doit filtrer la liste de produit associée à l'événement (produits.getFilteredProductsList(evt)) => la fonction getFilteredProductsList doit retourner la liste de produits filtrée qui doit elle-même être passée en paramètre de pour l'affichage de la table de produits (vue.updateProductsTable())
    inputNumberFilterPrice.addEventListener('input', evt => vue.updateProductsTable(produits.getFilteredProductsList(evt)));
    
    
});

