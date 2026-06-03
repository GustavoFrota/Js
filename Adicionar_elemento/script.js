// Criar elemento
var el = document.createElement('div');

el.classList = 'div-criada'; // Adicionando uma classe

console.log(el);

var container = document.querySelector('#container');

container.appendChild(el);