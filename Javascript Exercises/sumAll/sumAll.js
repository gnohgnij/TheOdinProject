const sumAll = function(num1, num2) {
    if(num1<0 || num2<0)
        return 'ERROR';
    else if(typeof num1 != 'number' || typeof num2 != 'number')
        return 'ERROR';
    
    else{
        let out = 0
        if(num1 > num2){
            let temp = num2;
            num2 = num1;
            num1 = temp;
        }
        for(let i=num1; i<=num2; i++){
            out += i;
        }
        return out;
    }
}

module.exports = sumAll
