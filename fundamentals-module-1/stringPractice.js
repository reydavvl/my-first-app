// Practice with strings and template literals.

// 1. creates variable for first name, last name, and age.
const firstName = "Victor"; //text variable
const lastName = "Rey-Davila"; // text variable
const age = 31; // number variable


// 2. using classic string concatenation.
const message1 = firstName + " " + lastName + " is " + age + " years old. ";
console.log(message1); // logs message 

// 3. using template literals (modern/cleaner code).
const message2 = ` ${firstName} ${lastName} is ${age} years old.`;
console.log(message2); // logs message