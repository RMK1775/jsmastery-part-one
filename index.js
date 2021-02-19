console.log('Hello world');
//Declared variable
let name = 'that guy';
console.log(name);
//Declared constant
const interestRate = 2.499;
console.log(interestRate);

//Primitive aka Value types
/*
    Number
    String
    Boolean
    Symbol
    undefined
    null
 */
let firstName = 'Some'; //String literal
let age = 30; //Number literal
let isApproved = false; //Boolean literal
let lastName = undefined;
let selectedColor = null;
 console.log(typeof name); //"string"
name = 1;
console.log(typeof name); //"number"
console.log(typeof lastName); //"undefined"
console.log(typeof selectedColor); //"object"

//Reference types
/*
    Object
    Array
    Function
 */
let person = {
    name: 'Kimbo',
    age: 45
}
console.log(person); //{name: 'Kimbo', age: 45}

//Dot notation
person.name = 'Tony';
console.log(person.name); //Tony

//Bracket notation
person['name'] = 'Stark';
console.log(person.name); //Stark
let selection = 'age';
person[selection] = 50;
console.log(person.age); //50

//Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors); //["red", "blue"]
selectedColors[2] = 1776;
console.log(selectedColors); // ["red", "blue", 1776]

//Functions
//aName is a parameter
function greet(aName){
 console.log("Howdy" + aName);
}
//'Visitor' is an argument
greet('Visitor');

function square(aNumber){
    return aNumber * aNumber;
}

let example = square(2);
console.log(example);
console.log(square(4));
