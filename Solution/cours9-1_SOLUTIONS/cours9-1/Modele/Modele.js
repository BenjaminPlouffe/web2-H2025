export default class Modele {
    
    constructor() {
        this.apiUrl = 'https://restcountries.com/v3.1'
    }

    getPaysPromesses(endpoint='/all?fields=capital,flags,name,continents,area,population,maps') {
        return fetch(this.apiUrl + endpoint)
            .then(reponse => {
                if( !reponse.ok ) {
                    throw new Error(`Erreur ${reponse.status} : ${reponse.statusText}`);
                }
                return reponse.json()
            })
            .then(pays => pays) // on retourne tout simplement le stock! (ne pas oublier le return ligne 8)
            .catch(erreur => console.error(erreur));
    }

    async getPaysAsync(endpoint='/all?fields=capital,flags,name,continents,area,population,maps') { // doit avoir le mot-clé async
        const reponse = await fetch(this.apiUrl + endpoint);
        if( !reponse.ok ) {
            throw new Error(`Erreur ${reponse.status} : ${reponse.statusText}`);
        }
        const tabPays = await reponse.json();
        return tabPays;
    }

}