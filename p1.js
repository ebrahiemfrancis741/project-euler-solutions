/*
  for all inputs n >= 1
  n = 1
    no multiples of 3 or 5
    sum of multiples = 0
    return 0
  n = 2
    no multiples of 3 or 5
    sum of multiples = 0
    return 0
  n = 3
    no multiples of 3 or 5
    sum of multiples = 0
    return 0
  n = 4
    multiples = 3
    sum of multiples = 3
    return 3
  n = 5
    multiples = 3
    sum of multiples = 3
    return 3
  n = 6
    multiples = 3,5
    sum of multiples = 8
    return 8
  n = 7
    multiples = 3,5,6
    sum of multiples = 14
    return 14
  n = 8
    multiples = 3,5,6
    sum of multiples = 14
    return 14
  n = 9
    multiples = 3,5,6
    sum of multiples = 14
    return 14
  n = 10
    multiples = 3,5,6,9
    sum of multiples = 23
    return 23
*/

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