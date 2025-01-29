// problem 2 https://projecteuler.net/problem=2

// generate sequence
function fibonacci(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    let sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
}

// sum even values in the sequence
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// 33rd number in sequence is the highest number less than 4 million so we use that
console.log(sum(fibonacci(33)));
