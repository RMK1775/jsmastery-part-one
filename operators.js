//Types of Operators
// Arithmetic
let x = 3;
let y = 10;

console.log(x + y); //13
console.log(x - y); //-7
console.log(x * y); //30
console.log(x / y); //0.3
console.log(x % y); //3; modulus (remainder)
console.log(x ** y); //59049; exponentiation, x to the power of y
console.log(x++); //3; increment is after the display
console.log(x); //4
console.log(--y); //9; the decrement is done before display

// Assignment
let a = 30;
a++; //31
a = a + 1; //32
a += 4; //36
let b = 5;
b *= 5; //25

// Comparison
//Relational
console.log(a > 0); //true
console.log(a >= 100); //false
console.log(b < 20); //false
console.log(b <= 25); //true
console.log(b !== 25); //false

//Equality
//Strict Equality; type and value
console.log(a === 36); //true
//Loose Equality; value
console.log(a == '36'); //true
console.log(true == 1); //true; true = 1, false = 0

//Ternary
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type); //gold

// Logical
//AND: both operands must evaluate to true
console.log(true && true); //true

//OR: returns true if either operand evaluates to true
console.log((true || false)); //true

//NOT: use of ! reverses the evaluated value
console.log(!(true || false)); //false; !(true) = not(true) = false

//Falsy: the following return false in JS
/*
undefined
null
0
false
''
NaN
*/
//Anything else is returned as 'truthy'; true

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor); //red; if userColor were undefined, it would display blue

// Bitwise
//Bitwise OR
//In bits 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// Note the use of a single pipe for the OR
console.log(1 | 2); //3; in evaluating each of the 8 positions between the numbers if a 1 is present is in 1 OR 2 it is retained and the binary result is displayed as its corresponding number.
console.log( 1 & 2); //0; same evaluative process as above except both positions must contain a 1 for it to be retained; 1 AND 2.

//Read, Write, Execute example
//Permissions
// Read = 00000100
// Write = 00000010
// Execute = 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission); //6

let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message); //no

//Order of Precedence
//PEMDAS
/*
Parentheses
Exponents
Multiplication/Division
Addition/Subtraction
 */

//Swapping variables
let d = 'red';
let e = 'blue';
let c = d;
d = e;
e = c;
console.log("d: " + d + " e: " + e);
