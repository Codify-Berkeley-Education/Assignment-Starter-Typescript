//Problem 2
import { Student } from "../types";

// Function that returns an array of students given names and ages
export function arrayOfStudents(names: string[], ages: number[]): Student[] {
    // TODO: Implement logic to create an array of Student objects
    return []; // Placeholder return statement
}

// Example test cases
const names: string[] = ["Joe", "Schmo"];
const ages: number[] = [50, 60];
console.log(arrayOfStudents(names, ages));
// Expected output:
// [
//     { name: "Joe", age: 50 },
//     { name: "Schmo", age: 60 }
// ]