// Generate a random number between 1 and 6 (inclusive)
function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Example usage:
const randomNumber = generateRandomNumber();
console.log(randomNumber);