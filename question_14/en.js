// A university student's semester grade is calculated by taking 40% of the midterm exam and 60% of the final exam.

// ! Create a function that calculates the average based on the midterm and final grades received from a user. Let this function return the semester grade when called.

function calculateGrade(x, y) {
  const average = x * 0.4 + y * 0.6;
  return average;
}

const visaGrade = parseInt(prompt("Enter visa note :"));
const finalGrade = parseInt(prompt("Enter the final grade :"));

const termGrade = calculateGrade(visaGrade, finalGrade);

console.log(`Student's Term Grade: ${termGrade}`);
