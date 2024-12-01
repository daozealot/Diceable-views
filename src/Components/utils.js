// List of the dice combinations
const diceCombinations = [
  "1 pair",
  "2 pair",
  "3 of a kind",
  "full house",
  "4 of a kind",
  "flush",
  "straight",
  "6 of a kind",
];

// Function to shuffle an array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to generate a random permutation
export function getRandomPermutation() {
  return shuffleArray(diceCombinations);
}
