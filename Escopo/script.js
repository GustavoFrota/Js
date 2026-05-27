//escopo global
var x = 1;
var y = 3;

console.log(x, y);

//escopo local
function teste() {
    var z = 4;
    
    console.log(z)
    console.log(x)
    console.log(y)
}
teste()