import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
  const initialValue = 0;
  let totalMoons = data.planets
    .filter((hasMoons) => hasMoons.moonsCount !== undefined)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue.moonsCount,
      initialValue
    );
  console.log(totalMoons);
  return totalMoons;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
