import Vue from "../Vues/View";
import { _pokemonTypes } from "../Modeles/pokemonTypes";

    const vue = new Vue;

document.addEventListener('DOMContentLoaded', () => {

    //chargement de la liste 
    vue.chargementListe(_pokemonTypes)

});