let number1, number2, operator;


function add(num1, num2) {
    return num1 + num2;
}

function mul(num1, num2) {
    return num1 * num2;  
}

function div(num1, num2) {
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
        typeof number1 === "number" &&
        typeof number2 === "number" &&
        operations.hasOwnProperty(operator)
    ) {
        return operations[operator](number1, number2);
    }

    return;
}
