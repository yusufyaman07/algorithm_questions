// The arrays created by Yusuf and Mehmet are given below. Compare the elements at the same positions in both arrays and award 1 point to the person with the higher value.In case of a tie, no points are awarded. Create a function that returns the scores of the users.

const Yusuf = [4, 7, 13];
const Mehmet = [1, 8, 12];

function compareNumbers(a, b) {
  let scoreYusuf = 0;
  let scoreMehmet = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      scoreYusuf += 1;
    } else if (a[i] < b[i]) {
      scoreMehmet += 1;
    }
  }

  return [scoreYusuf, scoreMehmet];
}

const result = compareNumbers(Yusuf, Mehmet);

console.log(`Yusuf's score: ${result[0]}\n Mehmet's score: ${result[1]}`);
