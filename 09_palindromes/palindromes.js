const palindromes = function (str) {
    //let regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    strippedStr = str.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, "");
   // let strippedStr = str.replace(regex, '')
    console.log(strippedStr);

    for(let i = 0; i< Math.floor(strippedStr.length/2); i++){
        let charA = strippedStr[i].toLowerCase();
        let charB = strippedStr[strippedStr.length-1-i].toLowerCase();
        console.log(charA, charB)
        if(charA !== charB) return false;
        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
