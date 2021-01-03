function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 == 0){
        return "Error";
    }
    else{
        return num1/num2;
    }
}

function operate(operator, num1, num2){
    switch(operator){
        case "plus":
        case "+":
            return add(num1, num2);
        case "minus":
        case "-":
            return subtract(num1, num2);
        case "multiply":
        case "*":
            return multiply(num1, num2);
        case "divide":
        case "/":
            return divide(num1, num2);
    }
}

let num1 = undefined;
let num2 = undefined;

const input = document.querySelector("#input");
const output = document.querySelector("#output");

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach(btn => btn.addEventListener("click", function(){
    if(btn.id == "point"){
        input.innerHTML += ".";
    }
    else
        input.innerHTML += btn.id;
}))

const del = document.querySelector("#delete");
del.addEventListener("click", function(){
    let strLen = input.innerHTML.length;
    input.innerHTML = input.innerHTML.substring(0, strLen-1);
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", function(){
    input.innerHTML = "";
    output.innerHTML = "";
    num1 = undefined;
    num2 = undefined;
})

const plus = document.querySelector("#plus");
plus.addEventListener("click", function(){
    if(num1 == undefined && num2 == undefined){ //set num1
        num1 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = input.innerHTML + "+";
        input.innerHTML = "";
    }
    else if(num1 != undefined && num2 == undefined){    //chained operation
        num2 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = +Number(operate("+", num1, num2)) + "+";
        num1 = +Number(operate("+", num1, num2));
        input.innerHTML = "";
    }
    else if(num1 != undefined && num2 != undefined){    //chain operation
        num2 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = +Number(operate("+", num1, num2)) + "+";
        num1 = +Number(operate("+", num1, num2));
        input.innerHTML = "";
    }
})

const minusBtn = document.querySelector("#minus");
minusBtn.addEventListener("click", function(){
    if(num1 == undefined && num2 == undefined){ //set num1
        num1 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = input.innerHTML + "-";
        input.innerHTML = "";
    }
    else if(num1 != undefined && num2 == undefined){    //chained operation
        num2 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = +Number(operate("-", num1, num2)) + "-";
        num1 = +Number(operate("-", num1, num2));
        input.innerHTML = "";
    }
    else if(num1 != undefined && num2 != undefined){    //chain operation
        num2 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = +Number(operate("-", num1, num2)) + "-";
        num1 = +Number(operate("-", num1, num2));
        input.innerHTML = "";
    }
});

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", function(){
    if(num1 == undefined && num2 == undefined){ //set num1
        num1 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = input.innerHTML + "*";
        input.innerHTML = "";
    }
    else if(num1 != undefined && num2 == undefined){    //chained operation
        num2 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = +Number(operate("*", num1, num2)) + "*";
        num1 = +Number(operate("*", num1, num2));
        input.innerHTML = "";
    }
    else if(num1 != undefined && num2 != undefined && !output.innerHTML.includes("*")){    //chain operation
        output.innerHTML += "*"; 
    }
    else if(num1 != undefined && num2 != undefined){    //chain operation
        num2 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = +Number(operate("*", num1, num2)) + "*";
        num1 = +Number(operate("*", num1, num2));
        input.innerHTML = "";
    }
});

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", function(){
    if(num1 == undefined && num2 == undefined){ //set num1
        num1 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = input.innerHTML + "/";
        input.innerHTML = "";
    }
    else if(num1 != undefined && num2 == undefined){    //chained operation
        num2 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = +Number(operate("/", num1, num2)) + "/";
        num1 = +Number(operate("/", num1, num2));
        input.innerHTML = "";
    }
    else if(num1 != undefined && num2 != undefined && !output.innerHTML.includes("/")){    //chain operation
        output.innerHTML += "/"; 
    }
    else if(num1 != undefined && num2 != undefined){    //chain operation
        num2 = +Number(input.innerHTML).toFixed(4);
        output.innerHTML = +Number(operate("/", num1, num2)) + "/";
        num1 = +Number(operate("/", num1, num2));
        input.innerHTML = "";
    }
});

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", function(){
    let outputLen = output.innerHTML.length;
    num2 = +Number(input.innerHTML).toFixed(4); //num1 already assigned
    let operator = output.innerHTML.substring(outputLen-1, outputLen);
    output.innerHTML = +Number(operate(operator, num1, num2));
    num1 = +Number(operate(operator, num1, num2));
    input.innerHTML = "";
});
