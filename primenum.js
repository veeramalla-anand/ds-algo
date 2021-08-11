function isPrime(n){
    var divisor = 2;

    while(n>divisor){
        if  (n % divisor == 0){
            console.log("not a prime")
        return false;

     }
     else divisor ++;
    }
    console.log("prime num")
    return true;
}
//isPrime(137);
isPrime(237);