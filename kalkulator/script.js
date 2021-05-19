'use strict';
// kalkulator na więcej niż dwie liczby
/*
let input = undefined;
let currentOperator = '';

let calculatorValue = function (operator) {
    if (input == undefined) {
        input = document.getElementById('calculatorInput').value;
    } else {
        let tempInput = document.getElementById('calculatorInput').value;
        input = calculator(currentOperator, tempInput)
    }
    currentOperator = operator
    document.getElementById('calculatorInput').value = '';

}

let calculator = function (operator, value) {
    // let currentInput = document.getElementById('calculatorInput').value;
    let result = 0;
    if (operator == '+') {
        result = (+value) + (+input)
    }
    document.getElementById('calculatorInput').value = result;
    if (operator == '-') {
        result = (input) - (value)
    }
    document.getElementById('calculatorInput').value = result;
    if (operator == '*') {
        result = (value) * (input)
    }
    document.getElementById('calculatorInput').value = result;
    if (operator == '/') {
        result = (input) / (value)
    }
    return result;
}

let calculatorResult = function () {
    let currentInput = document.getElementById('calculatorInput').value;
    let result = calculator(currentOperator, currentInput);
    document.getElementById('calculatorInput').value = result;
    input = undefined
}
*/


// kalkulator na dwie liczby

let input = 0
let currentOperator = '';

let calculatorValue = function (operator) {
    input = document.getElementById('calculatorInput').value;
    currentOperator = operator
    document.getElementById('calculatorInput').value = '';
}

let calculatorResult = function () {
    let currentInput = document.getElementById('calculatorInput').value;
    let result = 0;
    if (currentOperator == '+') {
        result = (+currentInput) + (+input)
    }
    document.getElementById('calculatorInput').value = result;
    if (currentOperator == '-') {
        result = (input) - (currentInput)
    }
    document.getElementById('calculatorInput').value = result;
    if (currentOperator == '*') {
        result = (currentInput) * (input)
    }
    document.getElementById('calculatorInput').value = result;
    if (currentOperator == '/') {
        result = (input) / (currentInput)
    }
    document.getElementById('calculatorInput').value = result;
}










