var btn = document.querySelector('#btn');

console.log(btn);

btn.addEventListener("click", function() {
    console.log("Você clicou");
    alert("você clicou");
})

var title = document.querySelector('#title');

title.addEventListener("click", function() {
    console.log("Título");
})

var subtitle = document.querySelector('#subtitle');

subtitle.addEventListener("dblclick", function() {
    console.log("clicou duas vezes");
})