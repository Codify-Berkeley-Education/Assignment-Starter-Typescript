// Problem 6
import { User } from "../types";

// Function that verifies if a user has all required attributes
export function verifyUser(user: User | null | undefined): User | string[] {
    // TODO: Implement logic to check for missing properties and return either the user object or an array of missing properties
    return []; // Placeholder return statement
}

// Example test cases
const u1: User = {
    id: "1",
};

const u2: User = {
    id: "2",
    name: "Satish",
    address: {
        street: "1624 Shattuck",
        city: "Berkeley",
    },
};

console.log(verifyUser(u1)); // Expected output: ["name", "address", "street", "city"]
console.log(verifyUser(u2)); // Expected output: u2 user object
