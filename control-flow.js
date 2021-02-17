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