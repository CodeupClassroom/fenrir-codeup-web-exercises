"use strict";


console.log("Hey, this is me here in external JS - you loaded me in with a src attribute");

console.log("Doing something and want to make sure I got the right boolean");

let testBoolean = false;

console.log("testBoolean at this point is " + testBoolean);

let doesMyStringSayKenneth = "Ryan";

console.log("The variable of doesMyStringSayKenneth currently has " + doesMyStringSayKenneth + " inside of it");

console.log("Is this working?");

//Console.log is a debugging friend, a way to log a message into the console, and you can include expressions or variables

console.log("2 + 2 =" + (2+2));

//User interaction

//Alert ; Confirms ; Prompts

//These are old school ways of using pieces of the browser that are not as often relied open


//Alert spawns a small browser window with only one "accept" button - show a textual message. We can use. . variables, expression, boolean
// alert("We should be back from lunch! Lunch ended half an hour ago!");
//
// let cohortName = "Fenrir";
//
// alert("Hey there y'all, welcome to the " + cohortName + " cohort!");

//Prompt - I would like to ask my user a question

// let userAnswer; //initialized a variable that is undefined
//
// userAnswer = prompt("Did you have a good lunch?");
//
// console.log("You said that your lunch was: " + userAnswer);

// let userAnswerForAlert = prompt("What is your favorite song of the moment?");
//
// alert("You said your favorite song was " + userAnswerForAlert);

//Confirm - I want to ask my user a YES or NO question

let userResponse = confirm("We are learning JavaScript together");

alert("You said that it was " + userResponse + " that we are learning JavaScript~");