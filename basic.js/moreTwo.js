function add (firstNum, secondNum, thirdNum){
    var sum = firstNum + secondNum + thirdNum;
    return sum;
}
function add2 (number){
    var sum = number[0] + number[1] + number[3];
    return sum;
}
function add3 (numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
        if(numbers[i] < 0){
            
            sum = sum + numbers[i];
        }
       

    }
    return sum;
}