//create a variable to hold a number = 1
// let num = 1
// //create a while loop <65536
// while(num < 65536){
//     //iterates i*=2
//     num*=2
//     console.log(num);
// }

//create a variable to hold random int between 50 and 100. this is the number of cones she has to sell
let totalCones = getRandomInt(50,100);
//create another variable to hold how many cones a customer will buy
let wantToBuy;

//create a do while(totalCones >0)
do{

//reassign the wantToBuy variable with a random number 1-5
    wantToBuy = getRandomInt(1,5);
//if the customer wants to buy fewer cones than available, log a customer buys x cones and totalCones -= bought cones
    if(wantToBuy <= totalCones){
        console.log(`A customer wants to buy ${wantToBuy}. You now have ${totalCones}`)
        totalCones -= wantToBuy;
    } else{
        //otherwise, log `A customer tries to buy x cones but you only have x left`
        console.log(`A customer tries to buy ${wantToBuy} cones but you only have ${totalCones} left`)
    }
    //log `You now have x cones remaining.`
    console.log(`You have ${totalCones} remaining`)
    //if cones === 0 `You sold them all`
    if (totalCones === 0){
        console.log("You have sold all the cones!")
    }
}while(totalCones > 0)





















function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}