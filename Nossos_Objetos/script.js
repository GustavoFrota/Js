let teste = 5;

console.log(this.teste);
console.log(teste)

let Pessoa = {
    nome: "Gustavo",
    idade: 19,
    falar: function() {
        console.log("Olá, tudo bem ?")
    },
    dizerNome: function() {
        console.log("Meu nome é " + this.nome); 
    }
}

console.log(Pessoa.nome);

Pessoa.falar();
Pessoa.dizerNome();