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
