// Check whether a given even number is the sum of two prime numbers. If two such prime numbers can be found, state what they are. If not found, return an appropriate message.

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function checkGoldbach(number) {
  if (number <= 2 || number % 2 !== 0) {
    return "Please enter an even number greater than 2.";
  }

  for (let i = 2; i <= number / 2; i++) {
    let complement = number - i;
    if (isPrime(i) && isPrime(complement)) {
      return `The number ${number} can be written as the sum of the prime numbers ${i} and ${complement}.`;
    }
  }

  return `The number ${number} cannot be written as the sum of two prime numbers. `;
}
