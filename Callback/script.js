function exibir(num) {
    console.log("A operação resultou em : " + num);
}

function somar(A, B, callback) {
    var op = A + B;
    callback(op);
}

function multi(A, B, callback) {
    var op = A * B;
    callback(op);
}

somar(4, 2, exibir);

multi(4, 2, exibir);