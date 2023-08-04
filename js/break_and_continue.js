//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

//create a variable to hold int for number entered
let userNum;
let valid = false;
//do while loop while(true)
do{
    //prompt() user for input
    userNum = parseInt(prompt("Please enter a number between 1 and 49"))
    //check if it is even
    if(!isEven()){
        alert("That number is not odd. Please try again")
        continue;
    }
    //check if it is in range
    if(userNum < 1 || userNum > 49){
        alert("That number is out of range")
        continue;
    }
    //!isFinite(num)
    if (!isFinite(userNum)){
        alert(`That is not a number`);
        continue;
    }
    //if none of those, break
    break;
}while(true);


//Use a loop and the continue statement to output all the odd numbers between 1 and 49, except for the number the user entered.

//log userNumber
console.log(userNum);
//for loop to iterate 1-50
for (let i = 1; i < 50; i++) {
    //continue if even
    if(i % 2 === 0){
        continue;
    }
    //if i is userNumber, log a message and continue
    if(userNum === i){
        console.log(`A wild ${userNum} has appeared! RUN!`)
        continue;
    }
    //log i `Here is an odd number: `
    console.log(`Here is an odd number: ${i}`);
}