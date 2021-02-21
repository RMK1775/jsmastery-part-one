//Functions
// Function Declaration: can be called before its defined
// This is because of Hoisting. Functions are hoisted to the top of the code.
walk();
function walk(){
    console.log('walk');
}

// Anonymous Function Expression: must be defined before its called
let run = function (){
    console.log('run');
};
//Ways to reference
let move = run;
run();
move();

// Named Function Expression
let stroll = function walk(){
    console.log('walking');
};

//Arguments
//What if more arguments are passed then expected AND you want to process them?
function sum(a, b) {
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
}
console.log(sum(1, 2, 3, 4));

//Rest Operator
// (...args) will create an array of all arguments passed
function moreSum(...args){
    return args.reduce((a, b) => a + b);
}
console.log(moreSum(10, 2, 45, 78));

//Rest parameter MUST be last!
function finalCost(discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(finalCost(.2, 4.99, 5.65, 8));

//Default parameters
// Notice rate and years have a value assigned to them. These will serve as the defaults for those parameters if less than 3 arguments are passed to this function

function interest(principal, rate = 3.5, years = 5){

    return principal * rate / 100 * years;
}
console.log(interest(10000));
console.log(interest(5000, 3, 5));

//Getters and Setters
//Try and Catch: defensive programming
const person = {
    fName: 'That',
    lName: 'Guy',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error('Invalid entry');
        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter both a first and last name.');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};
 person.fullName = 'This Gal';
try{
    person.fullName = null;
}
catch(e){
    console.log(e);
}
 console.log(person);

//Local vs Global
// var = function scoped variables
// let and const are block scoped variables
function start(){
    for(var i = 0; i < 5; i++){
        console.log(i); //0, 1, 2, 3, 4
    }
    console.log(i); // 5
}

function reStart(){
    for(let i = 0; i < 5; i++){
        console.log(i); //0, 1, 2, 3, 4
    }
    console.log(i); // Error, not accessible outside of the for block ({})
}
//Var vs Let: Global vs Local
//This var being declared outside of a function is now a global variable and is attached to the window object.
var color = 'red';
// Whereas this let is only accessible within the containing file (functions.js)
let age = 30;

//'this' keyword
