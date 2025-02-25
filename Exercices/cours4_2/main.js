const init = () => {
 /*     Déclarer la fonction init() et appeler cette fonction. La fonction doit implémenter les étapes suivantes ;
    - À l’aide de la méthode createElement(), générer une balise ‘div’. Ajouter cette balise au début du body à l’aide de la méthode prepend().
    - Générer une balise ‘p’ et ajouter cette balise au début du ‘div’ à l’aide de la méthode prepend(). Modifier son attribut innerText pour afficher « Hello world ».
    - Générer une balise ‘ul’ et ajouter cette balise à la fin du ‘div’ à l’aide de la méthode append(). Modifier son attribut id pour la valeur ‘ul’.
     */
    const div = document.createElement('div');
    const p = document.createElement('p');
    const ul = document.createElement('ul');

    document.body.prepend(div);
    div.prepend(p);
    p.innerText = "Hello, world!";
    div.append(ul);
    ul.setAttribute('id', 'ul');
};

// Fonction addLi
const addLi = () => {
    const ul = document.querySelector('#ul');
    let saisie = "0";
    do {
        saisie = prompt("saisir le contenu de l'élément", saisie);
        if (saisie !== "0") {
            let li = document.createElement('li');
            li.innerText = saisie;
            ul.append(li);
        }
    } while(saisie !== "0")
};

// Fonction putInStrongTag
function putInStrongTag(htmlElement = new HTMLObjectElement){
    const strong = document.createElement('strong');
    htmlElement.replaceWith(strong);
    strong.append(htmlElement);
} 

// Fonction getRandomInt
function getRandomInt(_maxValue){

}


// Appel de init();
init();
addLi();
putInStrongTag(p);
putInStrongTag(ul.children[0]);
