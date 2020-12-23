const repeatString = function(str, num) {
    if(num<0)
        return 'ERROR';
    else {
        let out = '';
        for(let i=0; i<num; i++){
            out += str;
        }
        return out;
    }
}

module.exports = repeatString
