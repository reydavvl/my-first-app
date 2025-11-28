// Exercise 1: Login welcome message.

// Step 1: create variables for a user's name and role.
const userName = 'Victor'; // user's name 
const userRole = 'Admin'; // user's role

// Step 2: create a welcome message using template literals.
const welcomeMessage = `Welcome back, ${userName}! Your role is: ${userRole}.`;

// Step 3: Log the message.
console.log(welcomeMessage); // should print: Welcome back, Victor! Your role is: Admin.



// Exercise 2: Receipt Line Item

//creates item name, price, and quantity
const itemName = 'Coffee'; // sets variable for item name
const itemPrice = 4.25; // sets number vairable for item price
const itemQuantity = 2; // sets number variable for item quantity

// calculate total
const lineTotal = itemPrice * itemQuantity; // sets variable that calculates item price * item quantity

// creates a formatted output line
const receiptLine = `${itemQuantity} x ${itemName} - $${lineTotal}`; 
console.log(receiptLine); // should print 2 x Coffee - $8.5

//Exercise 3: Username generator

// create first and last name 
const first = 'Victor'; //sets variable for first name
const last = 'Rey-Davila'; // sets variable for last name

// sets variable for username using template literals and .toLowerCase which converts all alphabetic characters in a string to lower case.
const username = `${first.toLowerCase()}_${last.toLowerCase()}_01`; 
console.log(username); // should print victor_rey-davila01


