// Problem 4
import { Student, Athlete } from "../types";

// Function that converts all students into athletes with a default sport
export function allAthletes(students: (Student | Athlete)[], defaultSport: string): Athlete[] {
    // TODO: Implement logic to ensure all students have a sport
    return []; // Placeholder return statement
}

// Example test cases
const input: (Student | Athlete)[] = [
    { name: "Joe", age: 100, sport: "Baseball" },
    { name: "Trump", age: 90 },
];

console.log(allAthletes(input, "Football"));
// Expected output:
// [
//   { name: "Joe", age: 100, sport: "Baseball" },
//   { name: "Trump", age: 90, sport: "Football" },
// ]
