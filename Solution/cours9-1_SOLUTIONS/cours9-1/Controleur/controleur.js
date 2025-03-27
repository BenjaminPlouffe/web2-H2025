import Modele from "../Modele/Modele.js";
import Vue from "../Vue/Vue.js";

const vue = new Vue();
const modele = new Modele();

// Fonction pour le chargement de la page avec promesses
function initPromesses() {

    modele.getPaysPromesses() // getPaysPromesses utilise fetch, alors on gère les promesses!
        .then(tabPays => {
            vue.updatePays(tabPays);
        })
        .catch(e => console.error(e));
}

// Fonction pour le chargement de la page avec async / await
async function initAsync() {
    try { // cette fois-ci, on gère les erreurs avec try / catch
        const tabPays = await modele.getPaysAsync(); // getPaysAsync utilise fetch, alors on await la réponse!
        vue.updatePays(tabPays);
    }
    catch(e) {
        console.error(e);
    }
}

// Alterner entre les deux fonctions pour voir la différence
//document.addEventListener('DOMContentLoaded', initPromesses);
document.addEventListener('DOMContentLoaded', initAsync);