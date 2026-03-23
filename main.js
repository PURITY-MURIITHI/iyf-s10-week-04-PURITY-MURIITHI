//Task 7.1 JavaScript Setup and Variables
//Variable Declarations
let name = "Purity Muriithi";
let age = 25;
const birthYear = 2000;
let isStudent = true;
let favouritecolors = ["black", "lilac", "green"];
let today = new Date();

//typeof operator
console.log(typeof name);   //string
console.log(typeof age);    //number
console.log(typeof true);   //boolean
console.log("My name is:", name);
console.log("I am", age, "years old");
console.log("Am I a student?", isStudent);
console.log("My favourite colors are:", favouritecolors);
console.log("Today's date is:", today);


//let vs const
let score = 100;
score = 150;  //Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned

//Task 2 Data Types and Operators
//Basic math
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

//Increament/Decreament
let count = 0;
count++; // count is now 1
count--; // count is now 0
console.log(count);

//string operations
let firstName = "Purity";
let lastName = "Muriithi";

//concatenation
let fullName = firstName + " " + lastName;

//template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Purity"));
console.log(greeting);
console.log(message);

//comparison and logical operators
// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT


let currentyear = 2026;
let ageindays = age * 365;
let ageinhours = age * 365 * 24;
let yearturning100 = currentyear + (100 - age);

console.log(ageindays);
console.log(ageinhours);
console.log(yearturning100);

//Task 7.3 Functions
let c = 36;
let d = 8;
//function declaration
function greet(name) {
    return `Hello, ${name}!` ;
}

//function expression 
// const add =function(c, d) {
//     return c + d;
// };

// //arrow function
// const multiply = (c, d) => c * d;

// //arrow function with body
// const divide = (c, d) => {
//     if (d === 0) {
//         return "cannot divide by zero";
//     }
//     return c / d;
// };

// console.log(add(c,d));
// console.log(multiply(c,d));
// console.log(divide(c,d));
console.log(greet(name));

//EXERCISE 2
const calculateArea = (width, height) => {
    return width * height;
};

const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};

const isEven = (number) => {
    return number % 2 === 0;
};

const getInitials = (fullName) => {
    let names = fullName.split(" ");
    let initials = names[0].charAt(0) + names[1].charAt(0);
    return initials.toUpperCase();
};

const reverseString = (str) => {
    return str.split("").reverse().join("");
};

console.log(calculateArea(5, 10));        // 50
console.log(celsiusToFahrenheit(25));     // 77
console.log(isEven(4));                  // true
console.log(isEven(7));                  // false
console.log(getInitials("Purity Muriithi"));    // PM
console.log(reverseString("hello"));     // olleh

//default parameters

function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}`;

}

console.log(greet());
console.log(greet("Purity"));
console.log(greet("Muriithi", "Hi"))

const calculateTip = (bill, tipPercent = 15) => {
    return bill * (tipPercent / 100);
};

console.log(calculateTip(100));        // 15  
console.log(calculateTip(200, 10));    // 20  
console.log(calculateTip(50, 20));     // 10

// Task 7.4 Control Flow

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}