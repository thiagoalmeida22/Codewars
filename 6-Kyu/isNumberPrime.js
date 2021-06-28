
function isPrime(num) {
    if (num === 2) {return true}
    else if (num > 2) {  
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {return false}
        }
        return true;
    }
    return false;
  }
console.log(isPrime(4))  /* true  */