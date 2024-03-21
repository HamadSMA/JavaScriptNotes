"use strict";

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-STRINGS CHEAT SHEET-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

charAt();
concat();
indexOf();
lastIndexOf();
split(); //  split a string into an array at a specified location
toUpperCase();
toLowerCase();

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-ARRAYS CHEAT SHEETR-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

push(); // To add new items to an array
pop(); // remove last item from an array
forEach(); // callback function, first argument array element, second argument its index
filter(); // callback funcrion, filters elements based on a condition then return them in an array
map(); // callback function, perform work on each array element

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATH CHEAT SHEETR-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

Math.PI; // pi
Math.E; //Euler's constant
Math.LN2; // natural log of 2
Math.random(); // generates a random number between 0 and 1.0
Math.ceil(); //rounds up to the closest integer
Math.floor(); // rounds down to the closest integer
Math.round(); // rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer
Math.trunc(); // trims the decimal, leaving only the integer
Math.pow(2, 3); // calculates the number 2 to the power of 3, the result is 8
Math.sqrt(16); // calculates the square root of 16, the result is 4
Math.cbrt(8); // finds the cube root of 8, the result is 2
Math.abs(-10); // returns the absolute value, the result is 10
Math.log(); // logrithmic method
Math.log2(); // logrithmic method
Math.log10(); // logrithmic method
Math.min(9, 8, 7); // returns 7
Math.max(9, 8, 7); // returns 9.
Math.sin(), Math.cos(), Math.tan(); // trignomatrics

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-DATA STRUCTURES-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
// Objects: key-value pairs, key must be a string, has inheritance, and a prototype object.
// Arrays: No key-value pairs. iterable.
// Maps: key-value pairs, key doesn't have to be a string
// Sets: a collection of unique values, can accept an array on construction and filter out repeated values
// Custome data structures can be created in JavaScripts

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-CONDITIONALS-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

//If else statements
var age = 18;
if (age >= 65) {
  console.log("you get your income from pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age is not numerical");
}

// Switch statements
var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Do thing 1");
    break;
  case "Tuesday":
    console.log("Do thing 2");
    break;
  case "Wednesday":
    console.log("Do thing 3");
    break;
  case "Thursday":
    console.log("Do thing 4");
    break;
  case "Friday":
    console.log("Do thing 5");
    break;
  case "Saturday":
    console.log("Do thing 6");
    break;
  case "Sunday":
    console.log("Do thing 7");
    break;
  default:
    console.log("Don't do");
    break;
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-LOOPS-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

// foor loop (variable; condition; increament)
for (let i = 1; i < 4; i++) {
  console.log(i);
}
console.log("Go!");

// while loop
// the variable is outside the loop and the increament is after it
let i = 1;
while (i < 4) {
  console.log(i);
  i++;
}
console.log("Go!");

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

// COURSERA FUNCTIONAL PROGRAMMING LAB CHALLENGE:

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(messgae, style);
  }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler("#1d5c63", "#ede6db", "40px", "congrats");
celebrateStyler("birthday");
// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate("#ef7c8e", "#fae8e0", "30px", "You made it!", "champions");

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

// Meta iterating over objects challenge:

// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (var i of dairy) {
    console.log(i);
  }
}
logDairy();
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  // iterating using for OF will only show the object's properties
  for (var key of Object.keys(bird)) {
    console.log(`${key}: ${bird[key]}`);
  }
}
birdCan();

// Task 3
function animalCan() {
  // iterating using for IN will  show the object and the prototype object's properties
  for (var prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}
animalCan();

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MORE ON LOOPS-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

//creating an object
const hamadArray = [
  "Hamad",
  2030 - 1987,
  "Developer",
  ["Ahmed", "Mohammed", "Majed"],
];

//loop through an object
for (let i = 0; i < hamadArray.length; i++) {
  console.log(hamadArray[i], typeof hamadArray[i]);
}

//filling a new array with the type of each array element from hamadArray
const types = [];
for (let i = 0; i < hamadArray.length; i++) {
  types[i] = typeof hamadArray[i];
}
console.log(types);

// or we could do it using the push method
for (let i = 0; i < hamadArray.length; i++) {
  types.push(typeof hamadArray[i]);
}
console.log(types);

// using +++continue++++ and ++++break+++ in loops

// continue will skip one cycle of  condition is not met
for (let i = 0; i < hamadArray.length; i++) {
  if (typeof hamadArray[i] !== "string") continue;
  console.log([hamadArray[i]], typeof hamadArray[i]);
}

// break will end the loop completely
for (let i = 0; i < hamadArray.length; i++) {
  if (typeof hamadArray[i] === "number") break;
  console.log([hamadArray[i]], typeof hamadArray[i]);
}

// looping backwards
for (let i = hamadArray.length - 1; i >= 0; i--) {
  console.log(i, hamadArray[i]);
}

// note: we can also use for of and for in to iterate

// while loop
let rep = 1;
while (rep <= 10) {
  console.log(`rep ${rep}`);
  rep++;
}

// while loop with a random number as a condition
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loops is goig to end");
  }
}
