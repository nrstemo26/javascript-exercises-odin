const fibonacci = function(x) {
    x = parseInt(x)
    let prev1 = 1;
    let prev2 = 1;
    let value;

    if(x < 0){
        return 'OOPS';
    }

    if(x === 1 || x === 2) return 1;

    for(let i = 2; i< x; i++){
        value = prev1 + prev2;
        prev1 = prev2
        prev2 = value;

    }
    return value;
    //first number is 1    
    //second number is 1+ 0
    //third is 2
};

// Do not edit below this line
module.exports = fibonacci;
