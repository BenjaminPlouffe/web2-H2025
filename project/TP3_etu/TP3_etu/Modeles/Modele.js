
export class Modele {

    async getPokemonAsync(apiUrl){ // pour une liste de pokemon par type
        return await fetch(apiUrl)
        .then(reponse => {
            if( !reponse.ok ) {
                throw new Error(`Erreur ${reponse.status} : ${reponse.statusText}`);
            }
            return reponse.json()
        })
        .then(pokemon => pokemon)
        .catch(erreur => console.error(erreur));
        
    }
}