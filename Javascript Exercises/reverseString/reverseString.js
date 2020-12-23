const reverseString = function(str) {
    let wordArray = str.split("");
    let wordLen = str.length;
    for(let i=0; i<wordLen/2; i++){
        let temp = wordArray[i];
        wordArray[i] = wordArray[wordLen-i-1];
        wordArray[wordLen-i-1] = temp;
    }
    return wordArray.join('');
}

module.exports = reverseString
