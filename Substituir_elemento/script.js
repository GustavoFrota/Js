var elemento = document.createElement('h3');

elemento.ClassList = "Testando-classe";

var texto = document.createTextNode("Este é o texto do h3")

elemento.appendChild(texto);

console.log(elemento);