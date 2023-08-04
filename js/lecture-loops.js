"use strict";

/**
 * Loops - Javascript
 */

/**
 * Today's Agenda:
 *  - What is a loops?
 *  - While Loops
 *  - DoWhile Loops
 *  - For Loops
 *  - Break and Continue
 */


/**
 * What are loops?
    - Loops allow us to repeat a block of code based on certain conditions
    - So instead of writing repetitive code to do a task, we can simply write a loop
    - used to help us not be so redundant

    - 3 Types of Loops:
        - While
        - Do-While
        - For Loops

        There is other two loops "ForEach" and "For-in", but will discuss that in Arrays
 */


/**
 *      WHILE LOOPS

    - A while loop that allows us to execute a block of code as long as the condition is TRUE.

    Basic Syntax:

    while(condition){
        // Block of COde
    }
 */

console.log("***** Do-While Loop*****")
console.log("")

//-- Example With False Booleans
while(false){
    console.log("Can you see me?")
}

//-- Example with True Boolean
//-- WARNING: Will be in infinite loop
while(true){
    console.log("Can you see me?")
    break;
}

//-- Example Count to 5
let count = 0;
while(count <= 5){
    console.log("Count is: " + count);
    count++
}

//-- Example Countdown from 5
count = 10      //-- Why do I have to declare my variable again?
while (count >= 0){
    console.log("Count is: " + count);
    count--
}

//-- Questions: What would happen when I put the variable count inside the loop?
//-- infinite loop, why is that?

/** Questions? **/

//---- BONUS EXAMPLE: Asking the user to insert only Numbers

//-- Ask user for a number
var userInput = prompt("Enter a number:");
//-- Change number in an integer
var number = parseInt(userInput);

// While Loops to verify if it is a number
while(isNaN(number)){
    //-- iF the user does NOT insert a number THis prompt will show to ask for a number
    userInput = prompt("Invalid input. Please enter a number:");
    //-- Turning user input into an integer
    number = parseInt(userInput);
}

//-- Once the while loop is false, this console log will be shown
console.log("You entered a valid number:" + number);

console.log("")




/**
 * Do-While Loop

    - A do-while Loop is similar to a while loop, HOWEVER it will run at least once, then test the condition
    - The main difference between a while and do-while loop is that a do-while will run at least one time.
    - So a question when do you want to use a do-while loop? When you want to run the code at least once.

    Real World Example:
        - DO Wash hands WHILE hands_still_Dirty
        - Do{
            Wash Hands()
        }while(hands_still_Dirty)

 */

console.log("***** Do-While Loop*****")
console.log("")

//-- Example with False Boolean
//-- QUESTION: Do you think you will be able to see the console.log? Why is that?
do{
    console.log("Can you see me")
}while(false);

//-- Example with True Boolean
//-- WARNING: Infinite Loop will happen

do{
    console.log("Can you see me")
    break;
}while(true);

//-- Example: Counting to 5
number = 0;
do {
    console.log("Count is: " + number);
    number++
} while(number <= 5)

//-- Example: Countdown from 5
number = 5;
do {
    console.log("Countdown is: " + number);
    number--
} while(number >= 0)

//-- Example: Is you hands still dirty

// Going to be saving the users reply
let reply = "";
do {
    reply = prompt("Did you wash your hands? y/n")
}while(reply !== 'y')

console.log("Thank you for washing your hands!")

//-- BONUS example: Guessing Game

// I know the user is going input a number, Saving variable globally
let userGuessNumber = 0;
// Generate the random number between 1-3
let randomNumber = Math.floor(Math.random() * 3) + 1;

do {
    // Saving the users response from the prompt
    userGuessNumber = parseInt(prompt("Guess a number 1-3"));
    // Condition, if true will continue with the loop
    // If the userGuess is NOT equal to random number then Continue asking till guess is correct
} while (userGuessNumber !== randomNumber);

console.log("Your guess is: " + userGuessNumber);
console.log("Random number is: " + randomNumber);
console.log("You finally Got it!!!!!");

console.log("")

/** QUESTIONS **/


/**
 * for Loops

    - Widely Used, very common
    - A loop that will execute a block of code a specific number of times.
    - useful when you know in advance how many times you would like to loop

    - The for loop has three components:
        - The Initialization AKA The Counter
        - Condition
        - Increment/Decrement

        for(Counter;Condition;Increment){
              Black of Code
        }


 */



console.log("***** For Loop*****")
console.log("")

// Example: condition false
// Will this run at least once?
for (let i = 0; false; i++) {
    console.log("Iteration: " + i);
}

//-- If condition is true then it would be an infinite loop

//-- Example
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

//-- Example
const endOfCount = 5;
for (let i = 1; i <= endOfCount; i++) {
    console.log(i);
}

// Example: String Length
let countString = "Welcome to the DogHouse!"

for(let x = 0; x <= countString.length; x++){
    console.log("Counter: "+ countString.charAt(x));
}

// Example: user is prompt for how many times
let howManyTimes = prompt("How many times would you like your loop to run?")
for(let x = 0; x <= howManyTimes; x++){
    console.log("Counter: "+ x);
}

// Example: No Braces
// When you don't use curly brackets you will only be able to one line down and NOT use multi line
// if you try to repeat a console log you will get that 'i' is undefined
for (let i = 0; i < 5; i++)
    console.log(i);
    // console.log(i);


//-- Example: NESTED
for (let i = 0; i < 5; i++) {
    console.log("Iteration i: " + i)
        for (let j = 0; j < 5; j++) {
        console.log(" Iteration j: " + j);
    }
}

/** QUESTIONS: **/


/**
 * Breaks
        - Allows us to exit a loop
        - When a break is encountered, the program breaks out the loop and continues the rest of the code

        - Imagine you are counting from 1 to 10,
        - You have a rule that at 5 you want to stop counting immediately
        - Well that is what break statement does.

        - It is like have a special button that says 'STOP NOW!'

 * Continue
        - Is when you want to skip a step for a particular loop cycle, and start the next cycle right away
        - It's like saying,
            "Hey, I don't want to finish what I'm doing right now. Let me skip this task and move on to the next one."

 */


// BREAK:  For Loop that start at 1 and ends at 5
for (let i = 1; i <= 5; i++) {
    // If 'i' is exactly 3 then break;
    if (i === 3) {
        console.log("Loop terminated at i = " + i);
        // Break out the loop
        break;
    }
    console.log("Current iteration: " + i);
}

// BREAK:  While Loop that start at 1 and ends at 5
let number = 1;
while (number <= 5) {
    if (number === 3) {
        number++;
        // Break out the loop
        break;
        // console.log("Can you See me?");
    }
    console.log("Processing: " + number);
    number++;
}

//-- QUESTION: What happen when we add a console log after a break?



// CONTINUE:  For Loop that start at 1 and ends at 5
for (let i = 1; i <= 5; i++) {
    // If 'i' is exactly 3 then continue;
    if (i === 3) {
        // Continue and skip 3
        continue;
    }
    console.log("Current iteration: " + i);
}


//-- While Loop starting at 1, ends at 5
let num = 1;
while (num <= 5) {
    if (num === 3) {
        num++;
        //-- Continue and Skipping number 3
        continue;
    }
    console.log("Processing: " + num);
    num++;
}
