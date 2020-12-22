const palindromes = function(word) {
    word = word.toLowerCase();
    let wordArr = word.split('');
    let wordLen = wordArr.length;
    let i=0;
    while(wordArr[i] != undefined){
        if(wordArr[i] == '.' || wordArr[i] == '!' || wordArr[i] == ',' || wordArr[i] == ' '){
            for(let j=i; j<wordLen-1; j++){
                wordArr[j] = word[j+1];
            }
            wordArr.pop();
            i -= 1;
        }
        i++;
    }
    wordLen = wordArr.length;
    for(let x=0; x<wordLen/2; x++){
        if(wordArr[x] == wordArr[wordLen-1-x])
            continue;
        else
            return false;
    }
    return true;
}

module.exports = palindromes
