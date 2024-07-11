//Create a function that checks whether the word given as a parameter contains at least one of all letters in the alphabet. This function returns 1 if it contains all letters, 0 if it does not contain all letters.

function isContainAllLetters(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const littleWord = word.toLowerCase();

  for (let word of alphabet) {
    if (!littleWord.includes(word)) {
      return 0;
    }
  }
  return 1;
}

const kelime = "The quick brown fox jumps over the lazy dog";

const result = isContainAllLetters(kelime);
console.log(result);
