
export class Modele {

    async getPokemonAsync(apiUrl){
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