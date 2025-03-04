// Initialisation des éléments, fonction init()
const init = () => {

    // Création des éléments
    const divContainer = document.createElement('div');
    const divClickMeCard = document.createElement('div');
    const divClickMeBtn = document.createElement('div');
    const pClickMe = document.createElement('p');
    const btnClickMe = document.createElement('button');

    // Ajout des éléments au document
    divClickMeBtn.append(btnClickMe);
    divClickMeCard.append(pClickMe);
    divContainer.append(divClickMeCard, divClickMeBtn); // .apend() permet l'ajout multiple
    document.body.append(divContainer);

    // Personnalisation des éléments
    divContainer.classList.add('container');
    divContainer.classList.add('vh-100');
    divClickMeCard.setAttribute('class', 'card mt-5 w-25 h-25 align-items-center bg-success'); // moins long si plusieurs classes!
    divClickMeCard.id = "clickMeCard";
    divClickMeCard.dataset.dangerCount = 0;
    pClickMe.classList.add('m-auto');
    pClickMe.innerText = "Click below! 😊";
    divClickMeBtn.className = "card-body w-25 align-items-center d-flex"; // marche aussi bien que setAttribute('class', ...)!
    btnClickMe.className = "btn m-auto btn-dark";
    btnClickMe.type = "button";
    btnClickMe.innerText = "--> Click here <--";
    btnClickMe.setAttribute('id', 'btnClickMe');

    //

};

/* Fonctions externes **********************************************/

//Pour mettre la classe 'avertissement'
const changeClickMeCardToWarningState = () => {
    const divClickMeCard = document.querySelector('#clickMeCard');
    divClickMeCard.classList.replace('bg-success', 'bg-warning');
    divClickMeCard.classList.replace('bg-danger', 'bg-warning');
    divClickMeCard.firstChild.innerText = "Don't do it! 😱";

};

// Pour mettre la classe 'succès'
const changeClickMeCardToSuccessState = () => {
    const divClickMeCard = document.querySelector('#clickMeCard');
    divClickMeCard.classList.replace('bg-warning', 'bg-success');
    divClickMeCard.classList.replace('bg-danger', 'bg-success');
    divClickMeCard.firstChild.innerText = "Click below! 😊";
};

// Pour mettre la classe 'danger'
const changeClickMeCardToDangerState = () => {
    const divClickMeCard = document.getElementById('clickMeCard');
    divClickMeCard.classList.replace('bg-success', 'bg-danger');
    divClickMeCard.classList.replace('bg-warning', 'bg-danger');
    divClickMeCard.firstChild.innerText = "OUCH! 🤕";
    divClickMeCard.dataset.dangerCount++;
};

// Pour mettre la classe 'fainted' et arrêter les événements
const changeClickMeCardToFaintedState = () => {
    const divClickMeCard = document.getElementById('clickMeCard');
    console.log(divClickMeCard.dataset.dangerCount);
    
    if(divClickMeCard.dataset.dangerCount > 5) {
        divClickMeCard.classList.replace('bg-success', 'bg-secondary');
        divClickMeCard.classList.replace('bg-warning', 'bg-secondary');
        divClickMeCard.classList.replace('bg-danger', 'bg-secondary');
        divClickMeCard.firstChild.innerText = "I fainted! 😵";
        const btn = document.querySelector('button');
        btn.removeEventListener('mouseover', changeClickMeCardToWarningState);
        btn.removeEventListener('mouseout', changeClickMeCardToSuccessState);
        btn.removeEventListener('click', changeClickMeCardToDangerState);
        btn.removeEventListener('click', changeClickMeCardToFaintedState);
    }
};

/* Programme principal ********************************************/
const main = () => {
    init();
    const btnClickMe = document.querySelector('button');
    btnClickMe.addEventListener('mouseover', changeClickMeCardToWarningState);
    btnClickMe.addEventListener('mouseout', changeClickMeCardToSuccessState);
    btnClickMe.addEventListener('click', changeClickMeCardToDangerState);
    btnClickMe.addEventListener('click', changeClickMeCardToFaintedState);
};

// Appel du programme main()
main();