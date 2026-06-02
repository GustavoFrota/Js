// Inserido elemento no body

var novoParagrafo = document.createElement("p");

console.log(novoParagrafo);

var texto = document.createTextNode("Este é o texto do parágrafo");

novoParagrafo.appendChild(texto);

var body = document.querySelector('body');
console.log(body);

body.appendChild(novoParagrafo);

// Inserindo elemento no container

var container = document.querySelector('#container');

console.log(container);

var element = document.createElement('span');

element.appendChild(document.createTextNode("Esse é o texto do span"));

console.log(element);

container.appendChild(element);