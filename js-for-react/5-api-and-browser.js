// JSON
const person = {
    name: 'Ava',
    age: 43,
    dist: 'dhaka',
    salary: 20000
};

// JSON convert back and forth
const data = JSON.stringify(person);
const dataPersed = JSON.parse(data);
// console.log(dataPersed.name);
// API fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));


// local  storage
// localStorage.setItem('userid',1234);
const userId = localStorage.getItem('userid');
// console.log(userId);
localStorage.setItem('person',JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const persedPerson = JSON.parse(storedPerson);
console.log(persedPerson.age);

const keys = Object.keys(persedPerson);
console.log(keys);

const values = Object.values(persedPerson);
console.log(values);