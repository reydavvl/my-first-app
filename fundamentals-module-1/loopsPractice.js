// Exercise 1 for loop: count from 1 to 10

for (let i = 1; i <= 10; i++) {  // "sets i value to 1; if i is less than 10; add the value of i once (1), if value is 10 stop."
    console.log(i) // prints the value of i each loop until it reaches 10
};

// Exercise 2 for loop: Sum of numbers

let sum = 0; // loose set the variable value to 0

for (let i = 1; i <= 5; i++) {
    sum += i; // adds i to the running total 
}

console.log('Total sum:', sum);

//Exercise 3 while loop: Countdown

let counter = 5; // loose set variable value to 5
while (counter > 0) {
    console.log(counter);
    counter--; // will decrease "counter" each loop 
};

// Exercise 4 while loop: loop will continue as long as number does not surpass 10
let number = 3;

while (number < 10) {
    console.log('Number is:', number);
    number += 2 // increases by 2 each loop.
};

