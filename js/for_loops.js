//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//create a function showMultiplicationTable
function showMultiplicationTable(num){
//create a for loop to iterate 1-10
    for (let i = 1; i < 10; i++) {
    //log `number x index = number*i`
    console.log(`${num} x ${i} = ${num*i}`)
    }
//call the function
}
//showMultiplicationTable(7);


//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

//create a for loop 0 < 10
// for (let i = 0; i < 10; i++) {
// //get an int 20-200
//     let num = getRandomInt(20,200)
// //log the number and if its even
//     console.log(`${num} is ${isEven(num)}`);
// }


//Create a for loop that uses console.log to create the output shown below.

//create a for loop 1<=9
// for (let row = 1; row <= 9; row++) {
// //make a String to hold each line
//     let str = '';
// //nest a loop to build the String
//     for (let j = 0; j < row; j++) {
//         str += row;
//     }
// //log String
//     console.log(str);
// }

//Create a for loop that uses console.log to create the output shown below.
//create a for loop
//start at 100
//decrement by 5s
// for (let i = 100; i >= 5; i = i - 5) {
//     //log i
//     console.log(i);
// }















function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function isEven(num){
    if(num % 2 === 0){
        return 'even';
    }
    return 'odd';
}