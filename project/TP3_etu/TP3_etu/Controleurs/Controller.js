import { View } from "../Vues/View.js";
import { _pokemonTypes } from "../Modeles/pokemonTypes.js";
import { Modele } from "../Modeles/Modele.js";

const vue = new View();
const modele = new Modele();

document.addEventListener('DOMContentLoaded', () => {
    const closeCard = document.getElementById('closeCard')
    const typeSelect = document.getElementById("typeSelect");
    vue.chargementListe(_pokemonTypes);
    typeSelect.addEventListener("change", updatePokemonButtons);
    closeCard.addEventListener("click", () =>{
        vue.removeCard();    
    });

});




async function initAsync(_type) {
    try {
        let pokemon = await modele.getPokemonAsync(_type);
        //console.log(pokemon);
        return pokemon;
        
    }
    catch(e) {
        console.error(e);
    }
}


async function updatePokemonButtons() {
    // Récupérer la valeur sélectionnée dans l aliste
    // Si c'est 0 => vider la liste
    // Si c'est autre chose
    //      poker le modele pour récupérer les pokemons dont le type est 1 à 18
    const type = "https://pokeapi.co/api/v2/type/" + vue.getType();
    //console.log(type);
    const pokemon = await initAsync(type);
        //console.log(pokemon);
    vue.affichageNom(pokemon);
    // Venir attacher les eventListeners ICI
    const boutons = document.querySelectorAll('#pokemonList button');
    boutons.forEach(bouton => {bouton.addEventListener('click', async() => {
            const currentState = bouton.getAttribute("data-is-active");
            const cartePokemon = document.getElementById('divCard')
            if (currentState === "true") {
                bouton.setAttribute("data-is-active", "false");
                bouton.className = "btn btn-warning";
                cartePokemon.classList.add('d-none');
            } else{
                const allButton = pokemonList.querySelectorAll('button')
                const pokemonUrl = bouton.getAttribute("data-pokemon-endpoint");
                allButton.forEach(element => {
                    element.setAttribute("data-is-active", "false");
                    element.className = "btn btn-warning";
                    cartePokemon.classList.remove('d-none');
                });
                bouton.setAttribute("data-is-active", "true");
                bouton.className = "btn btn-secondary";
                const pokemonInfo = await initAsync(pokemonUrl)
            vue.affichagePokemon(pokemonInfo);
            pokemonInfo.abilities.forEach(async element => {
                const abilitiesInfo = await initAsync(element.ability.url);
                vue.affichageAbilete(abilitiesInfo);
                });

    }});
})}

