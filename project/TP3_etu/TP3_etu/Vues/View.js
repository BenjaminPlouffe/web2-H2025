export default class Vue {


    chargementListe(liste) {
        const select = document.getElementById('typeSelect')
        liste.forEach((pokemonTypes) => {
            const option = document.createElement('option');
            option.value = pokemonTypes.id;
            option.textContent = pokemonTypes.nom;
            select.appendChild(option);
        });
    }
}
