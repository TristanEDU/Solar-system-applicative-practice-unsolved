/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let years = data.asteroids.reduce((acc, current) => {
    // console.log(current.discoveryYear)
    acc[current.discoveryYear] = acc[current.discoveryYear]
      ? (acc[current.discoveryYear] += 1)
      : (acc[current.discoveryYear] = 1);
    // console.log(acc)
    return acc;
  }, {});
  // (yearArray) => Object.entries(years);

  console.log(yearArray);

  let maxBy = (years) => {
    console.log("This is a test to see what ends up running.");
    if (years.length === 0) {
      return undefined;
    }

    let maxYears = years[0];
    let maxValue = cb(years[0]);

    for (let item of years) {
      if (cb(item) > maxValue) {
        maxValue = cb(item);
        maxYears = item;
      }
    }
    console.log(maxYears);
    return maxYears;
  };

  // console.log(years);
  console.log(maxBy);
}

let data = {
  asteroids: [
    { name: "1 Ceres", discoveryYear: 1801, orbitalPeriod: 1681.63 },
    { name: "6 Hebe", discoveryYear: 1847, orbitalPeriod: 1380.373 },
    { name: "47171 Lempo", discoveryYear: 1999, orbitalPeriod: 91678 },
    { name: "762 Pulcova", discoveryYear: 1913, orbitalPeriod: 2049.475 },
    { name: "4179 Toutatis", discoveryYear: 1989, orbitalPeriod: 1463.14 },
    { name: "50000 Quaoar", discoveryYear: 2002, orbitalPeriod: 104347.575 },
    { name: "2867 Šteins", discoveryYear: 1969, orbitalPeriod: 1327.3582 },
    { name: "5 Astraea", discoveryYear: 1845, orbitalPeriod: 1507.279 },
    { name: "5145 Pholus", discoveryYear: 1992, orbitalPeriod: 33711 },
    { name: "4769 Castalia", discoveryYear: 1989, orbitalPeriod: 400.428 },
    { name: "624 Hektor", discoveryYear: 1907, orbitalPeriod: 4358.521 },
    { name: "216 Kleopatra", discoveryYear: 1880, orbitalPeriod: 1707 },
    { name: "3753 Cruithne", discoveryYear: 1986, orbitalPeriod: 364.019 },
    { name: "3 Juno", discoveryYear: 1804, orbitalPeriod: 1593.926 },
    { name: "10 Hygiea", discoveryYear: 1849, orbitalPeriod: 2029.776 },
    { name: "21 Lutetia", discoveryYear: 1852, orbitalPeriod: 1387.902 },
    { name: "253 Mathilde", discoveryYear: 1885, orbitalPeriod: 1572.491 },
    { name: "7 Iris", discoveryYear: 1847, orbitalPeriod: 1346.628 },
    { name: "433 Eros", discoveryYear: 1898, orbitalPeriod: 643.219 },
    { name: "90377 Sedna", discoveryYear: 2003, orbitalPeriod: 4154395 },
    { name: "10199 Chariklo", discoveryYear: 1997, orbitalPeriod: 23084 },
    { name: "87 Sylvia", discoveryYear: 1866, orbitalPeriod: 2381.639 },
    { name: "90482 Orcus", discoveryYear: 2004, orbitalPeriod: 89606 },
    { name: "5335 Damocles", discoveryYear: 1991, orbitalPeriod: 14880.9 },
    { name: "8 Flora", discoveryYear: 1847, orbitalPeriod: 1192.956 },
    { name: "2060 Chiron", discoveryYear: 1977, orbitalPeriod: 18429 },
    { name: "5261 Eureka", discoveryYear: 1990, orbitalPeriod: 686.829 },
    { name: "588 Achilles", discoveryYear: 1906, orbitalPeriod: 4320.803 },
    { name: "28978 Ixion", discoveryYear: 2001, orbitalPeriod: 90717 },
    { name: "9 Metis", discoveryYear: 1848, orbitalPeriod: 1346.815 },
    { name: "7066 Nessus", discoveryYear: 1993, orbitalPeriod: 44561 },
    { name: "25143 Itokawa", discoveryYear: 1998, orbitalPeriod: 556.38 },
    { name: "10370 Hylonome", discoveryYear: 1995, orbitalPeriod: 44561 },
    { name: "45 Eugenia", discoveryYear: 1857, orbitalPeriod: 1638.654 },
    {
      name: "(308933) 2006 SQ372",
      discoveryYear: 2006,
      orbitalPeriod: 11800000,
    },
    { name: "2 Pallas", discoveryYear: 1802, orbitalPeriod: 1685.927 },
    { name: "8405 Asbolus", discoveryYear: 1995, orbitalPeriod: 27796 },
    { name: "20000 Varuna", discoveryYear: 2000, orbitalPeriod: 103440 },
    { name: "4 Vesta", discoveryYear: 1807, orbitalPeriod: 1325.886 },
    { name: "243 Ida", discoveryYear: 1884, orbitalPeriod: 1767.564 },
    { name: "951 Gaspra", discoveryYear: 1916, orbitalPeriod: 1199.479 },
    { name: "15760 Albion", discoveryYear: 1992, orbitalPeriod: 105757 },
    { name: "Arrokoth", discoveryYear: 2014, orbitalPeriod: 107847 },
    { name: "101955 Bennu", discoveryYear: 1999, orbitalPeriod: 436.604 },
  ],
};

getGreatestDiscoveryYear(data);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
// jZ%fQn2xN67&g5!O
