const getTheTitles = function(books) {
    let output = [];
    for(let i=0; i<books.length; i++){
        output[output.length] = books[i].title;
    }
    return output;
}

module.exports = getTheTitles;
