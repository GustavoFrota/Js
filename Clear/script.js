var x = 0;

var mytime = setTimeout(function(){
    console.log("O valor de x é 0")
}, 1500);

var x = 10;

if(x > 0) {
    clearTimeout(mytime);
    console.log("O x passou de 0")
}