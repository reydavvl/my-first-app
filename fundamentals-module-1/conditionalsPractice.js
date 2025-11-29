// Exercise 1: simple if / else conditionals.

// creats a set variable for age
const age = 21; // number value 

// checks if user is 21 or older.
if (age >= 21) {
    console.log('You are allowed to enter the bar.') // condition is true
} else {
    console.log('You are not allowed to enter the bar.') // condition is not true.
};

// Exercise 2: if / else. if / else chain of conditionals.

// creates a score value 
const score = 87;

// Conditional chain for determining "letter grade".

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else if (score >= 60) {
    console.log('Grade: D')
} else {
    console.log('Grade: F');
};

// Exercise 3: check is a number is even or odd.

// set a number value
const number = 31;

// using modulus operator (%), checks for numbers remainder.
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
};

// Exercise 4: password strength check 

//sample password
const password = "Hello123";

//check for password length
if (password.length >= 8) {
    console.log('Password is strong.');
} else {
    console.log('Password is too short.');
};