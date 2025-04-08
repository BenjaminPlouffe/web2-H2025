import { View } from "../Vues/View.js";
import { _pokemonTypes } from "../Modeles/pokemonTypes.js";
import { Modele } from "../Modeles/Modele.js";
const vue = new View();
const modele = new Modele();
const typeSelect = document.getElementById("typeSelect");
const closeCard = document.getElementById('closeCard')

document.addEventListener('DOMContentLoaded', () => {
    vue.chargementListe(_pokemonTypes);
});


typeSelect.addEventListener("input",async() =>{
    const type = "https://pokeapi.co/api/v2/type/" + vue.getType();
    console.log(type);
    const pokemon = await initAsync(type);
        console.log(pokemon);
    vue.affichageNom(pokemon);
});

closeCard.addEventListener("click",() =>{
    vue.removeCard();
    
});

    export async function initAsync(_type) {
    try {
        let pokemon = await modele.getPokemonAsync(_type);
        console.log(pokemon);
        return pokemon;

    }
    catch(e) {
        console.error(e);
    }
}

    export async function retourControleurPokemon(url){
    try {
        let pokemon = await modele.getPokemonAsync(url);
        vue.affichagePokemon(pokemon);

    }
    catch(e) {
        console.error(e);
    }
    
}
export async function retourControleurAbilite(url){
    try {
        let pokemon = await modele.getPokemonAsync(url);
        vue.affichageAbilete(pokemon);

    }
    catch(e) {
        console.error(e);
    }
}