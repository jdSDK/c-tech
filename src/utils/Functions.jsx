export const randint = (a, b) => {
    // Helper to generate random int
    return Math.floor(Math.random() * (a - b + 1)) + b;
}