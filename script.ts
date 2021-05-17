let currentOperation : string = ''
let operand1 : number
let operand2 : number
let isNew : boolean = true
let isOp2Good: boolean = false

function  getInput(input : string) {
    let output = <HTMLInputElement>document.getElementById("output")
    let currentOperationOutput = <HTMLSpanElement>document.getElementById("currentOperation")

    if (!isNaN(+input)) {

        if (isNew) {
            output.value = ''
            isNew = false
        }

        output.value += input

        if (currentOperation == '') {
            operand1 = +output.value
        }
        else {
            isOp2Good = true;
            operand2 = +output.value
        }
    }
    else {
        if (currentOperation == '') {
            isNew = true
        }
        else {
            if (isOp2Good) {
                solve()
            }
        }
        currentOperation = input
        currentOperationOutput.innerHTML = currentOperation
    }
}

function solve() {
    let output = <HTMLInputElement>document.getElementById("output")
    let result : number = 0
    let history = <HTMLParagraphElement>document.getElementById("history")
    let currentOperationOutput = <HTMLSpanElement>document.getElementById("currentOperation")

    if (currentOperation != '' && isOp2Good) {
        if (currentOperation == '+') {
            result = operand1 + operand2
        }
        else if (currentOperation == '-') {
            result = operand1 - operand2
        }
        else if (currentOperation == '/') {
            result = operand1 / operand2
        }
        else if (currentOperation == '*') {
            result = operand1 * operand2
        }
        else if (currentOperation == '%') {
            result = operand1 % operand2
        }

        history.innerHTML += `${operand1} ${currentOperation} ${operand2} = ${result} <br/>`
        output.value = result.toString()
        currentOperation = ''
        currentOperationOutput.innerHTML = ''
        operand1 = +output.value
        isNew = true
        isOp2Good = false;
    }
} 