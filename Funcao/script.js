function primeiraFuncao() {
    console.log("Hello World");
}

primeiraFuncao();

function dizerNome(nome) {
    console.log("Meu nome é: " + nome);
}

dizerNome("Gustavo");
dizerNome("Maria");
dizerNome("Matheus");
dizerNome("Ana");

var nomeDoCliente = "João";

dizerNome(nomeDoCliente);

function soma(a, b) {
    var soma = a + b
    return soma;
}

var somaUm = soma(10, 2);
console.log(somaUm)