/*
if(condition){
    statement(s)
} else if (anotherCondition){
    statement(s)
} else {
    statement(s)
}
*/
let hour = 10;
let greeting;
//If Else
if(hour >= 6 && hour < 12)
    greeting = 'Good morning!';
 else if (hour >= 12 && hour < 18)
    greeting = 'Good afternoon!';
 else
    greeting = 'Good evening!';

//Switch
let role;
let title;

switch(role){
    case 'guest':
        title = 'Guest user';
        break;
    case 'moderator':
        title = 'Moderator user';
        break;
    default:
        title = 'Unknown user';
}

//For Loop
/*
for(initial expression){}
typical:
for(initialized variable, an index ; condition ; incrementExpression){
statement(s)
}
 */
for (let i = 1; i <= 5; i++){
    console.log('Iteration: ' + i);
}

console.log('Counting down');
for (let j = 5; j > 0; j--){
    console.log(j);
}
console.log('Liftoff!');

//While
let k = 0;
while(k < 5){
    console.log('While Iteration:' + k);
    k++;
}

//Do - While
let l = 0;
do{
    if(l%2 !== 0){
        console.log('Do-While odds: ' + l);
    }
    l++;
}while(l <= 20)

//For-In
const person = {
    firstName: 'That',
    lastName: 'Guy'
}

for (let key in person){
    console.log(key, person[key]);
}

//For-Of
const colors = ['red', 'green', 'blue'];
for(let color of colors){
    console.log(color);
}

//Break and Continue
let m = 0;
while(m <= 10){
    if(m == 9) break;
    if(m == 5) {
        m++;
        continue;
    }
    console.log(m);
    m++;
}

//Exercises
function maxNum(a, b){
    let max = (a > b) ? a : b;
    return 'Max # is: ' + max;
}
maxNum(4,6);

function imageOrientation(height, width){
    let orientation = (height > width) ? 'portrait':'landscape';
    return 'Pic is set to: ' + orientation;
}
imageOrientation(30, 15);

// Divisible by 3 = Fizz
// Divisible by 5 = Buzz
// Divisible by 3 and 5 = FizzBuzz
// Not divisible by 3 or 5 = input
// Not a number = 'Not a number'

function fizzBuzz(input){
    if(typeof input !== 'number'){
        return 'Not a number';
    }else if(input % 15 == 0){
        return 'FizzBuzz';
    }else if(input % 5 == 0){
        return 'Buzz';
    }else if(input % 3 == 0){
        return 'Fizz';
    }
return input;
}
fizzBuzz(7);

// Speed limit = 70
// Every 5 over limit = 1 point
// Math.floor(#) may help
// 12 points or more = suspended

function checkSpeed(speed){
    const limit = 70;
    let points = Math.floor((speed - limit)/5);

    if(limit > speed || points == 0)
        return 'ok';

    if (points >= 12)
        return 'suspended';

    return 'Points: ' + points;
}
checkSpeed(74);

function showNumbers(input){
    if(typeof input !== 'number')
        return NaN;
     for(let i = 0; i <= input; i++) {
         let output = (i % 2 == 0) ? 'Even' : 'Odd';
         console.log(i, output);
     }
}
showNumbers(10);

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
const array = [0, null, undefined, '', 2, 3];
function countTruthy(array){
    let count = 0;
    for (let value of array){
        if (value)
            count++;
    }
    return count;
}
countTruthy(array);

const movie = {
    title: 'a',
    releaseYear: 1986,
    rating: 4,
    director: 'b'
}
function showStrings(obj){
    for (let key in obj){
        if(typeof obj[key] === 'string'){
        console.log(key, obj[key]);
        }
    }
}
showStrings(movie);

//For multiples of 3 and 5
function sum(limit){
    let sum = 0;
    for(let i = 1; i <= limit; i++){
        if (i % 5 == 0 || i % 3 == 0){
            sum += i;
        }
    }
    return sum;
}
sum(10);

const marks = [80, 80, 50];
/*
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
 */
function calculateGrade(marks){
    let average = 0;
    for(let mark of marks){
        average += mark;
    }
    average = average / marks.length;
    if(average < 60){
        return 'F';
    }else if (average >= 60 && average <= 69){
        return 'D';
    }else if (average >= 70 && average <= 79){
        return 'C';
    }else if (average >= 80 && average <= 89){
        return 'B';
    }else if (average >= 90){
        return 'A';
    }
}
console.log(calculateGrade(marks));

function showStars(rows){
    let stars = '';
   for(let i = 1; i <= rows; i++){
       stars += '*';
       console.log(stars);
   }
}
showStars(5);

//Prime: those #s divisible only by 1 and themselves
function showPrimes(limit){
    for (let i = 2; i<= limit; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
showPrimes(20);