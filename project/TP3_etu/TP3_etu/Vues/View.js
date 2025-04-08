export class View {


    chargementListe(liste) {
        const select = document.getElementById('typeSelect')
        liste.forEach(pokemonTypes => {
            const option = document.createElement('option');
            option.value = pokemonTypes.id;
            option.textContent = pokemonTypes.nom;
            select.append(option);
        });
    }

    getType(){
        const select = document.getElementById("typeSelect");
        const valeur = select.value;
        return valeur;
    }

    async affichageNom(liste){
        // <button class="btn btn-warning" data-pokemon-endpoint="https://pokeapi.co/api/v2/pokemon/25/" data-is-active="false">pikachu</button>
        const pokemonList = document.getElementById('pokemonList');
        pokemonList.innerHTML =  ""
        //console.log(liste);
        liste.pokemon.forEach(pokemon=> {
            //console.log(pokemon);
            const button = document.createElement('button');
            button.classList = "btn btn-warning";
            button.setAttribute("data-pokemon-endpoint", pokemon.pokemon.url);
            button.setAttribute("data-is-active", "false");
            button.innerText = pokemon.pokemon.name;
            pokemonList.append(button)
        });
    }

    removeCard(){
        const cartePokemon = document.getElementById('divCard');
        const allButton = pokemonList.querySelectorAll('button');
                    allButton.forEach(element => {
                        element.setAttribute("data-is-active", "false");
                        element.className = "btn btn-warning";
                        cartePokemon.classList.add('d-none');
        });
    }
    affichagePokemon(pokemonData){
        const pokemonImage = document.getElementById('pokemonImage');
        const pokemonName = document.getElementById('pokemonName');
        const pokemonWeight = document.getElementById('pokemonWeight');
        const pokemonHeight = document.getElementById('pokemonHeight');
        const pokemonTypesList = document.getElementById('pokemonTypesList');
        const pokemonAbilities = document.getElementById('pokemonAbilities');
        //console.log(pokemonData);
        //console.log(pokemonData.abilities);
        pokemonName.innerText = pokemonData.name;
        pokemonImage.setAttribute("src", pokemonData.sprites.front_default);
        pokemonWeight.innerText = pokemonData.weight;
        pokemonHeight.innerText = pokemonData.height;
        pokemonTypesList.innerHTML = "";
        pokemonData.types.forEach(element => {
            //console.log(element.type.name);
            const span = document.createElement('span');
            span.className ="badge bg-warning text-dark";
            span.innerText = element.type.name;
            pokemonTypesList.append(span);
        });
        pokemonAbilities.innerHTML = "";
    }
    
    affichageAbilete(abilitieData){
        //console.log(abilitieData.name);
        const dt = document.createElement('dt');
        dt.innerText = abilitieData.name;
        dt.className = "clr-bleu";
        const pokemonAbilities = document.getElementById('pokemonAbilities');
        const dd = document.createElement('dd');
        dd.innerText = abilitieData.effect_entries[1].short_effect;
        pokemonAbilities.append(dt);
        pokemonAbilities.append(dd);
    }
}


