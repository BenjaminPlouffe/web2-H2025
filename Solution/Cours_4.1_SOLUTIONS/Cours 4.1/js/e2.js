console.log('Exercices 4-1, E2');

// a)
console.log('a)');
let elmA = document.querySelector('.nav-item.active');
console.log(elmA.tagName);

// b)
console.log('b)');
let elmsB = document.querySelectorAll('p'); // retourne une NodeList
// Une NodeList est une collection de noeuds, semblable à un tableau, itérable.
elmsB.forEach(element => console.log(element.textContent.toUpperCase()));

// c)
console.log('c)');
let elmC = document.querySelector('footer');
console.log('.childNodes');
// .childNodes retourne une NodeList
elmC.childNodes.forEach(element => console.log(element.textContent));
// le footer contient 3 noeuds (si vous n'avez pas modifié index.html) : 
// 1. un retour de ligne + tabulations
// 2. Le <p> avec la mention légale
// 3. un retour de ligne + tabulations
// On pourrait aussi utiliser la méthode .children pour ne récupérer que les éléments HTML
console.log('.children');
// .children retourne une HTMLCollection
for (let i = 0; i < elmC.children.length; i++) {
    console.log(elmC.children[i].textContent);
}
// La différence entre .childNodes et .children est que .childNodes retourne tous les noeuds,
// tandis que .children retourne seulement les éléments HTML.

// d)
console.log('d)');
let elmsD = document.querySelectorAll('li');
elmsD.forEach(element => {
    console.log(element.parentElement);
    console.log(element.outerHTML);
    console.log(element.className)
});