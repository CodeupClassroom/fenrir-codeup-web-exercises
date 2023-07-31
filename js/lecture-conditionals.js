"use strict";

/***
 * Conditionals - Lecture Notes
 *
 */


/**
 Today's Agenda
 - What are conditional?
 - If Statement
 - If/Else Statement
 - If/Else If/Else Statement
 - Ternary Operator
 - Switch Statement
 - Exercise Time
 */

/**
 EXAMPLE: IF STATEMENT
 - Creating a condition to tell me if a number is positive
 */

console.log("****** Example #1 - IF STATEMENT ******")

var number = 10;
console.log("The number is: "+number);

if (number > 0){
    console.log("The Number is Positive!")
}

/**
 * BONUS:
 * - Truthy or Falsy
 *  - All Values that is false, undefined, null, 0, NaN, or an empty String ('') returns false.
 */



/**
 EXAMPLE: IF/ELSE STATEMENT
 - Building upon our last example, We will be Creating a condition to tell me if a number is positive
 */

console.log("****** Example #2 - IF/ELSE STATEMENT ******")

var num = -10;

console.log("The number is: "+ num);

if (num > 0){
    console.log("The Number is Positive!")
}else{
    console.log("The Number is Negative!")
}


/**
 EXAMPLE: IF/ELSE IF/ELSE STATEMENT
 - We are going to check the weather today
 */

console.log("****** Example #3 - IF/ELSE IF/ELSE STATEMENT ******")

var todayWeather = 70;

if (todayWeather < 90){
    console.log("It is kinda chilly today")
} else if (todayWeather < 100){
    console.log("It is warm today")
}else {
    console.log("It is too hot for me today")
}

console.log();

console.log("Example #3 - IF/ELSE IF/ELSE STATEMENT using AND")
if (todayWeather > 90 && todayWeather < 100){
    console.log("It is kinda chilly today")
} else if (todayWeather < 100){
    console.log("It is warm today")
}else {
    console.log("It is too hot for me today")
}

console.log();
console.log("Example #3 - user and admin")

let userLogged = false;
let admin = false;

if (userLogged && admin){
    console.log("The user is admin and logged in")
}else if (userLogged){
    console.log("User is logged in")
}else{
    console.log("FAILED!")
}

/**
 * BONUS:
 - Nested If Statements
 */
console.log("Example #3 - Nested If else statements")

todayWeather = 91;

if (todayWeather < 90){
    //-- Nested
    if(todayWeather <= 60){
        console.log("Super Chilly");
    }else{
        console.log("its okay nothing too hot yet!");
    }
    //-- End of Nested
} else if (todayWeather < 100){
    console.log("It is warm today")
}else {
    console.log("It is too hot for me today")
}

/**
 EXAMPLE: Ternary Statement
 - Is it your birthday month?
 - View in if statement
 */

console.log("****** Example #4 - Ternary Statement ******")

let birthdayMonth = "june"

//-- ternary operator
const greetings = birthdayMonth === "july" ? "Woot Woot It's your birthday Month!" : "Good Morning!";

console.log(greetings);

//-- if statement
// TODO:
//  [X] Come back to this and refactor
let greeting = "";
if (birthdayMonth === 'july'){
    greeting = "Woot WOot";
}else{
    greeting = "GOod Morning"
}
console.log(greeting)



/**
 EXAMPLE: Switch Statement
 - What is today?
 - Bonus: What is the number?
 */

console.log("****** Example #4 - Switch Statement Statement ******")

let whatIsToday = 'tuesday';
let message = "";

switch (whatIsToday){
    case 'monday':
        message = "Motivation Monday"
        break;
    case "tuesday":
        message = 'Taco Tuesday'
        break;
    case 'wednesday':
        message = "Hump Day"
        break;
    case 'thursday':
        message = "Throwback Thursday"
        break;
    case 'friday':
        message = "Party Time Friday";
        break;
    default:
        message = 'It is the weekend!'
        break;
}

console.log("Today is: "+whatIsToday)
console.log(message);


/** BONUS: **/

console.log("****** Example #4 BONUS - Switch Statement Statement ******")
whatIsToday = 21;
// message = "";

switch (whatIsToday){
    case 1:
    case 20:
    case 89:
        message = 'Weekday!';
        break;
    default:
        message = 'It is the weekend!';
        break;
}

console.log("Today number is: "+whatIsToday)
console.log(message);