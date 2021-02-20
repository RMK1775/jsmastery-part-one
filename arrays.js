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
//Note: the slice starts immediately after the start position up to and including the end position
const sliced = combined.slice(2, 4); //[3, 4]
console.log(sliced);

// Important! When using either concat or slice:
// Primitive types have their values copied into the new array
// Objects have their reference (address) copied NOT the values!
// So if you change the values within the object, you are
// changing it for everything that points to it!

//Spread
const spred = [...first, ...second]; // [1, 2, 3, 4, 5, 6]
const spredPlus = [...first, 'a', ...second]; //[1, 2, 3, 'a', 4, 5, 6]
const copySpred = [...spred]; //[1, 2, 3, 4, 5, 6]

//Iterating
spred.forEach(element => console.table(element));
spredPlus.forEach((element, index) => console.log(index, element));

//Joining
//String created with the elements in the array separated by designated format in parentheses
const joined = spred.join(',');
console.log(joined);

//Sidebar: Split
// Array created by splitting the string using the designated separator in parentheses
const example = 'this is an example';
const parts = example.split(' ');

//Sorting
//Primitive
const randomNums = [36, 56, 89, 12, -4];
randomNums.sort();
randomNums.reverse();

//Objects
const coarses = [
    { grade: 'coarse', grit:40 },
    {grade: 'medium', grit: 80 },
    {grade: 'fine', grit: 150}
];
coarses.sort(function(a,b){
    const nameA = a.grade.toUpperCase();
    const nameB = b.grade.toUpperCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
})

//Testing
const allPositive = spred.every(function(value){
    return value >= 0;
});
console.log(allPositive); //true
const atLeastOneNegative = randomNums.some(function(value){
    return value < 0;
})
console.log(atLeastOneNegative); //true

//Filtering
//Values
const filtered = randomNums.filter(value => value >= 0);

//Mapping
const items = filtered.map(value => '<li>' + value + '</li>');
const html = '<ul>' + items.join('') + '</ul>';

//Notice the added parentheses around the object(s) being created
//Without them the square brackets would be treated as a block of code!
const moreItems = randomNums.map(input => ({value: input }));

//Chaining
const refiltered = randomNums
    .filter(value => value >= 0)
    .map(input => ({value: input }));

//Reducing
//.reduce(callback function, initial value)
const aSum = randomNums.reduce(
    (accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0);


