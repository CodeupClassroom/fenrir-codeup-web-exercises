(function(){
    // Defining functions [named or anonymous]
//
// Functions have key pieces of their puzzle to remember:
//
//     * 'Keyword'
//     * Give it a name. . semantically appropriate
//     * Parenthesis with parameters (inputs) if necessary
//     * {} < curly braces set up the BODY, the SCOPE of the function
//     * Some amount of body where instructions are written
//     * If: the function creates output, you need the return keyword followed by WHAT is being returned, WHAT the output is


//First no parameters (no inputs), named function, this function returns a String that we can use in a couple of ways..
function sayHello(){
    return "Hello there, Fenrir";
}

let messageForAlert = sayHello();

console.log(messageForAlert);

// alert(messageForAlert)
//
// alert(sayHello())

//Input (parameter) example - takes in an input and attempts to concatenate it with the first string literal and return an entire string back
function sayHelloWithInput(input){

    return "Hello there, " + input;
}

//Multi-parameter arthimetic function (three inputs, returns an expression adding the operands (inputs) with the plus operator
function addThreeNums(num1, num2, num3){


    return num1 + num2 + num3;

    //Unreachable code: I can write you a sweet message, but you won't see it if it's AFTER a return. the return keyword terminates the function's running
    alert("You all are really cool students so far, and I like working with you, thanks for a good week so far");

}

//Function expressions (anonymous functions)


//No input expression - stored in variable
let goodMorningMessage = function(){
    return "Good morning, Fenrir";
}

//Input expression - variable then into an alert

let goodMorningToYou = function(name){

    return "Good morning, " + name;
}

//Experiment: Do we get any different result in using it similarly to how we used functions declarations?

// alert(goodMorningMessage()); //Still return a string into the alert function to use

//What happens when we write a function with no return?
//It defaults to returning undefined

function yellingLunchOrder(orderString){
    alert(orderString.toUpperCase() + "!!!! Order up!");
    //without an explicit return statement - you will still get back an undefined (that's okay, just be aware)
}

//What is scope? Scoping -
// We have layers we are working with -
// Ask yourself - am I in the GLOBAL LAYER (global scope)
// Am in the scope of a defined function (FUNCTION scope)
// Am I within curly braces (BLOCK scope)

let globalMessage = "Look, I am a string literal defined and initialized in the 'global' scope";

function useMessage(){
    //We can go from GLOBAL to FUNCTION scope - that's copacetic
    alert(globalMessage);

    let functionScopeMessage = "Hey, I'm inside this function :) Can you see me?";

    //If declared/initialized in this layer of the application - I can access it within these fencerows ( '{}' )
    alert(functionScopeMessage);
}

useMessage();

// alert(functionScopeMessage);



    let blockScopeMessage = "Hey, I'm in this block of code - you can tell I'm in this block of code as I'm inside these curly braces";
    alert(blockScopeMessage);


//Would our codesnippet from the curriculum behave the same with LET?

    //First experiment: using var and the old scoping rules

    //Refactor to let . . will our new scoping rules impact the behavior?
    //Same behavior ! We were expecting an error for declaration, but our scoping rules stay intact!
    let x = 300;
    let y = 100;


    function scopeExample() {
        let x = 1;
        let y = 2;

        console.log('x: ' + x + ' y: ' + y); // x: 1 y: 2
        return x + y;
    }
    //
    console.log('x: ' + x + ' y: ' + y); // x: 300 y: 100
    var returnValue = scopeExample();
    console.log(returnValue); // 3

// Now we're hoisting
hoistingMessage = "a message here";

    console.log(hoistingMessage);

    var hoistingMessage; //this is a declaration that went to the TOP of the file


    //Let does not have hoisting behavior - var + function keywords

hoistingMessageTwo = "will let work???";

console.log(hoistingMessageTwo);

let hoistingMessageTwo;
})();

