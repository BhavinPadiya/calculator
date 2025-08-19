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

function display() {
    let dis = document.getElementsByClassName("display")[0];
    const buttons = document.querySelectorAll("button");
    const btnNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            
        });
    });
}