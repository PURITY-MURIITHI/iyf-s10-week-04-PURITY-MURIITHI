// creating objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

//accessing properties
console.log(person.firstName); //dot notation
console.log(person["lastName"]); //bracket notation
console.log(person.address.city); //nested


//modifying properties
person.age = 31;
person.email = "john@example.com"; //add new property
delete person.isStudent; //remove property

console.log(person);

//object methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    //shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    //arrow function
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3)); 

// object iteration
const scores = {
    math: 95,
    english: 88,
    science: 92
};

// get keys
console.log(Object.keys(scores));

// get values
console.log(Object.values(scores));

// get entries
console.log(Object.entries(scores));

// loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}