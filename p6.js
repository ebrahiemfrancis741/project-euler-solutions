// problem 6 https://projecteuler.net/problem=6
function sumOfSquares(n) {
  let sum = 0;
  let power;
  for (let i = 1; i <= n; i++) {
    power = Math.pow(i, 2);
    sum += power;
  }
  return sum;
}

function squareOfSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return Math.pow(sum, 2);
}

console.log(squareOfSum(100) - sumOfSquares(100));