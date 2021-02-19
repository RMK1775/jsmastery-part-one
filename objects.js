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
for(let key in circle3)
    console.log(key, circle3[key]);

console.log(circle3.constructor);
console.log(circle.constructor);
