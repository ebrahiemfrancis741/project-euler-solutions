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

lets first implement a function that checks if a number is palindromic
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

