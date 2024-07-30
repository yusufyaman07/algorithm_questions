// Calculate the points of a word according to the alphabetical order of its letters and find its total. ex: love(12+15+22+5) = 54 points

function wordValue(word) {
  let totalValue = 0;

  for (let char of word) {
    totalValue += char.charCodeAt(0) - 96;
  }

  return totalValue;
}
