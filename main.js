let number1 = '';
let number2 = '';
let operator = '';
let currentInput = 'number1'; // Tracks whether we're entering number1, operator, or number2

function add(num1, num2) {
    return num1 + num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    if (num2 === 0) return 'Error: Divide by zero';
    return num1 / num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

function operate(number1, number2, operator) {
    const operations = {
        '+': add,
        '-': sub,
        '*': mul,
        '/': div,
        '%': modulo
    };
    if (
        typeof number1 === 'number' &&
        typeof number2 === 'number' &&
        operations.hasOwnProperty(operator)
    ) {
        return operations[operator](number1, number2);
    }
    return 'Error';
}

function display() {
    const dis = document.getElementsByClassName('display')[0];
    const btns = document.querySelectorAll('button');
    const btnNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const btnChar = ['+', '-', 'x', '%', '÷'];

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.innerText;

            if (text === 'C') {
                number1 = '';
                number2 = '';
                operator = '';
                currentInput = 'number1';
                dis.textContent = '';
            } else if (text === '<<') {
                if (currentInput === 'number1') {
                    number1 = number1.slice(0, -1);
                    dis.textContent = number1 || '';
                } else if (currentInput === 'operator') {
                    operator = '';
                    currentInput = 'number1';
                    dis.textContent = number1;
                } else if (currentInput === 'number2') {
                    number2 = number2.slice(0, -1);
                    dis.textContent = number1 + operator + number2;
                }
            } else if (text === '=') {
                if (number1 && number2 && operator) {
                    const op = operator === 'x' ? '*' : operator === '÷' ? '/' : operator;
                    const result = operate(parseFloat(number1), parseFloat(number2), op);
                    dis.textContent = result;
                    number1 = result.toString();
                    number2 = '';
                    operator = '';
                    currentInput = 'number1';
                }
            } else if (btnNum.includes(text)) {
                if (currentInput === 'number1') {
                    if (text === '.' && number1.includes('.')) return; // Prevent multiple decimals
                    number1 += text;
                    dis.textContent = number1;
                } else if (currentInput === 'number2') {
                    if (text === '.' && number2.includes('.')) return; // Prevent multiple decimals
                    number2 += text;
                    dis.textContent = number1 + operator + number2;
                }
            } else if (btnChar.includes(text)) {
                if (number1 && !number2) {
                    operator = text;
                    currentInput = 'number2';
                    dis.textContent = number1 + operator;
                } else if (number1 && number2 && operator) {
                    const op = operator === 'x' ? '*' : operator === '÷' ? '/' : operator;
                    const result = operate(parseFloat(number1), parseFloat(number2), op);
                    number1 = result.toString();
                    number2 = '';
                    operator = text;
                    currentInput = 'number2';
                    dis.textContent = number1 + operator;
                }
            }
            console.log({ number1, operator, number2, currentInput });
        });
    });
}

display();