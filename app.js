
const display = document.querySelector('#display')
let number1;
let num2;
let operator;

function addNums(num1, num2){
    return Math.round(num1 + num2)
}

function minusNums(num1, num2){
    return Math.round(num1 - num2)
}

function multiplyNums(num1, num2){
    return Math.round(num1 * num2)
}

function divideNums(num1, num2){
    if (num1 == 0 || num2 == 0){
        return 'Error'
    } else {
        return Math.round(num1 / num2)
    }
}

function operateCalculator(num1,oper, num2){
    let result;
    if (oper == '+'){
        result = addNums(num1,num2);
    } else if (oper == '-'){
        result = minusNums(num1,num2);
    } else if (oper == '*'){
        result = multiplyNums(num1,num2);
    } else if (oper == '/'){
        result = divideNums(num1,num2);
    }
    return result;
}



function appendToDisplay(input){
     display.value += input;   
}


function clearDisplay(){
    display.value = '';
}

function calculate(){
    numbers = display.value.split(' ');
    firstNum = Number(numbers[0]);
    operatorSymbol = numbers[1];
    secondNum = Number(numbers[2]);
    let finalResult = operateCalculator(firstNum,operatorSymbol,secondNum);
    display.value = finalResult;



}