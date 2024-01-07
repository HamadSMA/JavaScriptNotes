"use strict";

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-FUNCTIONS-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

// function declaration.
function calcAge1(birthYear) {
  return 2030 - birthYear;
}

// function expression or anonymous function.
const calcAge2 = function (birthYear) {
  return 2030 - birthYear;
};

// arrow function.
const calcAge3 = (birthYear) => 2030 - birthYear;

const yearsOfRetirement = (birthYear) => {
  const age = 2030 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

// Notes:
// - function declarations can be called before they are defined
// - arrow functions return the value implicitly when we have on parameter or one line of code
// - arrow functions do not utilize the ‘this’ keyword

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-ARRAYS-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

// bracket declaration (most common)
const friends = ["Ahmed", "Hamad", "Mohammed"];
console.log(friends);

// the array function declaration.
const years = new Array(1990, 1987, 1991, 1983);
console.log(years);

// accessing elements in arrays.
console.log(friends[0]);
console.log(friends[2]);

// the length methode to return number of elements in an array.
console.log(friends.length);

// inside the brackets, JavaScript expects an expression not a statement.
// to access the last element in an array we could use:
console.log(friends[friends.length - 1]);

// changing (mutating) elements in an array.
// arrays elements can be changed even if it's a constant because they are not primitive values.
// the entire array cannot be changed if it's a constant.
friends[2] = "Salih";
console.log(friends);

// an array can hold different vulaues at the same time, including expressions and other arrays.
const firstName = "Hamad";
const hamad = [firstName, "Alaslani", 2030 - 1987, "Developer", friends];
console.log(hamad);

// add elements to the end of the array and return the length of the new array
friends.push("Sari");

// add element the start of the array and return the length of new array
friends.unshift("Marwan");

// remove the element from the array and return it
friends.pop();

// remove the first element from the array and return it
friends.shift();
console.log(friends);
// return the index of a certian element
console.log(friends.indexOf("Ahmed"));

// return true or false if element is included
console.log(friends.includes("Hamad"));
console.log(friends.includes("Marwan"));

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-OBJECTS-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

// objects use key-value pair
const hamadObject = {
  firstName: "Hamad",
  lastName: "Alaslani",
  age: 2030 - 1987,
  job: "developer",
  friends: ["Hamad", "Ayman", "Marwan"],
};

//to access data from objects, we use the dot-notation
console.log(hamadObject.lastName);

// or we use the bracket-notation
console.log(hamadObject["lastName"]);

//the bracket notation allow for using expressions, e.g:
const nameKey = "Name";
console.log(hamadObject["first" + nameKey]);
console.log(hamadObject["last" + nameKey]);

// add new properties to the object
hamadObject.location = "Saudi Arabia";
hamadObject["twitter"] = "Is deleted";
console.log(hamadObject);

//challenge:
// Hamad has 3 friends, and his best friend is called Marwan
console.log(
  `${hamadObject.firstName} has ${hamadObject.friends.length} friends, and his best friend is called ${hamadObject.friends[2]}`
);

// when a function is attached to an object, it is called a method
const hamadObject1 = {
  firstName: "Hamad",
  lastName: "Alaslani",
  birthYear: 1987,
  job: "developer",
  friends: ["Hamad", "Ayman", "Marwan"],
  hasDriversLicense: false,
  // calcAge: function (birthYear) {
  //   return 2030 - birthYear;
  // },

  // we will write the same function using the 'this' keyword
  // calcAge: function () {
  //   return 2030 - this.birthYear;
  // },

  // it is better to call the function and store it in a new property in this object so we can access it without
  //calling the function over and over
  calcAge: function () {
    this.age = 2030 - this.birthYear;
    return this.age;
  },
  getSumary: function () {
    console.log(
      `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${
        this.hasDriversLicense ? "a" : "no"
      } driver's license`
    );
  },
};

console.log(hamadObject1.calcAge());
console.log(hamadObject1["calcAge"]());

// console.log(hamadObject1.calcAge());
// console.log(hamadObject1.calcAge());
// console.log(hamadObject1.calcAge());
// console.log(hamadObject1.calcAge());

// like this:
const ageOfHamad = hamadObject1.calcAge();
console.log(ageOfHamad);
console.log(hamadObject1.age);

// challenge:
// "Hamad is a 43-year old developer, and he has a/no driver's license"

hamadObject1.getSumary();

// SECTION #2 CHALLENGE #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is height than ${mark.fullName}'s (${mark.bmi})`
//   );
// } else if (john.bmi < mark.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI(${mark.bmi}) is heighr than ${john.fullName}'s (${john.bmi})`
//   );
// }
