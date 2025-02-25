// Problem 5

// Function that counts occurrences of a specific item in an array using generics

function countOccurrences<T>(arr: T[], item: T): number {
    // TODO: Implement logic to count occurrences of item in arr
    return 0; // Placeholder return statement
}

// Example test cases
const numArr = [2, 4, 6, 6, 8];
console.log(countOccurrences(numArr, 6)); // Expected output: 2

const boolArr = [true, true, true];
console.log(countOccurrences(boolArr, false)); // Expected output: 0