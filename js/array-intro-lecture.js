//Array literal notation - [] square / straight brackets

console.log([]);

console.log([1, 2, 3]);

console.log([true, "different data types in this array", 1, null, undefined]);

//okay - how do I store an array into a type of variable?

let lunchPlansArray = ["salad down the street", "chic-fil-a is open downtown now", "pizza at pizzaritas", "mexican food at the oasis cafe"];

console.log(lunchPlansArray);

//.length will tell us the "size" of the array as a number..

console.log(lunchPlansArray.length); //The length is the number 4

//If I want to look at the individual elements in the array. . arrays are zero-indexed, so the first element is 0

//Setting up a new array to look at

let fenrirClassPetNames = ["Peanut", "Jax", "Lindsey", "Clarence", "Snoop (Dawg)", "Luna", "Salem"]

console.log(fenrirClassPetNames);

console.log(`Hey thanks for asking me about my cohort's pets - the one that I own is ${fenrirClassPetNames[0]}`);

console.log("Jessica owns a dog and the dog's name is " + fenrirClassPetNames[1]);

for(let i = 0; i < fenrirClassPetNames.length; i++){
    console.log("Here's the name of one of our pets: " + fenrirClassPetNames[i]);
}

// for(let element of arrayName){
//
// }
console.log("~~~~ line break ~~~~");

let comboArray = [7, "Two", true, null, ["an array", "inside an array", "wow"]];

comboArray.forEach(function(element, index){

    console.log("Hello - we're learning about iterating thru arrays, and the current index we are on is " + index);
    console.log("The element is:");
    console.log(element);
})
console.log("~~~~ line break ~~~~");

//Question: Do we **need** the index parameter? Or is it optional?
let moviesArray = ["The Meg 2", "Willy Wonka and the Chocolate Factory", "Dodgeball", "Jurrasic Park"];

moviesArray.forEach(function(element){
    console.log(`Hey, have you ever seen ${element}? It was a pretty good movie.`);
});


console.log("~~~~ line break ~~~~");

//DLC content: for of

for(let petName of fenrirClassPetNames){

    if(petName === "Lindsey"){
        break;
    }
    console.log("Here's the name of one of our pets: " + petName);
}

