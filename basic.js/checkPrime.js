var n = 128;
function isPrime(n){
    for(i = 2; i < n; i++){
        if (n % i == 0) {
            return 'Not a prime number';
        
        }
    }
    return 'your number is a prime number';
}
var result = isPrime(128);
console.log(result);