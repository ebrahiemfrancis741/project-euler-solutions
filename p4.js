// problem 4 https://projecteuler.net/problem=4

/*
Find the largest palindrome made from the product of two 
3-digit numbers.

My first thoughts are, seems kind of hard, even though it 
is stated to be easy. 
My first idea is start at the 2 highest 
3 digit integers, a = 999 and b = 999, multiply both, if its a 
palindromic number thats the answer, else decrease b and repeat 
until b = 100 (since it must be a 3-digit number). 
If we still did no find the number, start decreasing a by 1, then 
repeat the process of decreasing b all the way to 100 and so on 
until we maybe get the number...

lets first implement a function that checks if a number is palindromic.
Then lets try to see if our algorithm will even work, it seems like 
the time complexity for this will be like n^2 or worse Im not sure :).

It seems our way didnt work, I think i know what to do. My idea is to store 
all palidromic products, in a list, after all palindromic products have 
been found. Then find the largest in the list. lets try
*/

function isPalindromic(n) {
  let reversed = n.toString();
  reversed = reversed.split("");
  reversed = reversed.reverse();
  reversed = reversed.join("");
  if (n.toString() == reversed) {
    return true;
  } else {
    return false;
  }
}

/*
Attempt #1 - failed
function getLargestPalindromeProduct() {
  let a = 999;
  let b = 999;
  let product;
  for (let i = a; i >= 100; i--) {
    for (let j = b; j >= 100; j--) {
      product = i * j;
      if (isPalindromic(product)) {
        console.log(`i * j = ${i} * ${j} = ${i * j}`);
        return product;
      }
    }
  }
}
*/

function getLargestPalindromeProduct() {
  let a = 999;
  let b = 999;
  let product;
  let palidromes = [];
  // get a list of palindromic products
  for (let i = a; i >= 100; i--) {
    for (let j = b; j >= 100; j--) {
      product = i * j;
      if (isPalindromic(product)) {
        console.log(`i * j = ${i} * ${j} = ${i * j}`);
        palidromes.push(product);
      }
    }
  }

  // find largest palindrome
  let largest = palidromes[0];
  for (let i = 1; i < palidromes.length; i++) {
    if (palidromes[i] > largest) {
      largest = palidromes[i];
    }
  }
  return largest;
}

console.log(getLargestPalindromeProduct());
