const displayText = document.querySelector(".display-text");
const clearBtn = document.querySelector("#clear-btn")
const percentButton = document.querySelector("#percent-btn")
const backButton = document.querySelector("#back-btn")

// Operator Reference
const divisionButton = document.querySelector("#division-btn");
const multiplyButton = document.querySelector("#multiply-btn");
const subtractButton = document.querySelector("#subtract-btn");
const additionButton = document.querySelector("#addition-btn");

const equalButton = document.querySelector(".equal-btn");
const decimalButton = document.querySelector(".decimal-btn");

//Number Reference

const zeroButton = document.querySelector("#zero-btn");
const oneButton = document.querySelector("#one-btn");
const twoButton = document.querySelector("#two-btn");
const threeButton = document.querySelector("#three-btn");
const fourButton = document.querySelector("#four-btn");
const fiveButton = document.querySelector("#five-btn");
const sixButton = document.querySelector("#six-btn");
const sevenButton = document.querySelector("#seven-btn");
const eightButton = document.querySelector("#eight-btn");
const nineButton = document.querySelector("#nine-btn");


//Variables to store the operands and operator of a Math operations.
let num1 = "";
let num2 = "";
let operator = "";


// Functions for basic Math operations.
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b; 
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if(b === 0) {
        return "Cannot be divided by 0"
    };

    return a / b;
}

// Functions  that invokes basic Math operations 
function operate(num1, num2, operator) {

    switch(operator) {
        case "+":
            return add(num1, num2);
     
        case "−":
            return subtract(num1, num2);
     
        case "×":
            return multiply(num1, num2);
     
        case "÷":
            return divide(num1, num2);
        default:
            return "Invalid Operator";
    }
}

//Attached Eventlisteners to the number buttons variables.
oneButton.addEventListener("click", () => {
    displayText.textContent = 1;
})  
twoButton.addEventListener("click", () => {
    displayText.textContent = 2;
})  
threeButton.addEventListener("click", () => {
    displayText.textContent = 3;
})  
fourButton.addEventListener("click", () => {
    displayText.textContent = 4;
})  
fiveButton.addEventListener("click", () => {
    displayText.textContent = 5;
})  
sixButton.addEventListener("click", () => {
    displayText.textContent = 6;
})  
sevenButton.addEventListener("click", () => {
    displayText.textContent = 7;
})  
eightButton.addEventListener("click", () => {
    displayText.textContent = 8;
})  
nineButton.addEventListener("click", () => {
    displayText.textContent = 9;
})  

