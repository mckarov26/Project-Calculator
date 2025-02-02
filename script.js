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


// This variables are very important!
// This is to control enabling/disabling of the % button through out the operation!
let numbutton = false;
let optrbutton = false;

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


        disableButton(true);
        
        // This is to disable all buttons except clear to reset.
        clearButton.style["background-color"] = "#10B981";
        clearButton.style["color"] = "white";    
       
        return "Cannot be divided by 0"       
    };

    return a / b;
}

    


// Functions  that invokes basic Math operations 
function operate(num1, num2, operator) {

    switch(operator) {
        case "+":
            return add(num1, num2);
     
        case "-":
            return subtract(num1, num2);
     
        case "×":
            return multiply(num1, num2);
     
        case "÷":
            return divide(num1, num2);

        case "%":
            return percent(num1, num2);
     }
}

// This Function is to disable/enable all buttons except clear and equal to reset
// This function will be used in equalButton and percentButton event listener

function disableButtonExceptEqual(boolean) {
    percentButton.disabled = boolean;
        
        numButtons.forEach(button => {
            button.disabled = boolean;
        })
        operatorButtons.forEach(button => {
            button.disabled = boolean;
        })
}

// This Function is to disable/enable all buttons except clear to reset.
// This function will be used in clearButton event listener and divide function.
function disableButton(boolean) {
    equalButton.disabled = boolean;
    percentButton.disabled = boolean;
    backButton.disabled = boolean;

    numButtons.forEach(button => {
        button.disabled = boolean;
    })
    operatorButtons.forEach(button => {
        button.disabled = boolean;
    })
}



// function for changing color when "mouseover" hover in clear button.
function hoverInColor() {
    clearButton.style.backgroundColor = "hsl(160, 84%, 50%)";
    clearButton.style.color = "white";
}


// function for changing color when "mouseout" hover in clear button
function hoverOutColor() {
    clearButton.style.backgroundColor = "#10B981";
    clearButton.style.color = "white";
}
// function to operate percentage math operations.
function divideHundred(operator, percentageResult, num1) {
    switch(operator) {
        case "+":
            return percentageResult + num1;
        case "-":
            return percentageResult - num1;
        case "×":
            return percentageResult * num1;
        case "÷":
            return percentageResult / num1;
    }
}

// This Event listener is to ensure the decimal button is click only once on each operands!
decimalButton.addEventListener("click", () => {

        if (num1 === "" || num1 !== "") {
            decimalButton.disabled = true;
        } else if (num1 !== "" && operator !== "") {
            decimalButton.disabled = true;
        }
        
   
    
})

//Event Listener for updating display and storing values to num1 and num2 Variable.
numButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (num1 === "" || num1 === "-" || operator === "") {
            num1 += button.textContent;

            operatorButtons.forEach(button => {
                button.disabled = false;
            })
           
        } else if (num1 !== "" && operator !== ""  ) {
            num2 += button.textContent;
            numbutton = true;
            optrbutton = true;
            
        }

        
       displayText.textContent += button.textContent;

       
    })
})

//Event Listener for updating display and storing values to operator Variable.
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {

        // This is to ensure that decimal button is enabled after operator buttons is clicked!
        decimalButton.disabled = false;


        numbutton = false;
        optrbutton = false;


        // This will ensure that user can used negative sign ONLY before num1
        // disable other operator buttons before num1
        if (button.textContent !== "-" && num1 === "") {
            button.disabled = true;
            

        }
        // // And to disable other buttons when negative button is click
        else if (button.textContent === "-" && num1 === "") {

           operatorButtons.forEach(button => {
            button.disabled = true;
           })

            
            num1 +=  button.textContent;
            displayText.textContent += button.textContent;

        } else if (operator === "") {

            operator = button.textContent;
            optrbutton = true;
            displayText.textContent += button.textContent;

        } else if (operator !== "") {
            button.disabled = true;
            
           

        }                      
        
    })
})

//Event Listener for operating basic Math and showing the result to the display container.
equalButton.addEventListener("click", () => {

    numbutton = false;
    optrbutton = false;

    disableButtonExceptEqual(false)
    // This is to give result if only num1 exist with %
    if (num1.toString().includes("%")) {
        let result1 = parseFloat(num1) / 100;
        displayText.textContent = result1.toString();



        operator = "";
        num2 = "";
        num1 = parseFloat(result1);

   // This is to give result if num1 exist and num2 exist with %.

    } else if (num1 !== "" && operator !== "" && num2.toString().includes("%")) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        let percentageResult = (num1 * num2) / 100 ;
        let result = divideHundred(operator, percentageResult, num1)
        operator = "";
        num2 = "";
        num1 = parseFloat(result);



        displayText.textContent = result.toString();

       

    
    } 
   



    else if (num1 !== "" && operator !== "" && num2 !== "") {
        displayText.textContent = "";
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

    
        let result2 = operate(num1, num2, operator);
        
        displayText.textContent = result2.toString();
        

        operator = "";
        num2 = "";
        num1 = parseFloat(result2);


        if (displayText.textContent === "Cannot be divided by 0") {
            clearButton.addEventListener("mouseover", hoverInColor);
            clearButton.addEventListener("mouseout", hoverOutColor);
        }

   

        
    }
})

 


//Event Listener for clearing the display container.
clearButton.addEventListener("click", () => {

    numbutton = false;
    optrbutton = false;

    displayText.textContent = "";

    num1 = "";
    num2 = "";
    operator = "";

    disableButton(false);


    // This is to ensure that it will revert to its default color when click
    clearButton.style["background-color"] = "";
    clearButton.style["color"] = "";


    // This is to ensure that this event listeners won't apply in the future after click the clear button
    clearButton.removeEventListener("mouseover", hoverInColor);
    clearButton.removeEventListener("mouseout", hoverOutColor);
  
})

// Event Listener for clicking the Percent Button
// This is to disable some buttons being click after clicking the percent
// This is to avoid unexpected math operation. 

percentButton.addEventListener("click", () => {
 
        //This is to make sure that percent button won't be click if negative signs shows without number.
    if(num1 === "-") {
        numbutton = false;
        optrbutton = false;    
    }

    else if ( numbutton && optrbutton)  {
        num2 += percentButton.textContent;
        displayText.textContent += percentButton.textContent;
        disableButtonExceptEqual(true);
    
    } 

    else if ( num1 !== "" && operator === "" && num2 === "") {
        num1 += percentButton.textContent;
        displayText.textContent += percentButton.textContent;
        
        disableButtonExceptEqual(true);
        

    }
    

})



// Event Listener for click backButton
backButton.addEventListener("click", () => {
    disableButtonExceptEqual(false);


    // This is to enable/disable decimal button to prevent multiple decimals in num1 or num2.
    if (num2.includes(".")) {
        decimalButton.disabled = false;
    } else if (num1.includes(".") && operator !== "" ) {
        decimalButton.disabled = true;
    } else if (num1 !== "") {
        decimalButton.disableButton = false;
    }
    
    // numbutton = false;
    // optrbutton = false;

    // This is enable/disable percent button to prevent multiple percent in num1 or num2.
    if (num1 !== "" && operator !== "" && num2 !== "") {
        numbutton = true;
        optrbutton = true;
    }

    // This code below will help me convert number values to string.
    //This will be used for checking if there is a % string inside the displaytext.
    //And to make sure I can control the limit of used of "%" inside num1 and num2
    num1 = num1.toString();
    num2 = num2.toString();

    if (num2.includes("%")) {
        num2 = num2.replace("%", "");
        displayText.textContent = `${num1} ${operator} ${num2}`;
        

    } else if (num1.includes("%", "")) {
        num1 = num1.replace("%", "")
        displayText.textContent = `${num1}`;
        

    } else if (num2 !== "") {
        num2 = "";
        displayText.textContent = `${num1} ${operator}`;
        numbutton = false;
        optrbutton = false;
    } else if (operator !== "") {
        operator = "";
        displayText.textContent = `${num1}`;
    } else if (num1 !== "") {
        num1 = "";
        displayText.textContent = "";
    }
})






