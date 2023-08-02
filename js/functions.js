"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

//named function - function's name sayHello
//one parameter - parameter === name
//Store parameter in let
//return. . . "Hello, " + variableParam

function sayHello(name){
    // let nameInput = name;
    // return `Hello, ${nameInput}!`;
    // return "Hello, " + nameInput + "!";
    return "Hello, " + name + "!";
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Kenneth");

console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

let myName = "Kenneth";

helloMessage = sayHello(myName);

console.log(helloMessage);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

//declared function - isTwo
//one parameter - number is param name
//RETURN if number === 2

function isTwo(number){

    return number === 2;
}

console.log("The random number is " + random);
console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

//declared function calculateTip
//two parameters decimalTip, totalBill
//return decimalTip * totalBill

function calculateTip(decimalTip, totalBill){

    return decimalTip * totalBill;
}

console.log(calculateTip(.20, 20));
console.log(calculateTip(.25, 25.50));
console.log(calculateTip(.15, 33.42));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// let tipPercent = Number(prompt("What percent would you like to tip?")); //10 or .10
//
// let tipDeci = tipPercent / 100;
//
// let billTotal = Number(prompt("How much was your bill today?"))

// alert(`$${calculateTip(tipDeci, billTotal).toFixed(2)} is your tip amount for today, thank you for using your application`);

// let totalTip = calculateTip(tipDeci, billTotal);

// let alertMessage = "Your tip is $" + totalTip.toFixed(2);

// alert(alertMessage);

// alert("Your tip is $" + totalTip.toFixed(2));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

let discountPercentRandom = Math.random().toFixed(2);

function applyDiscount(originalPrice, discountPercent){

    return originalPrice - (originalPrice * discountPercent);
}

console.log(`${discountPercentRandom} is the decimal we're passing into the applydiscount function`);
console.log(applyDiscount(100, discountPercentRandom));
console.log(applyDiscount(100, .20));

console.log(applyDiscount(45.99, 0.12));