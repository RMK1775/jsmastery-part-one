const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
}

circle.color = 'yellow';
console.log(circle); //Should see the added attribute

delete circle.color;
console.log(circle); //And it's gone

//Note: draw is referred to as a method; it's type is function
circle.draw();

//Factory Function: note CamelCase notation
function createCircle(radius){
    return {
        radius,
        draw(){
        console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

//If-in: determine if an object contains a certain attribute
if('radius' in circle1) console.log('has radius');

//Constructor Function: note Pascal notation
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle3 = new Circle(1);

console.log(circle3);

//Reminder: only for-in works on objects, for-of (or enhanced for loop) cannot iterate through an object
console.log('Using for-in on circle3');
for(let key in circle3)
    console.log(key, circle3[key]);

console.log('Use of for-of on circle3');
for(let key of Object.keys(circle3))
    console.log(key);

for(let entry of Object.entries(circle3))
    console.log(entry);

console.log('Displaying .constructor on circle3 and circle');
console.log(circle3.constructor);
console.log(circle.constructor);

//Cloning an object
//Older method
const another = {};
for (let key in circle3)
    another[key] = circle3[key];
//Current method
const yetAnother = Object.assign({}, circle3);
//Adding an attribute and cloning
const yesAgain = Object.assign({
    color: 'yellow'
}, circle);
//Spread operator; the 'elegant' way
const pretty = {...circle3};

//Template Literals
const message = `This is my
'literal' message.
`;

let name = 'That Guy';
let greeting = `Hello, ${name}!`;

//Exercises
//1
console.log('\nExercise 1');
const home = {
    street: 'Nunya',
    city: 'Business',
    zipCode: 60652
};

function showAddress(address){
    for (let key in address)
        console.log(key, address[key]);
}
showAddress(home);

//2
console.log('\nExercise 2');
console.log('Factory function and for-in');
function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    }
}
const home2 = createAddress('Simpson', 'Springfield', 62626);
for(let key in home2)
    console.log(key, home2[key]);

console.log('\nConstructor function and for-of with entries.');
function Address(street, city, zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

let home4 = new Address('Madison', 'NYC', 10101);
for(let entry of Object.entries(home4))
    console.log(entry);

//3
console.log('\nExercise 3');
let address1 = new Address('a', 'b', 12345);
let address2 = new Address('a', 'x', 12345);

function areEqual(addy1, addy2){
    for(let key in addy1) {
        if (addy1[key] !== addy2[key])
            return false;
    }
    return true;
}
console.log('The 2 addresses are equal: ' + areEqual(address1, address2));

function areSame(addy1, addy2){
 return addy2 === addy1;
}
console.log('\nThe 2 addresses point to the same object address: ' + areSame(address1, address2));

//4
console.log('\nExercise 4');
let post = {
    title: 'Nada',
    body: 'Some words at what not',
    author: 'That Guy',
    views: 14,
    comments:[
        {
        author: 'Mr Bitter',
        body: 'harrumph'
        },
        {
        author: 'Ms Convivial',
        body: 'Be nice'
        }
    ],
    isLive: true
}
console.log(post);

//5
console.log('\nExercise 5');
function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
let newPost = new Post('Red vs Blue', 'public loses', 'wisdom');
console.log(newPost);

//6
console.log('\nExercise 6');
let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minCost: 0, maxCost: 10},
    {label: '$$', tooltip: 'Moderate', minCost: 11, maxCost: 20},
    {label: '$', tooltip: 'Expensive', minCost: 21, maxCost: 50}
];