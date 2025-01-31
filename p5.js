// problem 5 https://projecteuler.net/problem=5
/*
  What is the smallest positive number that is evenly divisible by all 
  of the numbers from 1 to 20?

  My first idea is that we loop until we find this number, so using a while 
  loop then exiting when we find it. Every iteration we increase the number 
  by 1, check if that number is divisible by all numbers 1-20. If 1 of those 
  numbers arent evenly divisible we 'continue' to the next number since it doesnt 
  qualify and there is no point checking divisibily for the other numbers.

  lets try it...
*/

function smallest() {
  let n = 1;
  while (true) {
    for (let i = 1; i <= 20; i++) {
      if (n % i == 0 && i == 20) {
        return n;
      } else if (!(n % i == 0)) {
        break;
      }
    }
    n++;
  }
}

console.log(smallest());