var nome = 'Gustavo';
console.log(nome.length) //length é uma propriedade usada principalmente para saber o tamanho de algo

const frutas = ['banana', 'uva', 'morango', 'laranja'];
console.log(frutas.indexOf('uva')); //uva está no indíce 1

var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("Roma"));

var roeu = frase.slice(7, 11); // slice serve para copiar uma parte de um array ou string sem alterar o original
console.log(roeu);

var novaFrase = frase.replace("roeu", "teste"); // replace serve para substituir partes de uma string por outro valor
console.log(novaFrase);