var x = 0;

var mytime = setTimeout(function(){
    console.log("O valor de x é 0")
}, 1500);

var x = 10;

if(x > 0) {
    clearTimeout(mytime);
    console.log("O x passou de 0")
}

var myinterval = setInterval(function() {
    console.log("Imprimindo intervalo")
}, 500);

setTimeout(function() {
    console.log("Não precisa mais repetir")
    clearInterval(myinterval)
}, 1500);