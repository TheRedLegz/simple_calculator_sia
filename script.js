"use strict";
var currentOperation = '';
var operand1;
var operand2;
var isNew = true;
var isOp2Good = false;
function getInput(input) {
    var output = document.getElementById("output");
    var currentOperationOutput = document.getElementById("currentOperation");
    if (!isNaN(+input)) {
        if (isNew) {
            output.value = '';
            isNew = false;
        }
        output.value += input;
        if (currentOperation == '') {
            operand1 = +output.value;
        }
        else {
            isOp2Good = true;
            operand2 = +output.value;
        }
    }
    else {
        if (currentOperation == '') {
            isNew = true;
        }
        else {
            if (isOp2Good) {
                solve();
            }
        }
        currentOperation = input;
        currentOperationOutput.innerHTML = currentOperation;
    }
}
function solve() {
    var output = document.getElementById("output");
    var result = 0;
    var history = document.getElementById("history");
    var currentOperationOutput = document.getElementById("currentOperation");
    if (currentOperation != '' && isOp2Good) {
        if (currentOperation == '+') {
            result = operand1 + operand2;
        }
        else if (currentOperation == '-') {
            result = operand1 - operand2;
        }
        else if (currentOperation == '/') {
            result = operand1 / operand2;
        }
        else if (currentOperation == '*') {
            result = operand1 * operand2;
        }
        else if (currentOperation == '%') {
            result = operand1 % operand2;
        }
        history.innerHTML += operand1 + " " + currentOperation + " " + operand2 + " = " + result + " <br/>";
        output.value = result.toString();
        currentOperation = '';
        currentOperationOutput.innerHTML = '';
        operand1 = +output.value;
        isNew = true;
        isOp2Good = false;
    }
}
