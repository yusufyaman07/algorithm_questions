// In a town with an initial population of 1000 people, there is a steady increase of 2% each year. Apart from this, there is a regular migration of 50 people every year. Create a function that calculates how many years it will take for the population of this town to reach 1 million people.

function yearsToReachPopulation(
  initialPopulation,
  targetPopulation,
  annualGrowthRate,
  annualMigration
) {
  let currentPopulation = initialPopulation;
  let year = 0;

  while (currentPopulation < targetPopulation) {
    currentPopulation += currentPopulation * annualGrowthRate + annualMigration;
    year++;
  }

  return year;
}

// Parameters
const initialPopulation = 1000;
const targetPopulation = 1000000;
const annualGrowthRate = 0.02; // 2%
const annualMigration = 50;

// Call the function and print the result
const result = yearsToReachPopulation(
  initialPopulation,
  targetPopulation,
  annualGrowthRate,
  annualMigration
);
console.log(`The town's population will reach 1 million in ${result} years.`);
