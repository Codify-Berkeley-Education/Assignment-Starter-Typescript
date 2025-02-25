//Problem 1

// Remember in typescript you have to define the type of the function parameters and the return type of the function
// In this case both num1 and num2 are numbers and the return type is string
// export lets you use this function in other files

// Function that takes two numbers, converts them to strings, and concatenates them
export function concatNumbers(num1: number, num2: number): string {
    // TODO: Implement logic to concatenate the numbers as strings
    return ""; // Placeholder return statement
}

// Example test cases
console.log(concatNumbers(4, 5));   // Expected output: "45"
console.log(concatNumbers(5, -9));  // Expected output: "5-9"