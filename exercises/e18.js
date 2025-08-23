/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "../exercises/e17.js";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  let years = data.asteroids.reduce((acc, current) => {
    acc[current.discoveryYear] = acc[current.discoveryYear]
      ? (acc[current.discoveryYear] += 1)
      : (acc[current.discoveryYear] = 1);
    return acc;
  }, {});

  return Number(maxBy(Object.keys(years), (key) => years[key]));
}

// getGreatestDiscoveryYear(data);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
// jZ%fQn2xN67&g5!O
