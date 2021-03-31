let age: number = 50;
let club: string = 'Real Madrid';
const isFamous: boolean = false;
let famous: boolean;

function add (num1: number, num2: number){
    return num1 + num2;
}

add(3, 23);
add(34, 65);


function doubleItAndConsole (num1: number): void {
    const result = num1 * 2;
    console.log(result);
}


const output = doubleItAndConsole(10);
console.log('output:', output);


function fullName (firstName: string, lastName:string): string {
    return firstName + ' ' + lastName;
}


const user: string = fullName('Ben','Duck');


let multiply2: (x: number, y: number) => number;

multiply2 = (x, y) => x * y;


const multiply = (x: number, y: number): number => x * y;
console.log(multiply(25, 6));




const numbers: number[] = [2, 3, 4, 5, 6];
numbers.push(22);

const friends: string[] = ['George', 'Jef', 'Abdul','Jamal'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if(friend.length > megaName.length){
        megaName = friend;
    }
    
}
console.log('Friends with the largest name', megaName);


let player: {
    club: string,
    salary: number
} = {
    club: 'Real Madrid',
    salary: 455666,
}

// object
const friend: {name: string, age: number} = {
    name: 'Samuel David',
    age: 54
}

friend.age = 65;

interface Player {
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messi: Player = {
    name: 'Messi',
    club: 'Barcelona',
    salary: 4555666,
    wife:'Chinki chameli',
    isPlaying: true
}

const ronaldo: Player = {
    name:'Ronaldo',
    club:'Real Madrid',
    salary:5666666,
    isPlaying: true
}


function getBonus (player: Player, friends: string[]){
    return player.salary * 0.1;
}

const poorPlayer = {age: 43, salary: 56666};

getBonus(messi, ['sam','tam'])

class Person {
    name: string;
    private _partner: string;
    readonly fatherName: string;
    constructor(name: string, father: string){
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName(): string{
        return this.name + '' + this._partner;
    }
}

const sam = new Person('Samuel', 'Clark');
console.log('name', sam.name, sam.fatherName);
const samName: string = sam.getName();
sam.name = 'Ben';