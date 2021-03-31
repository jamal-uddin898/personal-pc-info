// array destructuring
const numbers = [54, 92, 45,67,33];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [65, 78];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1){
    return [num1, num1 + 5];
}

const [box1, box2]= boxify(8);
// console.log(box1, box2);

// object destructuring
const person =  {id: 2, name: 'Jamal', age: 21, money: 67};
const {name, age} = person;
// console.log(name, age);

// create object shortcut
const one = 25;
const two = 45;
// const obj = {one: one, two: two};
const obj2 = {one, two};
console.log(obj2);

//  create new array by using three dots
//  numbers.push(11); ager arrayr sathe 11 add korbe
const newNumber = [...numbers, 22];
console.log(newNumber);