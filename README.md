# JS-D5-ASSIGNMENT
## Simple Calculator
## CODE:
### Html file:
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <h2 style="text-align: center;">Calculator</h2>
    <div class="align">
        <div class="main_box">
            <div id="display" class="display">
                <!-- Display area -->
            </div>
            <div class="all_digits">
                <div class="digit" id="ac">AC</div>
                <div class="digit" id="clear">C</div>
                <div class="digit" id="decimal">.</div>
                <div class="digit" id="divide">/</div>
                <div class="digit" id="seven">7</div>
                <div class="digit" id="eight">8</div>
                <div class="digit" id="nine">9</div>
                <div class="digit" id="multiply">*</div>
                <div class="digit" id="four">4</div>
                <div class="digit" id="five">5</div>
                <div class="digit" id="six">6</div>
                <div class="digit" id="subtract">-</div>
                <div class="digit" id="one">1</div>
                <div class="digit" id="two">2</div>
                <div class="digit" id="three">3</div>
                <div class="digit" id="add">+</div>
                <div class="digit" id="percent">%</div>
                <div class="digit" id="zero">0</div>
                <div class="digit" id="equals" style="width: 80px;">=</div>
            </div>
        </div>
    </div>
    <script src="./script.js"></script>
</body>

</html>
```
### Javascript file
```
let display_digit = document.getElementById("display");
let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function display(num) {
    currentInput += String(num);
    display_digit.innerHTML = currentInput;
}

function handleOperator(op) {
    if (operator === '') {
        operand1 = currentInput;
        operator = op;
        currentInput = '';
    } else {
        operand2 = currentInput;
        calculate();
        operator = op;
        operand1 = display_digit.innerHTML;
        currentInput = '';
    }
}

function calculate() {
    if (operator && operand1 !== '' && currentInput !== '') {
        operand2 = currentInput;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(operand1) + parseFloat(operand2);
                break;
            case '-':
                result = parseFloat(operand1) - parseFloat(operand2);
                break;
            case '*':
                result = parseFloat(operand1) * parseFloat(operand2);
                break;
            case '/':
                result = parseFloat(operand1) / parseFloat(operand2);
                break;
            case '%':
                result = parseFloat(operand1) % parseFloat(operand2);
                break;
        }
        display_digit.innerHTML = result;
        currentInput = '';
        operand1 = '';
        operator = '';
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    display_digit.innerHTML = '0';
}

const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (!isNaN(buttonText)) {
            display(buttonText);
        } else if (buttonText === '.') {
            if (!currentInput.includes('.')) {
                display(buttonText);
            }
        } else if (buttonText === 'AC') {
            clearDisplay();
        } else if (buttonText === 'C') {
            currentInput = currentInput.slice(0, -1);
            display_digit.innerHTML = currentInput || '0';
        } else if (buttonText === '=') {
            calculate();
        } else {
            handleOperator(buttonText);
        }
    });
});

```
## OUTPUT:
![image](https://github.com/gpavithra673/JavaScript_Day5_assignment/assets/93427264/cc63a77c-a21f-47fa-b5a1-ad441e1cea9c)
