"use strict";

// Место для первой задачи
function sayHello(name) {
    return 'Salut ' + name + '!';
}
console.log(sayHello('Rashid'));

// Место для второй задачи
function returnNeighboringNumbers(number) {
    let arr = [];
    for(let i = -1; i<2; i++){
        arr[i+1] = number + i;
    }
    return arr;
}
console.log(returnNeighboringNumbers(101));

// Место для третьей задачи
function getMathResult(num1, num2) {
    if(typeof(num1) != 'number'){
        return null;
    }

    let result = num1;

    if(typeof(num2) != 'number' || num2 <= 0) {
        return num1;
    }

    for(let i = 2; i <= num2; i++){       
        result += '---' + num1*i;       
    }

    return result;
}
console.log(getMathResult(10, 5));