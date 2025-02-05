// problem 7 https://projecteuler.net/problem=7
/*
  We need to find the 10 001st prime number. Seems hard at first glance. 
  I can probably jsut google the answer but I really dont want to do that. 
  I need a function that can get the nth prime number or generate a list of primes.
  Can I do this recursively? Will most likely end up filling the stack to the max 
  at high values and getting a stack overflow...
  I tried it iteratively and it seems to work fine
*/

function isPrime(n) {
  if (n < 2) {
    return undefined;
  } else {
    let count = [];
    for (let i = n; i >= 1; i--) {
      if (n % i == 0) {
        count.push(i);
      }
    }
    return count.length == 2 ? true : false;
  }
}

function generatePrimes(n) {
  let num = 2;
  let numberOfPrimes = 0;
  while (numberOfPrimes != n) {
    if (isPrime(num)) {
      numberOfPrimes++;
      if(numberOfPrimes == n){
        return num;
      }
    }
    num++;
  }
}

console.log(generatePrimes(10001));