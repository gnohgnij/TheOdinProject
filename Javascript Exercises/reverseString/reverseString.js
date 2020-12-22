const reverseString = function() {
    let word = "";
    let wordArray = word.split("");
    let wordLen = word.length;
    for(let i=0; i<wordLen/2; i++){
        let temp = wordArray[i];
        wordArray[i] = wordArray[wordLen-i-1];
        wordArray[wordLen-i-1] = temp;
    }
    return wordArray.join('');
}

module.exports = reverseString
