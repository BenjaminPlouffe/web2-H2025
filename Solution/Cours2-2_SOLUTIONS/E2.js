const prompt = require("prompt-sync")();

const availableFruits = [
  "Abricot",
  "Airelle",
  "Amande",
  "Ananas",
  "Avocat",
  "Banane",
  "Cassis",
  "Cerise",
  "Châtaigne",
  "Citron",
  "Clémentine",
  "Coing",
  "Datte",
  "Figue fraîche",
  "Fraise",
  "Fraise des bois",
  "Framboise",
  "Fruit de la passion",
  "Grenade",
  "Groseille",
  "Groseille à maquereau",
  "Kaki",
  "Kiwi",
  "Kumquat",
  "Litchi",
  "Mandarine",
  "Mangue",
  "Marron",
  "Melon",
  "Mirabelle",
  "Mûre",
  "Myrtille",
  "Nectarine",
  "Noisette",
  "Noix",
  "Orange",
  "Orange sanguine",
  "Pamplemousse",
  "Papaye",
  "Pastèque",
  "Pêche",
  "Poire",
  "Pomme",
  "Prune",
  "Quetsche",
  "Raisin",
  "Reine-claude",
  "Tomate",
  "Tomate charnue",
  "Tomate Peretti",
];

const cart = [];

function printArray(_array = []) {
  console.log("----------------\n" + _array + "\n----------------");
}

function mainMenu() {
  let input = -1;
  while (input != 0) {
    if (input == 1) {
      printArray(availableFruits);
    } else if (input == 2) {
      filterSubMenu();
    } else if (input == 3) {
      sortSubMenu();
    } else if (input == 4) {
      addFruitToCart();
    } else if (input == 5) {
      removeFruitToCart();
    } else if (input == 6) {
      printArray(cart);
    }
    console.log(
      "\nEntrez 1 pour afficher la liste de fruits disponibles en ordre alphabétique. \nEntrez 2 pour filtrer la liste de fruits disponibles. \nEntrez 3 pour trier la liste de fruits disponibles. \nEntrez 4 pour ajouter un fruit à votre commande. \nEntrez 5 pour retirer un fruit de votre commande. \nEntrez 6 pour consulter votre commande. \nEntrez 0 ou une entrée vide pour quitter le programme."
    );
    input = prompt("Votre choix : ");
  }
}

//Filter functions ----------------------------------
function filterSubMenu() {
  let input = -1;
  console.log(
    "\nEntrez 1 pour filtrer la liste de fruits selon la longueur maximale du mot. \nEntrez 2 pour filtrer la liste de fruits selon une chaîne de caractère."
  );
  input = prompt("Votre choix : ");
  if (input == 1) {
    let length = prompt(
      "Entrez la longueur maximale du mot pour filtrer la liste de fruits : "
    );
    printArray(filterByLength(length, availableFruits));
  } else if (input == 2) {
    let string = prompt(
      "Entrez la chaîne de caractère pour filtrer la liste de fruits : "
    );
    printArray(filterByString(string, availableFruits));
  }
}

function filterByLength(_length = 0, _array = [""]) {
  return _array.filter((e) => e.length <= _length);
}

function filterByString(_string = "", _array = [""]) {
  return _array.filter((e) => e.toLowerCase().match(_string.toLowerCase())); //Match ou includes fonctionnent tous les deux ici
}
//-------------------------------------------------

//Sort functions -------------------------------------------
function sortSubMenu() {
  let input = -1;
  console.log(
    "\nEntrez 1 pour trier la liste de fruits selon la longueur du mot. \nEntrez 2 pour trier la liste de fruits en ordre alphabétique inversé."
  );
  input = prompt("Votre choix : ");
  if (input == 1) {
    printArray(sortByLength(availableFruits));
  } else if (input == 2) {
    printArray(reverseSort(availableFruits));
  }
}

function sortByLength(_array = [""]) {
  const newArray = _array.map((e) => e);
  return newArray.sort((a, b) => a.length - b.length || a.localeCompare(b)); //source ; https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element
}

function reverseSort(_array = [""]) {
  const newArray = _array.map((e) => e);
  return newArray.sort().reverse();
}
//-----------------------------------------------------------------

//Cart manager --------------------------
function addFruitToCart() {
  let input = "";
  console.log(
    "\nEntrez le nom d'un des fruits disponibles que vous voulez ajouter à votre panier."
  );
  input = prompt("Votre choix : ");
  let fruit = availableFruits.find(
    (fruit) => fruit.toLowerCase() == input.toLowerCase()
  );
  if (fruit != undefined) {
    cart.push(fruit);
    console.log("Un fruit de type " + input + " a été ajouté avec succès à votre pannier.");
  } else {
    console.log(
      "Aucun fruit disponible trouvé correspondant à l'entrée : " + input
    );
  }
}

function removeFruitToCart() {
  let input = "";
  console.log(
    "\nEntrez le nom d'un des fruits que vous voulez retirer de votre panier."
  );
  input = prompt("Votre choix : ");
  let index = cart.findIndex((fruit) => fruit.toLowerCase() == input.toLowerCase());
  if (index >= 0) {
    cart.splice(index, 1);
    console.log("Un fruit de type " + input + " a été retiré avec succès à votre pannier.");
  } else {
    console.log(
      "Aucun fruit disponible trouvé correspondant à l'entrée : " + input
    );
  }
}
//--------------------------------------

mainMenu();
