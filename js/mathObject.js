
/**
 MATH - OBJECTS

 TODAY"S AGENDA:
 - Math.random()
 - Math.floor()
 - Math.round()
 - Math.ceil()
 - Math.pow()
 - Math.sqrt()
 - Math.E
 - Math.PI
 */


/**
 Math.random();
 - Randomness is an essential tool that helps us create unpredictable.
 - a fixed method that will return a floating-point (double) random number.
 - The number is going to be between 0 and 1.
 */


console.log('______Math.random()______')

// Example of random();
Math.random();
console.log('Math.random(): '+Math.random());

//-- QUESTION: What if I need a Number between two numbers;

// Syntax:
//  Math.random() * (max - min + 1) + min;
//— You will be including both the min and max to be in the randomness

//— Get a random number between 1 - 10
let randomNumber = Math.random() * (10 - 1 + 1) + 1;
console.log('Random #1-10: '+randomNumber);

//Questions:
console.log('');

/**
 Math.floor();
 - When you want to round down to the nearest whole number
 - Basically it chops off the decimal part of a number and gives you the whole number value
 */

console.log('______Math.floor()______')

let mathFloor = Math.floor(7.85);
console.log('Math Floor: '+mathFloor);

mathFloor = Math.floor(4.99);
console.log('Math Floor: '+mathFloor);

console.log('Random Number (1-10): '+randomNumber);
console.log('Floor Random Number: '+Math.floor(randomNumber));

mathFloor = Math.floor(-6.50);
console.log('Negative Number: ' +mathFloor);

/** QUESTIONS **/
console.log('');

/**
 Math.round();
 - When you want to round to the nearest number
 - Basically this method takes in a number and if a number is .5 it will round to the nearest integer
 */

console.log('______Math.round()______')

let mathRound = Math.round(7.85);
console.log('Math Round: '+mathRound);

mathRound = Math.round(4.99);
console.log('Math Round: '+mathRound);

console.log('Random Number (1-10): '+randomNumber);
console.log('Round Random Number: '+Math.round(randomNumber));

mathRound = Math.round(-6.50);
console.log('Negative Number: ' +mathRound);

/** QUESTIONS **/
console.log('');

/**
 Math.ceil();
 - Used to round the numbers up.
 */


console.log('______Math.ceil()______')

let mathCeil = Math.ceil(3.004);
console.log('Math Ceil: '+mathCeil);

mathCeil = Math.ceil(4.99);
console.log('Math Ceil: '+mathCeil);

console.log('Random Number (1-10): '+randomNumber);
console.log('Ceil Random Number: '+Math.ceil(randomNumber));

mathCeil = Math.ceil(-6.50);
console.log('Negative Number: ' +mathCeil);

/** QUESTIONS **/
console.log('');


/**
 Math.pow();
 - Now we are going into powerful mathematical operations
 - We should be somewhat familiar with this method from prior exercises
 - Using 'pow' involves raising a base number to a certain power.

 - The Syntax:
 - Takes in two arguments
 - The Base number
 - The Exponent
 - Calculates and returns the base raised to the power of the exponent
 */


console.log('______Math.pow()______')


let result = Math.pow(5,2);
console.log('Math.pow(5, 2) = ' + result);

const base = 2;
const exponent = 3;
result = Math.pow(base, exponent);
console.log('Math.pow(2, 3) = ' + result);

result = Math.pow(-3, 3); // output: -27
console.log('Math.pow(-3, 3) = ' + result);

result = Math.pow(-9, 2); // output: 81
console.log('Math.pow(-9, 2) = ' + result);

/** QUESTIONS **/
console.log('');


/**
 Math.sqrt();
 - allows us to find the square root of a given number.
 */


console.log('______Math.sqrt()______')

let mathSqrt = Math.sqrt(3.004);
console.log('Math Sqrt: '+mathSqrt);

mathSqrt = Math.sqrt(4.99);
console.log('Math Sqrt: '+mathSqrt);

console.log('Random Number (1-10): '+Math.floor(randomNumber));
console.log('Sqrt Random Number: '+Math.sqrt(Math.floor(randomNumber)));

mathSqrt = Math.sqrt(-6.50);
console.log('Negative Number: ' +mathSqrt);

/** QUESTIONS **/
console.log('');


/**

 Math.E;
 - "e" is an irrational number, much like π (pi),
 - which means its decimal expansion goes on infinitely without repeating.
 - The `Math.E` property is an inbuilt function that is used to get the value of e^p, where p is any given number.
 - If you enter `Math.E` you will get a constant value of 2.71828

 */

console.log('______Math.E______')

console.log('Math.E = '+Math.E)

// Example: Using Math.E in JavaScript

// Accessing the value of the mathematical constant "e"
const eValue = Math.E;

// Calculating the exponential value of a number using "e"
const exponent2 = 2;
const result2 = Math.pow(eValue, exponent2);

console.log(`The value of "e" is: ${eValue}`);
console.log(`e^${exponent2} is approximately: ${result2}`);


/** QUESTIONS **/
console.log('');


/**

 Math.PI;
 - an irrational number that represents the ratio of the circumference of a circle to its diameter.
 -  value is approximately 3.14159, but it goes on infinitely without repeating
 - constant in JavaScript gives us a precise representation of this value.
 */

1

console.log('______Math.PI______')

console.log('Math.PI = '+Math.PI)

// Example: Calculating the circumference of a circle using Math.PI
const radius = 10;
const circumference = 2 * Math.PI * radius;

console.log(`The circumference of the circle with radius ${radius} is ${circumference}`);

//— Example of Building:
//      Imagine you're working on a landscaping website where users can design their outdoor spaces. One of the features on the site is you want to offer is the ability to calculate the area of a circular patio.

//— Calculating the area of the circular patio, rounded by two decimals
const patioRadius = 8; // Radius of the circular patio in feet
const patioArea = Math.PI * Math.pow(patioRadius, 2);
console.log(`The area of the circular patio with a radius of ${patioRadius} feet is ${patioArea.toFixed(2)} square feet.`);


/** QUESTIONS **/
console.log('');