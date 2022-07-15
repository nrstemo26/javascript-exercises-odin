const getTheTitles = function(arr) {
    let bookTitles = [];

    for(let el of arr){
        bookTitles.push(el.title)
    }

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
