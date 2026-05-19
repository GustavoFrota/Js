var obj = {
    nome: "Gustavo",
    idade: 19,
    ocupação: "estudante",
    estaTrabalhando: false
};

console.log(obj);
console.log(typeof obj);

//Acessando o nome
console.log(obj.nome);

//Acessando a idade
console.log(obj.idade);

//Acessando a ocupação
console.log(obj.ocupação);

//Exemplo
console.log("O meu nome é " + obj.nome);

//Mudando o nome
obj.nome = "Gabriel";
console.log(obj.nome);
console.log(obj);