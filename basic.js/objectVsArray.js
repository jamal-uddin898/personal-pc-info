var friendsAge = [12, 35, 12, 56, 34,];
var ami = {
    age: 17,
    weight: 55,
    height: 5,
    colora: 'NavyBlue'
}
var lookingFor = 'age';
var  myAge = ami[lookingFor];
ami[lookingFor] = 23;
console.log(ami);