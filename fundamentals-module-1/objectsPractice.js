// Exercise 1: Create an Object + Access Values.

const car = {
    make: 'Honda',
    model: 'Civic',
    year: 2020
};

// access values
console.log(car.make); // Honda
console.log(car.model); // Civic
console.log(car.year); // 2020


// Exercise 2: Modifying object values.
car.year = 2022; // update value from 2020 to 2022
car.color = 'blue'; // add a new key/value

console.log(car);

//Exercise 3: Object with nested Data.

const student = {
    name: 'John',
    grades: [88, 92, 75], // array inside object
    address: {
        street: 'Maple St',
        city: "Boston"      // object inside an object
    }
};

console.log(student.name);          //John
console.log(student.grades[1]);     //92
console.log(student.address.city);   //Boston

//Exercise 4: Loop through an array inside an object.

//looping through a nested array
const shoppingCart = {
    items: ['Milk', 'Eggs', 'Bread', 'Chicken']
};

for (let i = 0; i < shoppingCart.items.length; i++) {
    console.log('Item', shoppingCart.items[i]);
};
