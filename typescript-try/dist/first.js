"use strict";
let age = 50;
let club = 'Real Madrid';
const isFamous = false;
let famous;
function add(num1, num2) {
    return num1 + num2;
}
add(3, 23);
add(34, 65);
function doubleItAndConsole(num1) {
    const result = num1 * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output:', output);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Ben', 'Duck');
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
const numbers = [2, 3, 4, 5, 6];
numbers.push(22);
const friends = ['George', 'Jef', 'Abdul', 'Jamal'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friends with the largest name', megaName);
let player = {
    club: 'Real Madrid',
    salary: 455666,
};
// object
const friend = {
    name: 'Samuel David',
    age: 54
};
friend.age = 65;
const messi = {
    name: 'Messi',
    club: 'Barcelona',
    salary: 4555666,
    wife: 'Chinki chameli',
    isPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'Real Madrid',
    salary: 5666666,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
const poorPlayer = { age: 43, salary: 56666 };
getBonus(messi, ['sam', 'tam']);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + '' + this._partner;
    }
}
const sam = new Person('Samuel', 'Clark');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Ben';
