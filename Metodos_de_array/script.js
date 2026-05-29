var arr = [1, 2, 3, 4, 5];

arr.push(6); // push é um método de array usado para adicionar um ou mais elementos no final de um array

console.log(arr.length); // length é usada para indicar o tamanho de algo

var frutas = ["uva", "abacaxi", "laranja", "banana", "mamão"];
frutas.pop();  // pop serve para remover o último elemento de um array e retornar esse elemento

frutas.unshift("maçã"); // unshift serve para adicionar um ou mais elementos no início de um array

console.log(frutas);

let alunos = ['Maria', 'Gabriel', 'Marcos', 'Ana'];
alunos.shift() // shift serve para remover o primeiro elemento de um array e retornar esse elemento

console.log(alunos)

let cores = ['azul', 'vermelho', 'verde'];
cores.splice(1, 1, 'amarelo'); // splice serve para alterar uma array, removendo ou adicionando um elemento
console.log(cores)