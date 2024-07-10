// Permutation is the process of placing or arranging the elements in a set in a specific order. It refers to different orders or arrangements of elements in a set.

// ! Create a function that calculates the permutation of two numbers.

function permutation(n, k) {
  let permutation = 1;

  for (let i = 0; i < k; i++) {
    permutation *= n - i;
  }

  return permutation;
}

const result = permutation(6, 3);
console.log("Result:", result);
