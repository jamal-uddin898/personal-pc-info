const number = [1,2, 4, 5, 6, 7,];
const friends = ['Rafiq', 'Jabbar', 'Salam'];
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'mobile', price: 100},
    {id: 3, name: 'watch', price: 25},
    {id: 4, name: 'tablet', price: 70}
];

// map
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);
const prices2 = products.map(pd => {
    // do some work
    return pd.price;
})
console.log(prices2);

// forEach
products.forEach(product => console.log(product.name));

// filter
const cheaper = products.filter(pd => pd.price < 100);
// console.log(cheaper);
// remove an item using filter
// != not Equal sign
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);

// find
const hasWatch = products.find(pd=> pd.name === 'watch')
console.log(hasWatch);

// reduce

// includes

// push

// pop

// length

// indexOf