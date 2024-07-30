// Given an integer 𝑛 (𝑛≥0) and a digit 𝑑( 0≤𝑑≤9 ), we contain all the stored frames from 0 to 𝑛 and find how many times this 𝑑 has been stored.

function countDigitInSquares(n, d) {
  let count = 0;
  const digitStr = d.toString();

  for (let i = 0; i <= n; i++) {
    const squareStr = (i * i).toString();
    for (let char of squareStr) {
      if (char === digitStr) {
        count++;
      }
    }
  }

  return count;
}
