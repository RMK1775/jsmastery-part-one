//Arrays
//Adding elements
//Adding elements
/*
Push: add to the end
Unshift: add at the beginning
Splice: insert in the middle
 */
const numbers = [3,4];
numbers.push(5); //[3, 4, 5]
numbers.unshift(1, 2); //[1, 2, 3, 4, 5]
//.splice(starting position, number of elements to delete, elements to add
numbers.splice(1,0, 'a', 'b'); //[1, 'a', 'b', 2,  3, 4, 5]
console.log(numbers);

//Finding elements
//Primitives
//If present, where?
numbers.indexOf(2); //1
numbers.indexOf('c'); //-1; not present
numbers.indexOf('1'); //-1; 1 is present as a number, not a string

//Is it present?
numbers.includes(1); //true

//What about repeated elements?
const letters = ['a', 'b', 'c', 'a', 'b', 'c'];
letters.indexOf('a'); // 0
letters.lastIndexOf('a'); // 3

//Finding the index from a specified index
// .indexof(element, starting index)
letters.indexOf('a', 1); // 3

//Objects
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

courses.find(function(element){
    return element.name === 'a';
}) // {id: 1, name: 'a'}

courses.find(function(element){
    return element.name === 'x';
}) // undefined; not -1, undefined

courses.findIndex(function(course){
    return course.name === 'b';
}) // 1; the index of the matching element

//Arrow functions
courses.find(course => course.name === 'a'); // 0

//Removing elements
/*
Pop: remove last element and return it
Shift: remove first element and return it
Splice: remove starting from a designated element
 */
//numbers = [1, 'a', 'b', 2, 3, 4, 5]
numbers.pop(); //[1, 'a', 'b', 2, 3, 4]
numbers.shift(); //['a', 'b', 2, 3, 4]
console.log(numbers);

//Empty an array
let roster = ['alpha', 'bravo', 'charlie'];
let another = roster;

//Ways to empty and effect on second array
roster = []; // roster: [], another: ['alpha', 'bravo', 'charlie']
roster.length = 0; // roster: [], another: []
roster.splice(0, roster.length); // roster: [], another: []
while (roster.length > 0)
    roster.pop();   // roster: [], another: []

//Combining and Slicing
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // [1, 2, 3, 4, 5, 6]
//.slice(start position, end position)
//Note: the slice starts immediately after the start position up to nd including the end position
const sliced = combined.slice(2, 4); //[3, 4]
console.log(sliced);

// Important! When using either concat or slice:
// Primitive types have their values copied into the new array
// Objects have their reference (address) copied NOT the values!
// So if you change the values within the object, you are
// changing it for everything that points to it!

//Spread
