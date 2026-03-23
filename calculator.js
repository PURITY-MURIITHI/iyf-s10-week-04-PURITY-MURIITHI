function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            if (num2 === 0) {
                return "Error: Cannot modulus by zero";
            }
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8

let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /, %, **):");
let num2 = Number(prompt("Enter second number:"));

let result = calculate(num1, operator, num2);

console.log("Result:", result);