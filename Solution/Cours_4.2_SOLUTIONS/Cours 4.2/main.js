
function init() {
  const body = document.body;
  const div = document.createElement("div");
  body.prepend(div);
  const p = document.createElement("p");
  div.prepend(p);
  p.innerText = "Hello World";
  const ul = document.createElement("ul");
  div.append(ul);
  ul.id = "ul"
}

function addLi(){
    let input = ""
    const ul = document.querySelector("#ul")
    do{
        input = prompt("Entrer le texte à ajouter dans la liste à puce (LI). \nEntrer le chiffre 0 lorsque vous désirez arrêter d'ajouter des éléments dans la liste.");
        let li = document.createElement("li");
        ul.append(li);
        li.innerText = input;
    } while(input !== "0")
}

function putInStrongTag(htmlElement = new HTMLObjectElement){
    const strong = document.createElement("strong");
    htmlElement.replaceWith(strong);
    strong.append(htmlElement);
}

function getRandomInt(_maxValue){
    return Math.floor(Math.random() * _maxValue);
}

function changeBackgroundToAqua(htmlElement = new HTMLObjectElement){
    htmlElement.style.backgroundColor = "#00FFFF";
}


init();
addLi();
putInStrongTag(document.querySelector('p'));
putInStrongTag(document.querySelector('li'));
listeLIs = Array.from(document.querySelectorAll('li'));
changeBackgroundToAqua(listeLIs[getRandomInt(listeLIs.length)]);
const div = document.querySelector('div');
div.classList.add("container");
div.classList.add("bg-success");
