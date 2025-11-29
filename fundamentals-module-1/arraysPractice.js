// Exercise 1: working with arrays

// sets variable to an array of fruits, each with a number value starting with 0 from left to right.
const fruits = ['apples', 'banana', 'mango']; 

// log each fruits using its index
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); //mango



// Exercise 2: adding and removing items from arrays

const animals = ['dog', 'cat']; // sets variable to an array of animals starting with dog and cat.

animals.push('rabbit'); // .push() = add new item to END of array ['dog', 'cat', 'rabbit']

animals.pop(); // .pop() = remove last item in array 

animals.unshift('lion'); // .unshift() = add new item to beginning of array ['lion', 'dog', 'cat']

animals.shift(); // .shift() = remove first item in array

console.log(animals); // logs ['dog', 'cat']



//Exercise 3 : Loop through an array

const numbers = [10, 20, 30, 40]; // Create an array named 'numbers' that stores 4 values.


// Start a loop at i = 0 (the first index)
// Keep looping while i is less than the length of the array (4)
// Increase i by 1 after each loop
for(let i = 0; i < numbers.length; i++) { 
    console.log('Value:', numbers[i]) //print the value at the current index until you reach the last index
};


// Exercise 4: Calculate the total of array values.

// Sum all the items in the array
const expenses = [25, 19, 45, 10];

let total = 0; // Create a variable to keep track of the total

for (let i = 0; i < expenses.length; i++) { // Loop through the array, one item at a time
    total += expenses[i];                       // Add the current item to the total.. total = total + expenses[i]
};
console.log('Total expenses', total); // After the loop finishes, print the final total
