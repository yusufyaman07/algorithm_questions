/* Combinations are expressed mathematically as the number of subsets of r elements from a set of n elements.

Formula to Find the Combination of Two Numbers: 
nCr = n! / (r! * (n-r)!)

*/

// Create a function that calculates the combination of two entered numbers.

function combination(n, k) {
  if (k === 0 || k === n) {
    return 1;
  }
  let numerator = 1;
  let denominator = 1;

  for (i = 0; i < k; i++) {
    numerator *= n - i;
    denominator *= i + 1;
  }
  return numerator / denominator;
}

const number1 = parseInt(prompt("Enter the First Number:"));
const number2 = parseInt(prompt("Enter the Second Number:"));
const result = combination(number1, number2);
console.log("Result:", result);
