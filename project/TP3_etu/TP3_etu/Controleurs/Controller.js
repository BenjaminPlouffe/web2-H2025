import { View } from "../Vues/View";
import { _pokemonTypes } from "../Modeles/pokemonTypes";

document.addEventListener('DOMContentLoaded', () => {
    
    const vue = new View();

    //chargement de la liste 
    vue.chargementListe(_pokemonTypes);
});