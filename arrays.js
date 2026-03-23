// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log(fruits[0]);     // apple
console.log(fruits.length); // 3

// Modifying arrays
fruits.push("grape");        // Add to end
console.log(fruits);
fruits.unshift("mango");     // Add to start
console.log(fruits);
fruits.pop();                // Remove from end
console.log(fruits);
fruits.shift();              // Remove from start
console.log(fruits);

// forEach - do something with each element
numbers.forEach(num => console.log(num * 2));

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// find - get first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);
// reduce - combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// includes - check if element exists
console.log(numbers.includes(3)); // true

//EXERCISE

const number = [10,56,-98,76,-7,5];

const doubledNumbers = number.map(num => num *2);
console.log(doubledNumbers);

const negativenumbers = number.filter(num => num < 0);
console.log(negativenumbers);

const firstNumber = number.find(num => num >10);
console.log(firstNumber);

const productNumbers = number.reduce((product, num) => product * num, 1);
console.log(productNumbers);