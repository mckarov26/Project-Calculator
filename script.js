const displayText = document.querySelector(".display-text");
const clearButton = document.querySelector("#clear-btn")
const percentButton = document.querySelector("#percent-btn")
const backButton = document.querySelector("#back-btn")

const equalButton = document.querySelector(".equal-btn");
const decimalButton = document.querySelector(".decimal-btn");

// Operator Reference
const operatorButtons = document.querySelectorAll(".operator-btn");

// const divisionButton = document.querySelector("#division-btn");
// const multiplyButton = document.querySelector("#multiply-btn");
// const subtractButton = document.querySelector("#subtract-btn");
// const additionButton = document.querySelector("#addition-btn");

    
// Number Reference

const numButtons = document.querySelectorAll(".num-btns");

// const zeroButton = document.querySelector("#zero-btn");
// const oneButton = document.querySelector("#one-btn");
// const twoButton = document.querySelector("#two-btn");
// const threeButton = document.querySelector("#three-btn");
// const fourButton = document.querySelector("#four-btn");
// const fiveButton = document.querySelector("#five-btn");
// const sixButton = document.querySelector("#six-btn");
// const sevenButton = document.querySelector("#seven-btn");
// const eightButton = document.querySelector("#eight-btn");
// const nineButton = document.querySelector("#nine-btn");






//Variables to store the operands and operator of a Math 
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


//Event Listener for updating display and storing values to num1 and num2 Variable.
numButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (num1 === "" || operator === "") {
            num1 += button.textContent;
            
        } else if (num1 !== "" && operator !== ""  ) {
            num2 += button.textContent;
        }

        
       displayText.textContent += button.textContent;

       
    })
})

//Event Listener for updating display and storing values to operator Variable.
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (operator === "") {
            operator = button.textContent;

            displayText.textContent += button.textContent;

        } else if (operator !== "") {
            button.disabled = true;
        }                      
        
    })
})

//Event Listener for operating basic Math and showing the result to the display container.
equalButton.addEventListener("click", () => {
    displayText.textContent = "";
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = operate(num1, num2, operator);
    displayText.textContent = result.toString();

  
})



//Event Listener for clearing the display container.
clearButton.addEventListener("click", () => {
    displayText.textContent = "";
})







