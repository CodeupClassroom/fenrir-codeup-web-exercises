'use strict';


/***
 * Array Manipulation - Js I
 *
 */


/**
*	 Arrays - Manipulating Arrays
*		- Adding Elements
*		- Removing Elements
*		- Locating elements in array
*		- Slicing
*		- Reversing
*		- Sorting
*		- converting between strings and arrays
*			- Splitting
*			- Joining
*		- Exercise
*/


/**
 Adding Elements
 .unshift()
 .push()

 (`unshift` adds one or more elements to the beginning of an array.)
 ( `push` adds an item to the end of an array.)

 Syntax:
 (*) Add to the start of an array
    Array.unshift(element);

 (*) Add to the end of an array
    Array.push(element);

 */

//----- Unshift() Adding in the START of array
let students = ['kevin', 'sammie', 'mark'];
console.log("Original Student List: " + students);

//we got more students joining the class
students.unshift("lucy", 'bobby');
console.log("adding students in the front: "+students);
console.log("Count of Students: " + students.length);

// Add students one more students, showing updated length
console.log("Updated Count of student: "+students.unshift("patrick"))


//-- push() - Adding students at the END of Array

//Show current Student list
console.log('Original list of Students ' + students);

// Add two students
students.push("sandy", 'megan');
console.log('new push() list of Students ' + students);


/** Questions **/
console.log("");




/**
 Removing Elements
 .shift()
 .pop()

 (`shift` remove an element from the start of an array.)
 ( `pop` remove element from the end of an array.)

 Syntax:
 (*) remove an element from the start of an array
 Array.shift();

 (*) remove element from the end of an array
    Array.pop();

 */

console.log('_____ shift() & pop() _____');

//-- Original Student list
console.log('Before shift: '+students)

//--- Remove Student from the START of Array
students.shift();
console.log("After Shift: "+ students);

//-- Remove student from the END of Array
students.pop();
console.log("After pop(): "+ students);

//-- Say if you would like to see the student that will be removed.
let removedStudent = students.shift();
console.log("After Shift: "+ students);
console.log("Who was removed: "+ removedStudent);

/** Questions **/
console.log("");


/**
 Locating Elements
 .indexOf()
 .lastIndexOf()

 - The first method is `indexOf`, which starts searching from the beginning of the array
 - The second method is `lastIndexOf`, which searches at the end of the array

 Syntax:
 (*) Search for the element starting at the beginning of the array and return index
    Array.indexOf(element);
 (*) Search for the element at the end of the array and return index
    Array.lastIndexOf(element);
 */

console.log("_____ indexOf() & lastIndexOf() _____");

//-- Original List of Students:
console.log('Original List: '+students)

//-- Search for student named sammie
console.log(students.indexOf('sammie'));
//-- Save Location
let whereIsSammie = students.indexOf('sammie');
//--Locate out Sammie
console.log('We Found '+ students[whereIsSammie]);

//-- Search for mark from the END of Array
let whereIsMark = students.indexOf('mark');
//-- Locate Mark
console.log('We Found '+ students[whereIsMark]);

//-- Questions: So you may be asking what happen if we have two students with the same name?

// Add another student named kevin
// Can someone tell me how add a kevin at the end?
students.push('kevin');
console.log('new student update: '+students);

let whereIsKevin = students.indexOf('kevin');
console.log(whereIsKevin)
console.log('We Found '+ students[whereIsKevin])

// Can anyone Guess what index am I going to get back when I use lastIndexOf()
let whereIsKevin2 = students.lastIndexOf('kevin');
console.log(whereIsKevin2)
console.log('We Found '+ students[whereIsKevin2])

/** Questions **/
console.log("");


/**
 Slicing Arrays
 .slice()

 - The `slice()` will not change the original array, it will create a new array)


 Syntax:
 (*) `slice()` method allows us to copy a portion of an array
 (The start index)(The end index)     (end Optional)
 Array.slice(start, end);

 */

console.log("_____ slice() _____");

//-- Show ALl Students
console.log('original list '+students);

//-- We want a list of the middle students
let updatedStudentList = students.slice(1, 5)

//show new list
console.log("Middle Students: " + updatedStudentList);

//-- Important: Notice how it does not include the last kevin, that is because slice() stops right before the index you input.

//-- get a new list of the first three students
let firstThreeStudents = students.slice(0,3)
//Show first three students
console.log("First 3 Students: " + firstThreeStudents);

// Can someone show me how to get the last three
let showLastThreeStudents = students.slice(3)
console.log("Last 3 Students: " + showLastThreeStudents);

//What happens with no index?
let noIndexSlice = students.slice()
console.log("noIndexSlice: " + noIndexSlice);
//-- This is useful when you do not want to work with the original array. possibly messing up the original list and having a backup.

//--- BONUS:
//-- What will happen when we use negative Numbers?

let negativeIndex = students.slice(-3, -1);
console.log("Negative Index: " + negativeIndex);
//mark, sandy

/** Questions **/
console.log("");




/**
 Reversing Arrays
 .reverse()

 - The array is modified and will be changed when your apply the `reverse()` method
 - There is ways to clone your array like we did with slice, no elements, that way don’t mess up the original array

 Syntax:
 (*) `reverse()` method
 Array.reverse();

 */

console.log("_____ reverse() _____");


//-- Show All Students
console.log('original list '+students);

//-- Create a copy of array to not mess with original
let copyStudentList = students.slice();
console.log("Copy list: "+ copyStudentList)

// reverse array elements
copyStudentList.reverse().reverse().reverse();
// Show new order
console.log("Copy list: "+ copyStudentList)

/** Questions **/
console.log("");


/**
 Sorting Arrays
 .sort()

 - Sorting method is a method that is used when you want to sort an array in an alphabetically
 - When using the sort method, it will by default sort values as strings.

 Syntax:
 (*) `sort()` method
 Array.sort();

 */


console.log("_____ sort() _____");

// Show copy list of all students
console.log("Copy list: "+ copyStudentList)

// Sort students from A-Z
copyStudentList.sort();

// Show copy list in alphabetical order
console.log("Copy list: "+ copyStudentList)
//NOTICE: the two 's' names

//QUESTIONS: So what if we have numbers
let num = [100, 20, 33, 23, 5, 0, 11];
console.log(num.sort());
// Remember: The default sorting will sort values as strings.

// Numbers & Strings sorted
num = [100, 'food', 20, 'cats', 33, 'bob']
console.log(num.sort());


/** BONUS: TYPES **/
// Different Types
let randomNums = [100, 'catfood', 23, -45, undefined, 'bob', NaN, true, 'zeeeeeebra']
randomNums.sort();
console.log('random nums: ' + randomNums);


/** Questions **/
console.log('');



///*** converting between strings and arrays ***///
//      Using `split` method to turn strings into arrays
//      Using `join` method to turn arrays into strings


/**
 Strings -> Arrays
 .split()

  - Splitting method will turn strings into arrays
  - will return a new array

 syntax:
 Array.split(separator, limit);     // separator is optional, limit optional

 */

console.log("_____ split() _____");

// string of months
let colorString = 'blue,red,green,yellow';
// Log String
console.log(colorString);

//Turn String into Array
let colorArray = colorString.split(',');
// Log Array
console.log(colorArray);

// String of Baseball Teams
let mlbString = "dodgers*yankees*angels*white sox";
console.log(mlbString);

//Turn to an Array
let mlbArray = mlbString.split('*');
console.log(mlbArray);

//String of items in SA
let sanAntonioString = 'duncanBOBmissionBOBalamoBOBcodeup'
console.log(sanAntonioString);

//Turn to an Array
console.log(sanAntonioString.split('BOB'));

// Empty String
let emptyString = 'Hey What you doing G!'
console.log(emptyString.split(''));

/** BONUS:: DOMAIN **/

let site ='https://www.codeup.com/fasdfsad'

let domain = site.split('/')[2];
console.log(domain);



/**
 Arrays -> Strings
 .join()

 - Creates and returns a new string by concatenating the elements in an array

 syntax:
    Array.join(separator);     // separator is optional
 */

console.log("_____ join() _____");


// array into string
let elements = ['fire', 'air', 'water'];

// practice with different type of separators
console.log(elements.join(','));    // same
console.log(elements.join());       // same
console.log(elements.join(''));     // all together
console.log(elements.join(' | '));    // divided by |



/** Questions **/
console.log("");



