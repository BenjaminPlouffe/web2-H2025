console.log('Exercices 4-1, E1');

// a) Faire afficher l’élément <h1> à la console en le sélectionnant de 4 façons différentes.
console.log('a)');
let h1 = document.getElementById('h1');
console.log('Avec getElementById : h1.nodeType =', h1.nodeType);
h1 = document.getElementsByTagName('h1')[0];
console.log('Avec getElementsByTagName h1.id =' , h1.id);
h1 = document.getElementsByClassName('h1')[0];
console.log('Avec getElementsByClassName : h1.classList =', h1.classList);
h1 = document.querySelector('#h1');
console.log('Avec querySelector h1.tagName =', h1.tagName);


// b) Faire afficher en console le nombre d’élément du type <li> ainsi que le contenu du dernier.
//    Quel est le type de la variable ‘tabLi’?
console.log('b)');
let tabLi = document.getElementsByTagName('li');
console.log('Nombre d\'éléments <li> :', tabLi.length);
console.log('Contenu texte du dernier <li> :', tabLi[tabLi.length - 1].textContent);
console.log('Type de tabLi :', tabLi); // HTMLCollection


// c) Écrire un paragraphe contenant la phrase « Bonjour le monde » dans la page.
console.log('c)');
document.write('<p>Bonjour le monde</p>'); // Ajoute un paragraphe à la fin du document (avant la balise </body>)


// d) À partir d’une variable appelée ‘listeOL’, faire afficher en console : son élément parent, 
//    son nombre d’enfants ainsi que le contenu HTML de son premier enfant
console.log('d)');
let listeOL = document.getElementsByTagName('ol')[0];
console.log('Parent de listeOL :', listeOL.parentNode);
console.log('Nombre d\'enfants de listeOL :', listeOL.children.length);
console.log('Contenu HTML du premier enfant de listeOL :', listeOL.children[0]);