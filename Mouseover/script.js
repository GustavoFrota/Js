var title = document.querySelector('#title')

console.log(title);

title.addEventListener("mouseover", function() {
    console.log("Testando");
})

// Evento mouseout

title.addEventListener("mouseout", function() {
    console.log("Saindo do teste");
})