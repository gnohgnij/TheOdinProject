const caesar = function(toCode, shift) {
    let output = '';
    for(let i=0; i<toCode.length; i++){
        if(toCode.charCodeAt(i) > 64 && toCode.charCodeAt(i) < 91 || toCode.charCodeAt(i) > 96 && toCode.charCodeAt(i) < 123){
            if(toCode.charAt(i) == toCode.charAt(i).toUpperCase()){
                let mod = (toCode.charCodeAt(i) + shift - 65) % 26;
                output += String.fromCharCode(mod + 65);
            }
            else if (toCode.charAt(i) == toCode.charAt(i).toLowerCase()){
                let mod = (toCode.charCodeAt(i) + shift - 97) % 26;
                output += String.fromCharCode(mod + 97);
            }
        }
        else
            output += String.fromCharCode(toCode.charCodeAt(i));
    }
    return output;
}

module.exports = caesar
