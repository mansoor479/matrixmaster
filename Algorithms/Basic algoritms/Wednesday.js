
//Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!

function factorialize(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorialize(0));   // 1
console.log(factorialize(10));  // 3628800
console.log(factorialize(20));  // 2432902008176640000
