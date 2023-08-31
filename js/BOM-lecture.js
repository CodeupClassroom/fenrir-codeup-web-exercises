//setInterval method

let count = 10;

let max = 0;

let interval = 1000; // interval time in milliseconds

const intervalFunction = () => {
    if (count <= max) {
        clearInterval(bacon);
        console.log("All done");
    } else
    {
        // --count;
        console.log("Repeating this line " + count--);
    }
}


let bacon = setInterval(intervalFunction, interval);


// let intervalId2 = setInterval(function () {
//     console.log("Hello");
// }, 100)


//setTimeout method

let delay = 10000 //delay time in milliseconds

let timeoutId = setTimeout(function () {
    alert("Here is a delayed hello!");
}, delay);

