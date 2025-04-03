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
}
