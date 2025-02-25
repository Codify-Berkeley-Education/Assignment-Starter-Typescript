// Problem 3
import { Professor, Class, Student } from "../types";

// Function that returns the names of all students a professor teaches in increasing order by age
export function studentsTaughtByProf(professor: Professor): string[] {
    // TODO: Implement logic to collect and sort students by age
    return []; // Placeholder return statement
}

// Example test cases
const professor: Professor = {
    name: "Aidan",
    classes: [
        {
            className: "CS 61A",
            students: [
                { name: "Shruti", age: 12 },
                { name: "Nemer", age: 18 },
                { name: "Elaine", age: 19 },
            ],
        },
        {
            className: "CS 61B",
            students: [
                { name: "Ayush", age: 17 },
                { name: "Rayna", age: 21 },
                { name: "Dhruv", age: 20 },
            ],
        },
    ],
};

console.log(studentsTaughtByProf(professor));
// Expected output: ["Shruti", "Ayush", "Nemer", "Elaine", "Dhruv"]