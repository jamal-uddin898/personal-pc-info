// variable: let, const
let money = 20;
money = 12;
const name = 'Kudus';

let isConfident = false;

const person = {
    name: 'Happy',
    age:21,
    city: 'Dhaka'
}

const statement = `this person ${name} with age ${person.age}`


// condition
if(money > 20 && age >= 45){

}
else{

}

// array
const numbers = [54, 55, 67];
const respected = ['Motiur', 'Jahangir'];
const products = [{name: 'laptop', price: 500},{name: 'mobile', price:200}, {name: 'watch', price: 100}];

// loop: for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    
}

// function: regular, arrow
function add (num1, num2){
    return num1 + num2;
}

const result = add (12, 54);

// arrow

const fiveTimes = num => num * 5;
const add2 = (num1, num2) => num1 + num2;
const doMath = (x, y) => {
    const sum = x + y;
    return sum * 2;
}