function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (numArr) {
	let output = 0;
	for(let i=0; i<numArr.length; i++){
		output += numArr[i];
	}
	return output;
}

function multiply (numArr) {
	let output = 1;
	if(numArr.length == 0)
		return 0;
	else {
		for(let i=0; i<numArr.length; i++){
			output *= numArr[i];
		}
		return output;
	}
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {
	if(num == 0 || num == 1)
		return 1;
	else {
		let output = 1;
		for(let i=num; i>0 ; i--){
			output *= i;
		}
		return output;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}