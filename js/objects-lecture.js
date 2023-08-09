"use strict";
// Objects -
//
// Arrays have been nice - we have been able to use them to group things together in a way that reminds of of a list.
//
//     Grocery List:
//
//     1. Cat food
// 2. Bread
// 3. Oat milk
// 4. Ground coffee
//
// let groceryList = ["cat food", "bread", "oat mik", "ground coffee"];
//
// Cars I've owned list:
//
// 1. Blue 2005 Honda CRV automatic transmission base trim
// 2. Blue 2010 Ford Escape Hybrid automatic transmission base trim
// 3. Black 2016 Toyota Tundra 4x2 TSS Offroad Package
// 4. White 2015 Jeep Wrangler Rubicon 2-door hard-top 4x4
// 5. Teal 2017 Chevy Silverado High Country 4x2 automatic transmission
//
// Even though I can make the above a list. .
//
//     let myVehicles = ["Blue 2005 Honda CRV automatic transmission base trim", "Blue 2010 Ford Escape Hybrid automatic transmission base trim", "Black 2016 Toyota Tundra 4x2 TSS Offroad Package", "White 2015 Jeep Wrangler Rubicon 2-door hard-top 4x4", "Teal 2017 Chevy Silverado High Country 4x2 automatic transmission"];
//
// . . is there another data type in JavaScript that might better serve my purpose? {newTopic: "objects"};

//Objects are grouping of properties (data) and behaviors (methods < functions that belong to an object)

//Not brand spanking new. . we talked to the Math object for our purposes:

console.log(".random:");
console.log(Math.random()); //Using the .random() method from the Math object

console.log(".pow:");
console.log(Math.pow(2, 2)); //Using the .pow() method from the Math object

console.log(".PI property:");
console.log(Math.PI); // This is a 'property' (data) that belongs to the math object

//But what if we want to create our own objects? Perhaps. . car objects? Student objects? User objects? A blog application could have post objects that represent?

console.log(typeof {}); //Curly braces {} are object notation

//Object literal notation:
let myFirstObject = {};

console.log(typeof myFirstObject);

//Using a constructor - an object constructor
let usingObjectConstructor = new Object();

console.log(typeof usingObjectConstructor);

//Let me set up my first car: Honda CRV

//Using object literal notation - assigning empty object into a variable
let myFirstCar = {};

//I have 'data'/'facts' about my car. .
//Year: 2005 ; Color: Blue; Transmission: Automatic; Make: Honda; Model: CRV; Features: ["power windows", "CD player", "air conditioning"];

//Let's start adding facts to our objects - first, the make. .
console.log(myFirstCar);
console.log("After we assign our first property:");
myFirstCar.make = "Honda";
console.log(myFirstCar);

myFirstCar.model = "CRV";
myFirstCar.year = 2005;
myFirstCar.color = "Blue";

console.log(myFirstCar);

myFirstCar.features = ["power windows", "CD player", "air conditioning"];

console.log(myFirstCar);
//Array notation:

myFirstCar["transmission"] = "Automatic";

console.log(myFirstCar.transmission);

console.log("Entire object to point:");
console.log(myFirstCar);

//Year: 2010 ; Color: Blue; Transmission: Automatic; Make: Ford; Model: Escape Hybrid; Features: ["power windows", "CD player", "air conditioning", "power seats", "sunroof", "satellite radio"];

//Making an object whole hog:

let mySecondCar = {
    year: 2010,
    color: "Blue",
    make: "Ford",
    model: "Escape Hybrid",
    features: ["power windows", "CD player", "air conditioning", "power seats", "sunroof", "satellite radio"],
    transmission: "Automatic"
}


console.log(mySecondCar);

mySecondCar.numberOfSeats = 5;

console.log(mySecondCar);

let myGarage = [myFirstCar, mySecondCar];

console.log(myGarage);

for (let i = 0; i < myGarage.length; i++) {

    console.log(`Hey - here's some information about a car I owned: This is a ${myGarage[i].make} ${myGarage[i].model}. It is a ${myGarage[i].year} with these features ${myGarage[i].features.join(", ")}`);
}

//Loop free: One object. . dot notation and in JS it says: "Hey, go to the zero index of this array and access the .make property - concatenate that with a space and then the .model property from the same index"

console.log(myGarage[0].make + " " + myGarage[0].model);

//Cool: We have made objects in a few ways; we looked at an object that comes with JavaScript (Math); we used dot notation (.notation) and array["notation"] to set up properties (data/facts)

//A method! Methods are functions owned/assigned to my object; function expression / anonymous function
//
// object.methodName = function(){
//  //Instructions for method here..
// }

myFirstCar.honk = function(){
    alert("Honk honk!");
}

//This keyword - referencing 'this' object
//in js - can be a little stickier than that elementary definition, but we'll start with that for now..

myFirstCar.informationLog = function(){
    console.log(`Here is one car's information: ${this.year} ${this.make} ${this.model}`);
}

mySecondCar.informationLog = function(){
    console.log(`Here is one car's information: ${this.year} ${this.make} ${this.model}`);
}

for(let car of myGarage){
    car.informationLog();
}
