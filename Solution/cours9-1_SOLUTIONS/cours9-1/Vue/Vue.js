export default class Vue {

    updatePays(tabPays = []) {
        // Le conteneur des 'cards' des pays
        const divPays = document.getElementById('divPays');
        // On crée une 'card' pour chaque pays!
        tabPays.forEach(p => {
            const carte = document.createElement('div');
            carte.className = "card col-sm-12 col-md-6 col-lg-3 p-0";
            const carteHeader = document.createElement('div');
            carteHeader.classList.add('card-header');
            carteHeader.textContent = p.continents[0];
            const img = document.createElement('img');
            img.className = 'card-img-top rounded-0';
            img.src = p.flags.png;
            img.alt = "Drapeau du pays " + p.name.common;
            const carteBody = document.createElement('div');
            carteBody.className = 'card-body';
            const h5 = document.createElement('h5');
            h5.className = 'card-title';
            h5.textContent = p.name.common;
            const h6 = document.createElement('h6');
            h6.className = 'card-subtitle mb-2 text-muted';
            h6.textContent = 'Capitale : ' + p.capital[0];
            const elmP = document.createElement('p');
            p.className = "card-text";
            const sup = document.createElement('sup');
            sup.textContent = '2';
            elmP.append("Ce pays d'une superficie de ", p.area, " km", sup, " compte ", p.population, " habitants.");
            const a = document.createElement('a');
            a.href = p.maps.googleMaps;
            a.className = "btn btn-primary";
            a.target = "_blank";
            a.textContent = "Carte";
    
            carte.append(carteHeader, img, carteBody);
            carteBody.append(h5, h6, elmP, a);
    
            divPays.append(carte);
    
        });
    }
}