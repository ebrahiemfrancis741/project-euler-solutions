//problem 1 https://projecteuler.net/problem=1

/*
  Find the multiples of 3 and 5 of numbers lower than n recursively
  Currently Does not seem to produce deired results
*/
// function sumOfMultiplesRecursive(n) {
//   if (n < 3) {
//     return [];
//   } else {
//     let multiples = sumOfMultiples(n - 1);
//     if (n % 3 == 0 || n % 5 == 0) {
//       multiples.push(n);
//     }
//     return multiples;
//   }
// }

/*
  Find the  sum multiples of 3 and 5 of numbers lower than n
*/
function sumOfMultiplesIterative(n) {
  let multiples = [];
  for (let i = 1; i < n; i++) {
    if(i % 3 == 0 || i % 5 == 0){
      multiples.push(i);
    }
  }
  
  let sum = 0;
  for(let i = 0; i < multiples.length; i++){
    sum += multiples[i];
  }
  return sum;
}

console.log(sumOfMultiplesIterative(1000))