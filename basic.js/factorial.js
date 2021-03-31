// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 10! = 1*2*3*4*5*6*7*8*9*10
function fact(n){
    var fact = 1;
    for (var i = 1; i <= n; i++){
        fact = fact * i;  
    }
    return fact;
    
}
var result = fact(6);
console.log(result);
