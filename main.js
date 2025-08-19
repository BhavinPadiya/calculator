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
    number1 = undefined; 
    number2 = undefined;
    operator = undefined;
    let dis = document.getElementsByClassName("display")[0];
    const btns = document.querySelectorAll("button");
    const btnNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const btnchar = ['+', '-', '*', '%','/']

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            if(btnNum.includes(btn.innerText)){
                if (number1 === undefined) {
                    number1 = parseInt(btn.innerText);
                    dis.textContent = number1;
                }else{
                    number1 = parseInt((number1.toString())+btn.innerText);
                    dis.textContent = number1;
                }
            }else if (btnchar.includes(btn.innerText) && number1 !== undefined ) {
                operator = btn.innerText;
                dis.textContent += operator;
            }else if (btnchar.includes(btn.innerText) && number1 === undefined) {
                number1 = 0;
                dis.textContent += operator;
            }else if (number1 !== undefined && operator !== undefined && btnNum.includes(btn.innerText)) {
                if (number2 === undefined) {
                    number2 = parseInt(btn.innerText);
                    dis.textContent += number2;
                }else{
                    number2 = parseInt((number2.toString())+(operator)+btn.innerText);
                    dis.textContent += number2;
                }
            }
        });
    });
}

display();