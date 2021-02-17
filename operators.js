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


// Bitwise