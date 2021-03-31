const money = 150;
const active = false;
let food;
if(money > 100){
    food = 'biriyani';
}
else{
    food = 'alur borta';
}
//  ternary 
// condition ? true value : false value
let food2 = money > 100 ? 'biriyani' : 'alur borta';

let cssClass;
if(active === true){
    cssClass = 'active';
}
else{
    cssClass = 'inactive';
}
const cssClass2 = active ? 'active' : 'inactive';
//  function call shortcut alternative
// active ? displayUser() : hideUser();

// 
const x = active && 5;
// console.log(x);

// string to number
const number = +'45';

// number to string
const numText = 45 + '';
console.log(numText);

// default parameter
function add (num1, num2 = 5){
    return num1 + num2;
}
add(45,15)