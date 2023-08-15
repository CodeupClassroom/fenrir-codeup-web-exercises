//
// Create a function called logUser. This function will accept a string argument and return a message that says “stringArgument has logged in for the day”. Console.log your results to verify the message.
//
// console.log(logUser(“ken2cool”)) // “ken2cool has logged in for the day.”
//
// Bonus:
//     I. Refactor your message to use template strings.
//     Ii. Add validation to make sure the argument passed to the function is a string datatype only.

function logUser(strArg){

    if(typeof strArg !== "string"){
        return false;
    }

    return `${strArg}  has logged in for the day.`;
}

console.log(logUser("ken2cool"));
console.log(logUser("daniel_deane_satx"));
console.log(logUser("zGonzaloZ210"));
console.log(logUser(2));
console.log(logUser(false));

