// problem 10 https://projecteuler.net/problem=10

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

// sum of primes with value less than n
function sumOfPrimes(n) {
  let sum = 0;
  let primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfPrimes(2000000));
