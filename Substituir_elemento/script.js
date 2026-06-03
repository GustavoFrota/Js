var elemento = document.createElement('h3');

elemento.ClassList = "Testando-classe";

var texto = document.createTextNode("Este é o texto do h3")

elemento.appendChild(texto);

console.log(elemento);

// selecionar o elemento que quero mudar

var title = document.querySelector('#title');

console.log(title);

var body = document.querySelector('body');

body.replaceChild(elemento, title);